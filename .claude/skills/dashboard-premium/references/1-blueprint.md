# Etapa 1: Blueprint

**Papel:** Product Designer sênior + engenheiro front-end.
**Objetivo:** decidir a estrutura inteira antes de escrever código, para que a implementação não dependa de decisões improvisadas.
**Regra:** nenhuma linha de código nesta etapa.

## Checklist

1. **Mapa de telas (sitemap).** Liste todas as telas, agrupadas como aparecerão na navegação. Para dashboards pequenos, 3 a 6 telas bastam; mais que isso, justifique.
2. **Para cada tela, responda em uma linha cada:**
   - Objetivo: por que essa tela existe
   - Informação prioritária: o que o olho tem que ver primeiro
   - Ação principal: o botão que mais importa
   - Elementos secundários: o resto
3. **Navegação.** Sidebar ou topo? Justifique pelo número de telas e pelo dispositivo principal. Defina o que fica no header (busca, período, notificações, usuário).
4. **Inventário de elementos** por tela: cards, tabelas, gráficos, filtros, busca, estados vazios, notificações, configurações. Marque o que se repete entre telas: são os candidatos a componente da etapa 4.
5. **Anatomia da tela principal**, em wireframe de texto:

```
┌ Header: [Logo] [Busca]                 [Período ▾] [🔔] [Avatar] ┐
├ Sidebar ┬ Faixa 1: 4 KPIs                                         │
│ Início  │ Faixa 2: gráfico de tendência (2/3) │ Comparação (1/3) │
│ Pedidos │ Faixa 3: "Precisa da sua atenção" (lista com ações)     │
│ …       │ Faixa 4: tabela de histórico                            │
└─────────┴─────────────────────────────────────────────────────────┘
```

6. **UX em poucos cliques.** Para as 3 ações principais do briefing, conte os cliques desde a home. Se alguma passar de 2, reorganize.
7. **Ordem de implementação.** Sequência que mantém o projeto executável a cada passo (normalmente: estrutura e navegação, tokens, home, demais telas, estados, polimento).

## Saída

Salve em `docs/dashboard/blueprint.md`: sitemap, ficha de cada tela, anatomia da principal, componentes candidatos e ordem de implementação.

No modo completo, **mostre ao usuário só o sitemap e a anatomia da tela principal** e peça aprovação antes da etapa 2.
