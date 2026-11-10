# Integra

Plataforma local e independente para estudar cálculo integral com base no capítulo 4 do livro de Táboas e na Lista 4.

## Requisitos

Node.js LTS e npm.

## Executar

1. `npm install`
2. `npm run dev`
3. Abra o endereço local exibido pelo Vite.

## Conteúdo e dados

Aulas, exercícios, dicas e gabaritos estão em `content/`. Soluções não aparecem na tentativa inicial. O progresso fica no IndexedDB do navegador; exporte um JSON de tempos em tempos para manter uma cópia.

## Validar antes de publicar

- `npm test` executa os testes de integridade do conteúdo e do progresso importado.
- `npm run build` compila a versão local.
- `npm run build:pages` compila com o caminho-base do GitHub Pages (`/Integra/`).

## Publicar no GitHub Pages

O workflow `.github/workflows/deploy.yml` compila para `/Integra/` e publica a branch `main` via GitHub Actions. Para publicar:

1. Crie um repositório GitHub independente chamado `Integra`.
2. Na pasta deste projeto, inicialize o Git se necessário, faça o commit e envie a branch `main` para esse repositório.
3. Em **Settings → Pages**, selecione **GitHub Actions** como origem.
4. Acompanhe **Actions**; o site estará publicado quando o workflow terminar com sucesso.

O projeto ainda não está conectado nem publicado no GitHub. O workflow e este guia estão prontos para essa etapa.

## Privacidade e escopo

O conteúdo e o progresso são locais. Não há backend, autenticação nem chamada paga de IA. O botão de correção copia um prompt para o chat; o estudante escolhe quando enviá-lo. Os exercícios 51 e 59(d) da fonte permanecem sinalizados para confirmação.

O banco oferece 42 exercícios autorais alinhados às famílias da Lista 4, não soluções para os 116 enunciados. Os detalhes estão nos relatórios:

- [Análise dos PDFs e matriz aprovada](docs/analise-fase-1.md)
- [Revisão matemática e didática do conteúdo](docs/validacao-conteudo-fase-3.md)
- [Implementação, testes e estado da publicação](docs/implementacao-validacao.md)
