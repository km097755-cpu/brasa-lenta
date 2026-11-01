---
name: dashboard-premium
description: "Método em 6 etapas para criar dashboards e painéis administrativos com cara de produto SaaS premium, não de template (blueprint, direção visual, home em camadas, componentes, polimento e teste de produto real). Use quando o usuário digitar /dashboard-premium, pedir um dashboard, painel, admin, backoffice, painel de métricas ou KPIs, ou quiser deixar um dashboard existente com aparência profissional ou mais cara. Aceita 'sprint' para ir direto ao dashboard funcionando, ou o nome de uma etapa (blueprint, visual, home, componentes, polimento, teste) para rodar só ela."
argument-hint: "[sprint | blueprint | visual | home | componentes | polimento | teste] [descrição do produto]"
---

# Dashboard Premium

Transforma uma ideia solta em um dashboard que parece produto final. O segredo não é um efeito visual, é a ordem: decidir antes de desenhar, desenhar antes de codar, testar como usuário real antes de entregar.

## Passo 0: escolher o modo

Leia o argumento do usuário:

| Argumento | Modo | O que fazer |
|---|---|---|
| vazio ou descrição | **Completo** | As 6 etapas em ordem, com 2 pausas para aprovação |
| `sprint` | **Sprint** | As 6 etapas sem pausas; você decide e segue. Meta: dashboard funcionando |
| nome de etapa | **Etapa avulsa** | Só aquela etapa. Exige o briefing e, se existir, `docs/dashboard/` |

Dashboard já existente no repositório? Pule para `polimento` + `teste`, a não ser que o usuário peça para refazer.

## Passo 1: briefing (uma vez só)

Antes de qualquer etapa, preencha este briefing. **Primeiro descubra sozinho** (leia o repositório: README, stack, dados, nome da marca, cores e fontes já usadas). Só pergunte o que não der para deduzir, **numa única mensagem, no máximo 5 perguntas**, e sugira uma resposta padrão em cada uma para o usuário só confirmar.

```
Produto:            o que é e para quem
Usuário do painel:  quem abre todo dia e com que pressa
Pergunta nº 1:      o que ele precisa saber em 5 segundos
Métricas-chave:     3 a 5 números que importam de verdade
Ações principais:   o que ele faz depois de olhar (aprovar, repor, ligar…)
Dados:              reais (de onde?) ou fictícios
Marca:              3 a 5 adjetivos + cores/fontes existentes
Stack:              a do projeto; se não houver, a mais simples que resolve
Fora do escopo:     o que NÃO será construído agora
```

Em modo sprint, não pergunte nada que tenha um padrão razoável: assuma, anote a suposição no briefing e siga.

Salve o briefing em `docs/dashboard/briefing.md`.

## Passo 2: as 6 etapas

Cada etapa tem um arquivo de referência com o checklist completo. **Leia o arquivo da etapa só quando chegar nela.**

| # | Etapa | Entrega | Referência |
|---|---|---|---|
| 1 | Blueprint | Mapa de telas, anatomia da tela principal, ordem de implementação. Sem código | `references/1-blueprint.md` |
| 2 | Direção visual | 3 direções, uma escolhida, mini design system em tokens | `references/2-direcao-visual.md` |
| 3 | Home em camadas | Tela principal funcionando com dados realistas | `references/3-home.md` |
| 4 | Componentes | Biblioteca mínima reutilizável, sem duplicação | `references/4-componentes.md` |
| 5 | Polimento | Os 10 detalhes amadores corrigidos + microinterações úteis | `references/5-polimento.md` |
| 6 | Teste de produto real | Auditoria com nota antes/depois, críticos corrigidos | `references/6-teste-real.md` |

**Pausas no modo completo:** pare e peça aprovação depois da etapa 1 (estrutura) e da etapa 2 (visual). Mostre o essencial, não o documento inteiro. Erro de estrutura ou de estilo custa barato aqui e caro depois.

**Ordem de construção real:** na prática, as etapas 3 e 4 andam juntas. Construa a home já extraindo os componentes que se repetem, não antes.

## Passo 3: memória do produto

Tudo o que for decidido fica em arquivos, para que a próxima tela (ou a próxima sessão) siga o mesmo padrão sem improvisar:

```
docs/dashboard/
  briefing.md        Passo 1
  blueprint.md       Etapa 1
  design-system.md   Etapa 2 (tokens + regras para novas telas)
  auditoria.md       Etapa 6 (notas antes/depois e pendências)
```

Antes de criar qualquer tela nova num projeto que já tem `docs/dashboard/`, leia `design-system.md` e siga as regras dele.

## Skills parceiras

Use quando estiverem disponíveis; se não estiverem, siga só os checklists das referências.

- **frontend-design**: na etapa 2, para fugir da estética padrão.
- **dataviz**: nas etapas 2 e 3, antes de escrever qualquer gráfico ou cartão de KPI.
- **web-artifacts-builder**: quando a entrega for um artifact React/Tailwind/shadcn de vários componentes.
- **webapp-testing** (Playwright): na etapa 6, para abrir o dashboard de verdade e tirar prints.
- **web-design-guidelines** (Vercel): na etapa 6, como segunda auditoria de interface.

## Regras que valem em todas as etapas

1. **Hierarquia antes de beleza.** Se o usuário não acha a informação nº 1 em 5 segundos, nada mais importa.
2. **Nada decorativo sem função.** Gráfico que não responde a uma pergunta vira número simples ou sai.
3. **Dados fictícios realistas.** Nomes, valores e datas plausíveis, no idioma e no formato do usuário (pt-BR: `R$ 1.234,56`, `01/11/2026`). Nunca "Lorem ipsum", "Item 1" ou números redondos demais.
4. **Todo componente de dados tem 4 estados:** carregando, vazio, erro, com dados.
5. **Projeto executável ao fim de cada etapa.** Nada de "o resto fica para depois" no meio do caminho.
6. **Sem elogio por educação.** Na auditoria, o trabalho é achar o que faria um usuário real desconfiar do produto.
7. **Prioridade quando faltar tempo:** clareza, depois fluxo principal, consistência, responsividade, por último detalhes visuais.

## Entrega final

Feche sempre com:

1. O que foi construído (arquivos e telas) e como abrir ou rodar.
2. Nota da auditoria antes → depois (etapa 6).
3. O que ficou fora do escopo, de propósito.
4. Os 3 próximos passos de maior impacto, em ordem.
