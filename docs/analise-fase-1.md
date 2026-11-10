# Integra — Fase 1: análise dos materiais e plano

## Síntese

O capítulo 4 de *Cálculo em uma Variável Real*, de Plácido Zoega Táboas, cobre a integral de Riemann, propriedades e Teorema Fundamental do Cálculo, logaritmo/exponencial/hiperbólicas, técnicas de integração, aplicações geométricas e integrais impróprias. A Lista 4 contém 116 questões: cálculo de primitivas, fundamentos teóricos, aplicações, convergência/divergência e uma seção separada de revisão de derivadas e limites.

O programa de Integra deve seguir o escopo observado nos materiais. Substituição, partes, trigonometria, logaritmos, integrais impróprias, áreas, comprimentos, volumes, superfícies e massa são cobrados diretamente. Séries e equações diferenciais não aparecem como escopo desta lista.

O capítulo e a lista estão acessíveis. O livro tem 332 páginas; o capítulo 4 ocupa as páginas impressas 161–270, e a seção de exercícios começa na página 263. A Lista 4 tem 7 páginas e termina no exercício 116. As páginas relevantes não estão ilegíveis. Como a camada de texto do livro troca alguns símbolos matemáticos, conferi visualmente páginas e fórmulas representativas. Encontrei duas inconsistências na Lista 4 que precisam ser preservadas como pendências de fonte, descritas adiante.

## 1. Análise do capítulo 4

