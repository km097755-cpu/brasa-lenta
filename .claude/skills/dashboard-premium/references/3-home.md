# Etapa 3: Home em camadas

**Papel:** responsável pela tela principal de um SaaS premium.
**Objetivo:** uma home que responda, nesta ordem: **o que aconteceu, o que mudou, o que exige atenção e o que eu faço agora.**
**Regra:** a primeira tela precisa parecer um produto final, não uma coleção de widgets.
**Antes de começar:** carregue `dataviz`, se disponível, antes de escrever qualquer gráfico ou KPI.

## As 4 camadas

| Camada | Conteúdo | Regra |
|---|---|---|
| 1. Visão executiva | 3 a 5 KPIs | Só os números do briefing. Cada um com comparação (vs. ontem, semana, meta) |
| 2. Tendências | Evolução e comparações | Um gráfico principal. Mais de 2 gráficos aqui é sinal de enchimento |
| 3. Exige ação | Lista do que precisa de resposta | Cada item tem um botão de ação direto. É a camada que dá cara de produto |
| 4. Detalhe e histórico | Tabela, registros recentes | Ordenável, com filtro e link para a tela completa |

## Ficha de cada card

Para cada card, defina: título, métrica, comparação, contexto (de onde vem, qual período), estado (normal, alerta, crítico), interação (clique leva para onde?) e comportamento no celular.

## Escolher a forma certa para cada dado

| Pergunta do dado | Forma |
|---|---|
| Quanto é agora? | Número grande + variação |
| Como evoluiu no tempo? | Linha (ou área, se for volume acumulado) |
| Quem é maior? | Barras horizontais ordenadas |
| Quanto falta para a meta? | Barra de progresso |
| Parte de um todo, até 3 partes | Barra empilhada. Pizza só em último caso |
| Lista com vários atributos | Tabela |

Se o gráfico não responde a uma pergunta do briefing, troque por número simples ou remova.

## Microcopy

Rótulos curtos e concretos, no idioma do usuário:

- KPI: "Faturamento hoje", não "Receita total do período selecionado"
- Vazio: diga o que aconteceu e o próximo passo ("Nenhum pedido ainda hoje. Os pedidos aparecem aqui assim que chegarem.")
- Erro: o que deu errado + botão de tentar de novo, sem jargão técnico
- CTAs com verbo: "Repor estoque", "Ver pedido", não "OK" ou "Clique aqui"

## Dados fictícios

Gere um arquivo de dados separado do layout (ex.: `data/mock.js`) com volume suficiente para a tela parecer viva: pelo menos 30 dias de série histórica, 20 ou mais linhas de tabela, nomes e valores plausíveis, variações para cima e para baixo, e pelo menos 2 itens na camada 3.

## Saída

1. Wireframe de texto da home (rápido, em cima da anatomia do blueprint)
2. Código completo e executável da página, usando os tokens da etapa 2 e componentes reutilizáveis
