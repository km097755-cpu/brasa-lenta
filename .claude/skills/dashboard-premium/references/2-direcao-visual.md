# Etapa 2: Direção visual

**Papel:** diretor de arte de interfaces SaaS premium.
**Objetivo:** dar ao dashboard uma identidade própria, que continue funcionando quando a tela estiver cheia de dados.
**Antes de começar:** se a skill `frontend-design` estiver disponível, carregue-a. Se houver gráficos, carregue também `dataviz`.

## 1. Três direções realmente diferentes

Diferentes de verdade: mude conceito, fundo, densidade e tipografia, não só a cor de destaque. A identidade vem do mundo do produto (uma hamburgueria não tem a mesma cara de um painel financeiro). Para cada direção:

- Conceito em uma frase e a sensação que transmite
- Paleta: fundo, superfície, texto, destaque e semânticas (sucesso, alerta, erro, info)
- Tipografia: família de títulos, família de texto, família de números (algarismos tabulares)
- Cards, bordas, sombras e radius
- Ícones e gráficos
- Botões e estados de hover

**Proibido como ponto de partida:** fundo cinza-claro + cards brancos idênticos + destaque azul + ícone colorido em cada card. É a cara de "dashboard gerado por IA".

## 2. Filtro

Dê nota de 1 a 5 a cada direção:

| Critério | A | B | C |
|---|---|---|---|
| Percepção premium | | | |
| Legibilidade com muitos dados | | | |
| Diferenciação | | | |
| Facilidade de implementar | | | |
| Coerência com a marca e o produto | | | |

Escolha a vencedora e diga em uma frase por que ela venceu.

## 3. Mini design system

Transforme a vencedora em tokens (variáveis CSS ou o tema da stack):

- **Cores semânticas** com versões para modo claro e escuro, e contraste AA verificado (texto 4,5:1, elementos grandes 3:1)
- **Tipografia:** escala de 5 a 7 tamanhos, pesos, altura de linha; números sempre tabulares
- **Espaçamento:** escala de 4 ou 8 px; grid e largura máxima do conteúdo
- **Radius, sombras e bordas:** 2 ou 3 níveis cada, não mais
- **Componentes:** altura de botões e inputs (sm/md/lg), badges, inputs, dropdowns, modais, tooltips, tabelas (altura de linha, cabeçalho, zebra ou não)
- **Estados:** hover, focus visível, active, disabled, loading

## 4. Regras para novas telas

Escreva de 5 a 10 regras objetivas, testáveis, para que qualquer tela nova pareça do mesmo produto. Exemplo do tipo certo: "Todo valor em R$ alinha à direita e usa a fonte de números". Exemplo do tipo errado: "Manter o visual limpo".

## Saída

Salve em `docs/dashboard/design-system.md`: direção escolhida, tokens e regras.

No modo completo, **mostre as 3 direções em poucas linhas cada, mais a tabela de notas**, e peça aprovação. Se der, mostre uma amostra visual (um card de KPI e uma linha de tabela em cada direção).