| Seção do livro | Páginas impressas | Conteúdo, condições e resultados |
|---|---:|---|
| 4.1 Integrabilidade e definição de integral | 162–172 | Partições, supremo/ínfimo por subintervalo, somas superior e inferior, refinamentos e critério de integrabilidade de Riemann. A integral exige inicialmente função limitada em intervalo compacto. Toda função contínua, monótona ou limitada com finitas descontinuidades é integrável. Valores em finitos pontos não alteram a integral. Interpretação como área assinada: áreas acima do eixo x contam positivamente e abaixo, negativamente. |
| 4.2 Propriedades da integral | 173–175 | Linearidade, preservação da ordem, aditividade por intervalos e orientação \(\int_b^a=-\int_a^b\). Também estabelece integrabilidade de \(|f|\) e \(\left|\int f\right|\leq\int|f|\), e que produtos de funções integráveis são integráveis. A integral do produto, em geral, não é o produto das integrais. |
| 4.3 Teoremas clássicos | 176–187 | Teorema Fundamental do Cálculo: para \(f\) contínua em intervalo compacto, \(F(x)=F(a)+\int_a^x f(t)\,dt\) equivale a \(F'=f\). Logo \(\int_a^b f=F(b)-F(a)\). Primitivas no mesmo intervalo diferem por constante. A mudança de variável do livro requer \(f\) contínua e \(\varphi\in C^1\), com a imagem de \(\varphi\) contida no domínio de \(f\). Integração por partes é apresentada para \(u,v\in C^1\). O Teorema do Valor Médio para integrais requer continuidade em \([a,b]\). |
| 4.4 Logaritmo e exponencial | 188–205 | Define \(e\) por \(\int_1^e dt/t=1\), e \(\ln x=\int_1^x dt/t\) para \(x>0\). Daí \((\ln x)'=1/x\), leis de logaritmos e exponencial como inversa de \(\ln\), incluindo \(a^x\), mudança de base e derivadas. Define \(\sinh,\cosh\), suas derivadas, identidades, inversas hiperbólicas e primitivas associadas. O trecho também calcula primitivas de \(\ln x\), produtos \(e^x\sin x\), \(e^x\cos x\), entre outras. |
| 4.5 Algumas técnicas do Cálculo Integral | 206–217 | Substituições trigonométricas para radicais quadráticos; o livro também apresenta substituições hiperbólicas. Completamento do quadrado reduz integrais racionais e com raiz quadrática a formas padrão. Potências trigonométricas usam identidades de ângulo duplo, separação de fator em expoentes ímpares e reduções sucessivas para expoentes pares. Funções racionais usam divisão polinomial e frações parciais, incluindo fatores lineares repetidos e quadráticos irredutíveis. |
| 4.6 Definição alternativa de integral | 218–219 | Partições marcadas, malha e somas de Riemann. A definição por limite dessas somas é equivalente à definição por somas superior/inferior; é útil nas aplicações. |
| 4.7 Aplicações da integral | 219–241 | Áreas entre gráficos e escolha entre cortes verticais/horizontais; área polar \(A=\frac12\int r(\theta)^2\,d\theta\); comprimento de arco parametrizado, de gráfico e em coordenadas polares; volume por discos ao girar uma região sob função positiva em torno do eixo x; área de superfícies de revolução; massa como integral da densidade vezes seção transversal. As fórmulas de comprimento requerem curvas \(C^1\) no intervalo considerado. |
| 4.8 Integrais impróprias | 242–262 | Limites em intervalos infinitos e em pontos onde o integrando não é limitado; intervalos bilaterais devem ser divididos em integrais unilaterais. Inclui o teste p, comparação e comparação pelo limite, teste de divergência, convergência absoluta e condicional. Em singularidades internas, as duas integrais laterais precisam convergir separadamente. Um limite simétrico pode existir sem que a integral imprópria exista. |
| 4.9 Exercícios | 263–270 | Exercícios do capítulo, usados como base para a matriz e para os módulos abaixo. |

Nas páginas 261–262 o livro constrói formalmente \(\pi\), seno e cosseno a partir de integrais e comprimento de arco. Essa passagem dá contexto teórico, mas a Lista 4 não cobra a construção como família de exercícios; ela pressupõe o uso usual das funções trigonométricas.

## 2. Análise da Lista 4

| Exercícios | Qtde. | Famílias de questões |
|---|---:|---|
| 1–18 | 18 | Primitivas por reconhecimento e substituição; potências e radicais; padrões trigonométricos e racionais; inversas trigonométricas; exemplos que exigem partes. |
| 19–21 | 3 | Demonstração de fórmulas de redução por integração por partes: potências de seno/cosseno, \(x^n\sin x\) e potências de secante. |
| 22–25 | 4 | Propriedades teóricas da integral de Riemann: paridade, funções nulas salvo em finitos pontos e invariância por redefinição em finitos pontos. |
| 26–29 | 4 | Função acumulada \(F(x)=\int_a^x f\), monotonicidade, periodicidade, exemplo de primitiva não periódica e substituição ligada a \(\ln x\). |
| 30–38 | 9 | Revisão de derivadas: trigonométricas, logaritmo, exponencial, produto, cadeia e expressões compostas. |
| 39–47 | 9 | Revisão de limites trigonométricos, exponenciais e formas indeterminadas. |
| 48 | 1 | Soma inferior de \(1/t\), estimativa para \(\ln 3\) e a desigualdade \(2<e<3\). |
| 49 | 1 | \(\int e^x\cos x\,dx\): partes repetidas/cíclicas. |
| 50–53 | 4 | Áreas cartesianas delimitadas por parábola, \(\tan x\), \(\ln x\) e hipérbole. |
| 54–57 | 4 | Integrais com \(e^x\), \(\sin^2x\), logaritmos e \(a^{\sin x}\); reconhecimento de substituição e combinação de padrões. |
| 58–67 | 10 | Logaritmo em base \(a\), identidades e primitivas hiperbólicas, inversas hiperbólicas e uma integral definida racional. |
| 68–75 | 8 | Radicais quadráticos e formas com denominadores \(a^2\pm x^2\), \(x^2\pm a^2\), além de substituições com exponencial/hiperbólicas. |
| 76–80 | 5 | Áreas cartesianas de conjuntos definidos por desigualdades e áreas polares, incluindo interseção de regiões. |
| 81–84 | 4 | Comprimento de arco em gráfico, curva paramétrica e coordenadas polares. |
| 85–87 | 3 | Área de superfícies de revolução em torno de eixos diferentes e superfície do toro. |
| 88–91 | 4 | Volume de cone e toro; volumes por rotação de regiões em torno dos eixos x ou y. |
| 92 | 1 | Massa de líquido em cilindro com densidade variável pela altura. |
| 93–110 | 18 | Classificação de convergência/divergência: caudas infinitas, singularidades nos extremos e no interior, comparação, oscilação e critérios tipo p. |
| 111–116 | 6 | Fundamentos de integrais impróprias: truncamento simétrico, aditividade, equivalência de limites, comparação e decaimento exponencial. |

Os exercícios 30–47 não justificam um curso geral de derivadas e limites. São uma revisão dirigida. O Integra deve revisar apenas as regras necessárias para conferir primitivas, lidar com logaritmo/exponencial, compreender comprimento de arco e avaliar limites que definem integrais impróprias.

### Pendências detectadas nos enunciados

- **Exercício 51:** o PDF imprime a reta \(x=8\). No intervalo de 0 a 8, \(\tan x\) tem assíntotas verticais; como escrito, isso não delimita a região finita descrita pelo enunciado. Pode haver erro tipográfico, mas não vou substituir o valor por uma hipótese.
- **Exercício 59(d):** o PDF imprime \(\sinh(x+y)=\sinh x\cosh y+\cosh y\sinh x\), repetindo o mesmo produto. Essa igualdade é falsa em geral. A fórmula usual contém \(\cosh x\sinh y\) no segundo termo. O conteúdo do Integra deve manter uma nota de conferência até confirmar a correção da fonte.

## 3. Matriz de cobertura: livro, lista e módulos

| Conteúdo do capítulo 4 | Lista 4 | Módulo do curso |
|---|---|---|
| Partições, somas, integrabilidade, área assinada (4.1) | 22–25, 48; pré-requisito para 76–80 | M1 — Integral de Riemann e interpretação |
| Propriedades, orientação, aditividade, função acumulada (4.2) | 22–28 | M1 e M2 — Propriedades e Teorema Fundamental |
| Primitivas, FTC, substituição, partes, valor médio (4.3) | 1–29, 49, 54–57 | M2–M4 — Primitivas e técnicas |
| Logaritmo, exponencial e hiperbólicas (4.4) | 29, 48–49, 54–75, 82, 86, 98 | M3–M6 — Reconhecimento, funções especiais e técnicas |
| Substituições trigonométricas, quadrado completo, potências trigonométricas, racionais (4.5) | 1–21, 49, 54–75 | M3–M6 — Substituição, partes e formas padrão |
| Soma de Riemann marcada (4.6) | 22–25 e 48; usada como fundamento das aplicações | M1 — Integral de Riemann |
| Área cartesiana e polar (4.7.1) | 50–53, 76–80 | M7 — Áreas |
| Comprimento de arco (4.7.2) | 81–84 | M8 — Comprimento de arco |
| Volume, área de superfície e massa (4.7.3–4.7.5) | 85–92 | M8 — Aplicações no espaço |
| Integrais impróprias (4.8) | 93–116 | M9 — Convergência e divergência |
| Derivadas e limites como pré-requisitos | 30–47 | M0 — Diagnóstico e revisão curta |

A Lista 4 traz questões de sólidos em torno de eixos diferentes. Além do método de discos apresentado no capítulo, o curso deverá explicar a generalização por anéis (arruelas) e escolher cortes perpendiculares ao eixo de rotação quando necessário. Isso é conteúdo necessário para resolver os exercícios 89–91, não um módulo fora do escopo.

## 4. Currículo proposto

| Módulo | O estudante deverá conseguir… | Tópicos e prática da lista |
|---|---|---|
| M0. Diagnóstico e pré-requisitos | Reconhecer as regras de derivada e limites que serão usadas no curso e identificar lacunas. | Revisão curta de trigonométricas, produto/cadeia, \(\ln\), \(e^x\) e limites notáveis; itens selecionados de 30–47. |
| M1. Integral de Riemann | Interpretar integral definida, partições, somas superior/inferior, sinal e propriedades básicas. | Integrabilidade, paridade, aditividade e alteração em finitos pontos; 22–25, 48. |
| M2. Primitivas e Teorema Fundamental | Explicar a relação entre derivada, primitiva, área acumulada e integral definida; verificar uma primitiva derivando. | Constante de integração, avaliação de integrais definidas, monotonicidade e periodicidade de \(F(x)=\int_a^x f\); 26–28. |
| M3. Reconhecimento e substituição | Identificar \(u\) e \(du\), ajustar limites em integrais definidas e escolher substituições simples. | Potências, raiz composta, funções trigonométricas, logaritmos, exponenciais e inversas trigonométricas; 1–11, 14–18, 29, 54–57. |
| M4. Integração por partes e reduções | Escolher \(u,dv\), organizar produtos e reconhecer quando uma redução retorna à integral original. | \(\int u\,dv=uv-\int v\,du\), integrais cíclicas e reduções para potências; 12–13, 16–21, 49, 54, 60–64. |
| M5. Logaritmo, exponencial e hiperbólicas | Usar propriedades, derivadas e primitivas dessas funções com domínio e sinais corretos. | Logaritmo definido por integral, exponencial inversa, \(a^x\), \(\sinh/\cosh\), identidades e funções inversas; 48, 55–67, 73–75. |
| M6. Formas especiais | Reduzir integrais com radicais quadráticos ou racionais a formas padrão, escolhendo a transformação mais curta. | Substituições trigonométricas/hiperbólicas, completar quadrado, potência trigonométrica, divisão polinomial e frações parciais; 4–5, 18–21, 68–75. |
| M7. Áreas planas | Desenhar a região, encontrar interseções, escolher \(dx\) ou \(dy\) e montar a integral correta. | Área entre curvas e área polar; 50–53, 76–80. |
| M8. Arco, rotação e massa | Montar fórmulas a partir da geometria, eixo de rotação e grandeza física, com unidades coerentes. | Comprimento em gráfico, parâmetro e polar; discos/arruelas, superfícies de revolução e massa por densidade; 81–92. |
| M9. Integrais impróprias | Localizar cada singularidade, dividir a integral, aplicar limites e justificar convergência ou divergência. | Intervalos infinitos, singularidades, teste p, comparação, comparação pelo limite, convergência absoluta e casos principais de truncamento; 93–116. |
| M10. Revisão cumulativa e simulados | Resolver questões mistas sem escolher a técnica por indicação do enunciado, explicar erros e planejar retomadas. | Questões representativas de todos os grupos, caderno de erros e dois simulados cronometrados. |

Cada aula deve seguir a estrutura que funciona no Deriva: objetivos, intuição, teoria com condições, exemplos trabalhados, guia de escolha, erros comuns, prática curta e referência do exercício. Para temas geométricos, acrescentar desenho ou controle interativo quando ele ajudar a montar os limites ou visualizar a seção.

## 5. Plano de estudo de 20 horas

A distribuição soma exatamente 1.200 minutos. O foco é prática. Os exercícios devem ser escolhidos por família e dificuldade, com variantes para testar transferência. Resolver com profundidade cada um dos 116 itens provavelmente exigirá tempo adicional; o diagnóstico inicial permitirá ajustar o ritmo.

| Módulo | Teoria | Prática | Diagnóstico/revisão/avaliação | Total |
|---|---:|---:|---:|---:|
| M0 Diagnóstico e pré-requisitos | 10 min | 20 min | 15 min | 45 min |
| M1 Integral de Riemann | 35 min | 50 min | — | 85 min |
| M2 Primitivas e Teorema Fundamental | 30 min | 60 min | — | 90 min |
| M3 Substituição e primitivas básicas | 20 min | 80 min | — | 100 min |
| M4 Partes e fórmulas de redução | 20 min | 80 min | — | 100 min |
| M5 Logaritmo, exponencial e hiperbólicas | 35 min | 80 min | — | 115 min |
| M6 Formas especiais | 35 min | 80 min | — | 115 min |
| M7 Áreas cartesianas e polares | 25 min | 75 min | — | 100 min |
| M8 Comprimento, rotação e massa | 40 min | 105 min | — | 145 min |
| M9 Integrais impróprias | 40 min | 105 min | — | 145 min |
| M10 Revisão e simulados | — | 140 min | 20 min | 160 min |
| **Total** | **290 min** | **875 min** | **35 min** | **1.200 min** |

Os 160 minutos do M10 comportam dois simulados de 50 minutos, 40 minutos de correção orientada e 20 minutos de revisão do caderno de erros. A duração é provisória porque o PDF não informa o formato nem o tempo da prova real. O M0 inclui um diagnóstico curto; os 30–47 servem apenas para localizar pré-requisitos, não para transformar o Integra num curso de derivadas ou limites.

## 6. Referência de produto: Deriva

Examinei o site publicado e a estrutura pública do repositório. O Deriva organiza o estudo em painel, curso por módulos, aulas, prática, revisões, simulados, erros e preferências. As páginas de aula combinam objetivos, intuição, fórmulas/condições, gráfico, exemplos resolvidos, erros frequentes e exercícios relacionados. O painel separa leitura concluída de evidência de autonomia. A navegação usa rotas com hash, adequadas a uma publicação estática no GitHub Pages.

Esses padrões devem guiar a experiência do Integra: mesma clareza e cadência pedagógica, com identidade própria de integrais. A implementação deve ser independente e usar o Deriva apenas como referência visual e funcional.

## 7. Arquitetura e funcionalidades propostas

- React, TypeScript e Vite; KaTeX para fórmulas; publicação estática em GitHub Pages com base compatível com o repositório Integra.
- Separação entre interface, conteúdo pedagógico, exercícios/soluções, regras de domínio, avaliação por rubrica e armazenamento local.
- Navegação por painel, curso, prática, caderno de erros, revisão, simulados, dados e preferências.
- Conteúdo completo e versionado, sem geração em tempo real. Soluções e dicas devem ficar ocultas até a ação do estudante.
- IndexedDB para progresso local; exportação/importação JSON com validação de versão e confirmação antes de substituir dados.
- Correção matemática livre por rubrica, sem comparação de texto. Botão para copiar um prompt contextualizado para GPT e registrar depois a correção recebida; nenhuma API paga.
- Exercícios filtráveis por assunto/dificuldade, rascunho, tentativas, dicas progressivas, solução controlada e marcação de erros recorrentes.
- Revisão cumulativa e espaçada, priorizada pelo desempenho; simulados com cronômetro, correção, nota sobre 10 e plano de retomada.
- Gráficos interativos para área, curva, arco ou sólido quando ajudarem no raciocínio; funcionamento responsivo, navegação por teclado e temas claro/escuro.

Estrutura sugerida inspirada na separação observada no Deriva: componentes compartilhados; conteúdo; domínio; funcionalidades por área; armazenamento; testes; documentação e scripts de publicação.

## 8. Plano de produção e validação

1. **Fase 1 — análise:** concluída nesta entrega; cobertura de materiais, currículo, tempo, referência de produto e pendências de enunciado.
2. **Fase 2 — conteúdo:** escrever aulas, exemplos, exercícios autorais de transferência, dicas e soluções; relacionar cada conteúdo aos números e páginas da fonte.
3. **Fase 3 — validação matemática e didática:** derivar primitivas para conferi-las; recalcular integrais definidas; verificar domínios, sinais, hipóteses, limites, áreas, volumes, superfícies, densidade e convergência. Conferir cada gabarito independentemente.
4. **Fase 4 — aplicação:** construir a experiência local-first e as funcionalidades aprovadas, em repositório Integra separado.
5. **Fase 5 — verificação:** testar fluxos de estudo, dicas/gabaritos, cronômetros, armazenamento, importação/exportação, responsividade, acessibilidade e build de produção; registrar resultados reais.
6. **Fase 6 — GitHub Pages:** configurar base e workflow, documentar publicação e só afirmar que está publicado após confirmação do deploy.

Antes do conteúdo final, também será montada uma planilha interna de rastreabilidade: tópico do capítulo → aula → exemplo/solução → exercício da lista → verificação matemática.

## 9. Assuntos que merecem mais atenção na prova

1. Reconhecer a técnica sem indicação explícita: substituição, partes, trigonometria, completar quadrado ou frações parciais.
2. Manter domínio, sinal, limites e constante corretos; conferir primitivas derivando.
3. Montar área a partir do desenho e escolher a variável que evita dividir a região em mais partes.
4. Usar fórmulas polares e de comprimento de arco sem trocar \(r\), \(r'\), ângulo ou parâmetro.
5. Escolher discos/arruelas pelo eixo de rotação; identificar raios externo e interno.
6. Tratar cada singularidade de uma integral imprópria com limites unilaterais separados.
7. Distinguir convergência da integral bilateral de um valor principal simétrico; o exercício 111 é um alerta explícito.
8. Justificar testes de comparação e não concluir nada quando o teste do limite para divergência dá zero.
9. Praticar demonstrações curtas das reduções e propriedades teóricas, além de cálculo mecânico.
10. Conferir os exercícios 51 e 59(d) com o professor antes de transformá-los em conteúdo do Integra.

## Decisão solicitada

A Fase 1 está concluída. Revise a matriz, o currículo, o orçamento de 20 horas e as duas pendências do PDF. Com sua aprovação, inicio a Fase 2 de produção do conteúdo; mantenho os dois enunciados sinalizados até que sejam confirmados.
