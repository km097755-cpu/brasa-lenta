// Prints do Bookafé no celular e no desktop, nos temas claro e escuro.
// Uso: node .claude/skills/project-conventions/prints.js [pasta-de-saida]
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "../../..");
const page_url = "file://" + path.join(root, "index.html");
const out = path.resolve(process.argv[2] || path.join(root, "prints"));
fs.mkdirSync(out, { recursive: true });

const views = [
  { name: "celular", width: 390, height: 844, mobile: true },
  { name: "desktop", width: 1280, height: 800, mobile: false },
];
const themes = ["dark", "light"];

(async () => {
  const browser = await chromium.launch();
  let problems = 0;
  for (const v of views) {
    for (const theme of themes) {
      const ctx = await browser.newContext({
        viewport: { width: v.width, height: v.height },
        deviceScaleFactor: 2,
        isMobile: v.mobile,
        hasTouch: v.mobile,
        colorScheme: theme,
      });
      const page = await ctx.newPage();
      await page.goto(page_url, { waitUntil: "load", timeout: 15000 }).catch(() => {});
      const info = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        href: (document.querySelector("a.wa") || {}).href || "",
      }));
      const file = path.join(out, `${v.name}-${theme === "dark" ? "escuro" : "claro"}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log("print:", file);
      if (info.overflow > 0) {
        problems++;
        console.log(`  ! rolagem horizontal de ${info.overflow}px em ${v.name}/${theme}`);
      }
      if (v.name === "celular" && theme === "dark" && info.href.includes("5500000000000")) {
        console.log("  ! WHATSAPP_NUMBER ainda é o fictício (5500000000000)");
      }
      await ctx.close();
    }
  }
  await browser.close();
  console.log(problems ? `${problems} problema(s) de layout.` : "Layout ok: sem rolagem horizontal.");
})();
