# Etapa 5: Polimento

**Papel:** especialista em acabamento de interface e microinterações.
**Objetivo:** elevar uma interface que já funciona, sem reconstruir.
**Regra:** o usuário deve sentir que o produto ficou mais caro sem conseguir apontar um único efeito responsável.

## 1. Auditoria: os 10 piores primeiro

Analise espaçamento, alinhamento, hierarquia, densidade, tipografia, contraste, estados, responsividade e consistência. Liste os **10 detalhes que mais denunciam aparência amadora**, do pior para o menos grave. Os suspeitos de sempre:

- Espaçamentos que não seguem a escala (13 px aqui, 18 px ali)
- Números desalinhados: moeda à esquerda, algarismos não tabulares
- Tudo com o mesmo peso visual, sem um elemento dominante por tela
- Texto cinza-claro demais sobre fundo claro (contraste reprovado)
- Ícone colorido decorativo em todo card
- Bordas e sombras ao mesmo tempo, em vários níveis diferentes
- Botões sem estado de hover, foco ou carregamento
- Tabela sem alinhamento por tipo de dado, ou com linhas apertadas demais
- Truncamento sem tooltip; quebra de layout com texto longo
- Celular: tabela estourando a largura, alvos de toque menores que 44 px

## 2. Microinterações: só as que têm função

Adicione apenas o que explica uma mudança de estado:

- Hover sutil em itens clicáveis (cor ou elevação, nunca os dois exagerados)
- Feedback de clique em botões
- Skeleton no carregamento, no formato do conteúdo final
- Transição suave ao aplicar filtros
- Entrada discreta dos cards ao abrir (opacidade + 4 a 8 px de deslocamento, de 150 a 250 ms)
- Tooltip em valores truncados e em ícones sem rótulo
- Estados de carregando, sucesso e erro em ações
- Seleção de linha na tabela
- Focus visível em tudo que recebe teclado
- Indicação de "atualizado há X min" quando os dados mudam

## 3. Desempenho e acessibilidade do movimento

- Animar só `opacity` e `transform`; transições em CSS sempre que der
- Duração entre 120 e 300 ms; nada em loop chamando atenção
- Respeitar `@media (prefers-reduced-motion: reduce)`, desligando deslocamentos

## Saída

Código revisado + tabela curta para cada melhoria importante:

| Antes | Alteração | Impacto |
|---|---|---|
