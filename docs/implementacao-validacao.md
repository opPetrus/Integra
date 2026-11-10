# Integra — implementação e validação

Data: 9 de novembro de 2026

## Fase 4 — aplicação

- SPA em React e TypeScript com navegação por hash, tema claro/escuro e aulas carregadas por módulo.
- Cartões de fórmulas renderizados com KaTeX sob demanda; visualização interativa de somas inferior e superior para `f(x) = x²`.
- Banco de 42 questões com filtros, busca, rascunhos, dicas progressivas, rubrica, gabarito sob demanda, autoavaliação, histórico, fila de revisão e caderno de erros.
- Dois simulados cronometrados, correção por rubrica com soma manual e análise das respostas salvas.
- Exportação/importação do progresso em JSON validado. Armazenamento local em IndexedDB, com fallback para localStorage.
- Sem servidor, conta ou chamada paga de IA. A opção “Corrigir com GPT” apenas copia um prompt para o estudante decidir se deseja enviar.

## Fase 5 — verificações

- `npm test`: 4 testes passaram, cobrindo alinhamento entre aulas, exercícios, módulos e simulados, além de estados e notas inválidos.
- `npm run build`: compilação TypeScript e build local de produção concluídos.
- `npm run build:pages`: build concluído com o caminho-base `/Integra/`.
- `npm audit`: 0 vulnerabilidades encontradas.
- Revisão funcional no navegador local: navegação Curso/Prática/Simulados, visualização e controle de partições, exibição das 42 questões e abertura explícita do gabarito. A inspeção também encontrou e corrigiu a perda de texto após subtítulos no renderer Markdown.
- A revisão matemática dos 42 itens e as pendências das questões 51 e 59(d) estão documentadas em [validação de conteúdo — Fase 3](validacao-conteudo-fase-3.md).

## Fase 6 — publicação

O repositório público [`opPetrus/Integra`](https://github.com/opPetrus/Integra) está configurado para GitHub Actions e o site está publicado em [https://oppetrus.github.io/Integra/](https://oppetrus.github.io/Integra/). A primeira execução falhou porque Pages ainda estava desativado; depois da configuração, a tentativa 2 da workflow concluiu com sucesso: build, Setup Pages, upload e deploy. Consulte a [execução de deploy](https://github.com/opPetrus/Integra/actions/runs/42740330991).

## Limites conhecidos

- O banco oferece 42 exercícios autorais alinhados às famílias da Lista 4; não transcreve nem resolve todos os 116 enunciados do PDF.
- A plataforma não corrige expressões matemáticas automaticamente. O estudante atribui notas por rubrica, inclusive nos simulados.
- O progresso fica neste navegador e deve ser exportado para backup. A importação aceita apenas o formato e a versão atuais e pede confirmação antes de substituir os dados locais.
- A publicação ainda precisa de um repositório independente e da execução bem-sucedida do workflow.
