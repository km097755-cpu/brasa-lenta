---
name: project-conventions
description: Regras da casa do Bookafé (landing page de hamburgueria). Use sempre que for editar o index.html, mudar cardápio, preços, textos, cores ou o botão de WhatsApp, e antes de entregar qualquer mudança visual.
---

# Convenções do Bookafé

## O projeto
- Página única: `index.html` com HTML, CSS e JavaScript juntos. Abre com duplo clique, sem servidor.
- **Nada de build, framework ou dependência nova** (sem React, Tailwind, npm). Se uma mudança parecer pedir isso, pergunte antes.
- Única dependência externa: Google Fonts (Big Shoulders Display e Hanken Grotesk). As fontes de reserva no `--font-display` e `--font-body` precisam continuar lá.

## Texto
- Português do Brasil, tom direto e caloroso ("Sem pressa, com fumaça").
- Preços em reais no formato `R$ 32` (com espaço, sem centavos quando for valor redondo; `R$ 32,90` quando houver centavos, com vírgula).
- Horário no formato `Ter a dom, das 18h às 23h30`.

## Cardápio
Cada item segue exatamente esta estrutura (copie de um item existente):

```html
<li class="item"><div class="row"><h3>Nome</h3><span class="dots" aria-hidden="true"></span><span class="price">R$ 00</span></div><p>Descrição curta.</p></li>
```

- Selos opcionais dentro do `<h3>`: `<span class="tag">PICANTE</span>` ou `<span class="tag">VEGETARIANO</span>`, em maiúsculas.
- Hambúrgueres ficam em `#cardapio`; acompanhamentos e bebidas, na seção `.sides`.

## Visual
- Cores só pelas variáveis do `:root` (`--bg`, `--surface`, `--fg`, `--accent`, `--muted`, `--line`). Não escreva cor solta fora delas, exceto no hambúrguer desenhado em CSS.
- Tema claro e escuro: qualquer variável nova precisa existir nos três blocos (`:root`, `prefers-color-scheme: light` e `[data-theme="light"]`).
- Celular primeiro: abaixo de 720px tudo vira uma coluna e o botão fixo `.sticky` aparece. Nada pode gerar rolagem horizontal.

## WhatsApp
- Todos os botões de pedido usam a classe `wa`; o link é montado no script a partir de `WHATSAPP_NUMBER`.
- O número é só dígitos com DDI e DDD (ex.: `5511999998888`). O valor `5500000000000` é fictício: avise o usuário se ele pedir para publicar a página com esse número.

## Antes de entregar uma mudança visual
Tire os prints e olhe para eles (celular 390px e desktop 1280px, temas claro e escuro):

```bash
node .claude/skills/project-conventions/prints.js <pasta-de-saida>
```

Confira: sem rolagem horizontal, preços alinhados ao pontilhado, botão fixo visível no celular, contraste legível nos dois temas. O script também avisa se o número do WhatsApp ainda for o fictício.
