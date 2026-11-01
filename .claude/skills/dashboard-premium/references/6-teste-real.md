# Etapa 6: Teste de produto real

**Papel:** QA, revisor de UX e product designer ao mesmo tempo.
**Objetivo:** achar tudo o que quebra quando o dashboard deixa de ser mockup e passa a ser usado.
**Regra:** não elogie por educação. Procure o que faria um usuário real abandonar, se confundir ou desconfiar do produto.

## 1. Teste de verdade, não só mental

Sempre que der, **abra o dashboard num navegador** (skill `webapp-testing` / Playwright) e tire prints em 3 larguras: **375 px, 768 px e 1440 px**. Olhe os prints antes de dar qualquer nota. Se não der para abrir, diga isso e faça a revisão pelo código.

## 2. Cenários de estresse

Force cada cenário trocando os dados fictícios ou simulando a falha, e anote o que acontece:

| Cenário | O que verificar |
|---|---|
| Texto longo (nome de 60 caracteres) | Trunca com tooltip, sem quebrar o layout |
| Número enorme (R$ 12.345.678,90) | Cabe no card; formato abreviado se precisar |
| Tabela vazia / filtro sem resultado | Estado vazio com mensagem e próximo passo |
| Milhares de linhas | Paginação ou virtualização, sem travar |
| Carregamento lento | Skeleton aparece, layout não pula |
| API com erro | Mensagem clara + tentar de novo; o resto da tela continua de pé |
| Gráfico sem dados | Estado vazio no lugar de um eixo em branco |
| Nomes duplicados | Dá para distinguir os itens |
| Usuário sem permissão | Ação desabilitada ou escondida, com motivo |
| Celular estreito (320 px) | Nada estoura a largura; alvos de toque com 44 px ou mais |
| Só teclado | Tab percorre tudo em ordem lógica, foco sempre visível |

## 3. Revisão de UX

Navegação, hierarquia, consistência com o `design-system.md`, affordance (o que é clicável parece clicável), feedback, contraste, foco por teclado e clareza das ações. Se a skill `web-design-guidelines` estiver disponível, rode-a como segunda opinião.

## 4. Nota de 0 a 100

| Área | Antes | Depois |
|---|---|---|
| Design | | |
| UX | | |
| Responsividade | | |
| Consistência | | |
| Acessibilidade | | |
| Pronto para produção | | |

Nota honesta: um mockup bonito sem estados de erro não passa de 60 em "Pronto para produção".

## 5. Correção

Classifique cada problema em **CRÍTICO, ALTO, MÉDIO e POLIMENTO**. Corrija direto no código tudo que for crítico e alto. Depois **repita os prints e a nota** e mostre o antes e depois.

## Saída

Salve em `docs/dashboard/auditoria.md`: notas antes e depois, problemas por gravidade, o que foi corrigido e o que ficou pendente.
