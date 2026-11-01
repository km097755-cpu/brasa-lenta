# Etapa 4: Componentes

**Papel:** arquiteto front-end de sistemas de componentes.
**Objetivo:** a biblioteca mínima que monta o produto inteiro sem duplicar interface nem lógica.
**Regra:** antes de criar um componente novo, verifique se um existente resolve com uma variante ou composição. Extraia padrões que já se repetem; não abstraia o que só aparece uma vez.

## Catálogo: implemente só o que o blueprint usa

| Grupo | Componentes |
|---|---|
| Estrutura | AppShell, Sidebar, Header |
| Dados | MetricCard, ChartCard, DataTable, Pagination |
| Filtros | FilterBar, SearchInput, DateRange, Tabs |
| Feedback | Badge, Toast, Tooltip |
| Estados | EmptyState, LoadingState / Skeleton, ErrorState |
| Camadas | Modal, Drawer, Dropdown, CommandMenu |

## Ficha de cada componente

- **Props:** só as necessárias, com nomes claros
- **Variantes:** ex.: `MetricCard` normal, alerta e crítico; `Badge` por status
- **Estados:** loading, vazio e erro, quando o componente exibe dados
- **Responsividade:** como se comporta abaixo de 640 px
- **Acessibilidade:** elemento HTML correto (button é button, tabela é table), rótulos, foco visível, Esc fecha Modal e Drawer
- **Exemplo de uso:** 2 a 5 linhas

## Organização de pastas

Adapte à stack. Em projetos React/Next:

```
src/
  components/ui/        genéricos (Button, Badge, Modal…)
  components/dashboard/ do domínio (MetricCard, PedidosTable…)
  pages/ ou app/        telas
  hooks/                lógica reutilizável (useFilters, usePeriodo…)
  data/                 dados fictícios e acesso a dados
  lib/                  formatadores (moeda, data, número)
```

Em projeto de arquivo único (HTML/CSS/JS puro), a mesma separação vira seções comentadas do arquivo, com classes utilitárias e funções `render*()` reutilizáveis.

## Sinais de alerta no código

- Mesma sequência longa de classes copiada em várias telas: extraia um componente ou classe
- Formatação de moeda ou data escrita à mão em mais de um lugar: centralize em `lib/`
- Componente com mais de 8 props ou um "if" por variante: provavelmente são dois componentes
- Cores ou tamanhos fixos no código, fora dos tokens da etapa 2
