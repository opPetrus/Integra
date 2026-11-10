# Integra — curso de integrais (conteúdo da Fase 2)

Versão editorial 1.0. O conteúdo segue a matriz da Fase 1. Os enunciados e metadados estão em exercicios.md; as soluções ficam em gabarito.md, para a interface escondê-las até o estudante pedir.

## M0 — Diagnóstico e pré-requisitos

### Objetivos
Reconhecer regras de derivação usadas para conferir primitivas, calcular limites elementares e operar com logaritmos e exponenciais. Esta é uma triagem curta, não um curso geral de derivadas.

### Intuição e teoria essencial
Integrar desfaz uma derivação; conferir uma resposta usa as regras já conhecidas. Integrais impróprias serão definidas por limites. Relembre: (fg)'=f'g+fg'; (f(g(x)))'=f'(g(x))g'(x); (e^x)'=e^x; (a^x)'=a^x ln(a), a>0; (ln x)'=1/x, x>0; (sin x)'=cos x; (cos x)'=-sin x. Limites úteis: sin x/x→1 e (e^x-1)/x→1 quando x→0. A cadeia inclui a derivada interna: d[ln(g(x))]/dx=g'(x)/g(x), quando g(x)>0.

### Exemplo trabalhado
Para F(x)=ln(1+x²), F'(x)=2x/(1+x²). Portanto F é primitiva desse quociente em R; o argumento do logaritmo é sempre positivo.

### Estratégia, erros e fechamento
Antes de integrar, circule a composição e derive a parte interna. Ao conferir, derive a resposta inteira. Não confunda (ln g)' com 1/ln(g), não omita g' e não use limite notável sem conferir a forma. Resolva E-M0-1 a E-M0-3; registre lacunas específicas. Origem: Lista 4, 30–47.

## M1 — Integral de Riemann e interpretação

### Objetivos
Interpretar a integral definida como limite de somas; distinguir área geométrica de assinada; usar integrabilidade, paridade e propriedades.

### Intuição e teoria essencial
Divida [a,b] em intervalos curtos e aproxime cada faixa por retângulos. Para partição P:a=x0<...<xn=b, tome m_i=inf f e M_i=sup f em cada faixa. As somas inferior L(P)=Σm_iΔx_i e superior U(P)=ΣM_iΔx_i aproximam a integral. Uma função limitada é Riemann-integrável se há partições com U(P)-L(P) arbitrariamente pequeno. Toda função contínua em intervalo compacto, toda monótona e toda função limitada com finitas descontinuidades é integrável.

Linearidade, aditividade e orientação: ∫a^b(αf+βg)=α∫f+β∫g; ∫a^c f+∫c^b f=∫a^b f; ∫b^a f=-∫a^b f. Para f ímpar em [-a,a], a integral é zero; para f par, ∫-a^a f=2∫0^a f. A integral é área assinada; modificar valores em finitos pontos não a altera.

### Exemplos trabalhados
Para f(x)=x em [0,1] com n faixas iguais, L_n=(n-1)/(2n) e U_n=(n+1)/(2n); a diferença tende a zero e ambas tendem a 1/2. Para x³ em [-2,2], a simetria dá integral zero, embora haja área geométrica dos dois lados.

### Estratégia, erros e fechamento
Escreva Δx e ponto de amostragem em somas. Confirme que o intervalo é simétrico antes de usar paridade. Para área total, integre |f| ou divida nos zeros. Não suponha que toda função limitada é integrável. Resolva E-M1-1 a E-M1-3. Origem: 22–25, 48; aplicações em 76–80.

## M2 — Primitivas, integral definida e Teorema Fundamental

### Objetivos
Relacionar derivada, primitiva e acumulação; calcular integrais definidas por uma primitiva; derivar funções definidas por integral com limite composto.

### Intuição e teoria essencial
A(x)=∫a^x f(t)dt acumula área assinada. Se f é contínua, acrescentar um pequeno intervalo acrescenta aproximadamente um retângulo de altura f(x); assim A'(x)=f(x). Se F'=f, então ∫a^b f=F(b)-F(a). Todas as primitivas de f num intervalo diferem por constante; integral indefinida inclui +C. Para limite composto, d/dx ∫a^{g(x)}f(t)dt=f(g(x))g'(x). Se f é contínua, o valor médio garante c com ∫a^b f=f(c)(b-a).

### Exemplos trabalhados
A(x)=∫2^{x²}cos(t)dt implica A'(x)=2x cos(x²); o sinal segue g'(x). Para ∫0^1 2x/(1+x²)dx, use F=ln(1+x²), e obtenha ln 2.

### Estratégia, erros e fechamento
Na integral definida aplique F(b)-F(a), conservando parênteses. Para função acumulada identifique integrando e limite móvel antes de derivar. Acompanhe o sinal de f para decidir crescimento. Não ponha C em integral definida, não inverta a ordem dos extremos e não omita a derivada interna. Resolva E-M2-1 a E-M2-3. Origem: 26–28, 48.

## M3 — Reconhecimento de padrões e substituição

### Objetivos
Reconhecer uma composição com derivada interna; escolher u; trocar limites corretamente; respeitar o domínio.

### Intuição e teoria essencial
Substituição é regra da cadeia ao contrário. Se u=g(x), du=g'(x)dx e ∫f(g(x))g'(x)dx=∫f(u)du. Em integral definida, mude limites para g(a),g(b), mantendo orientação; ou volte à variável x antes de avaliar. Padrões: g'/g→ln|g|; g'g^n→g^{n+1}/(n+1), n≠-1; g'/sqrt(1-g²)→arcsin(g); g'e^g→e^g.

### Exemplos trabalhados
Em ∫2x/(1+x²)dx, u=1+x², du=2x dx, resultado ln(1+x²)+C. Em ∫x²sqrt(x³+1)dx, u=x³+1, x²dx=du/3, resultado (2/9)(x³+1)^{3/2}+C.

### Estratégia, erros e fechamento
Circule a composição, derive-a e procure o fator. Uma constante pode ser ajustada; fator que não aparece nem se simplifica é sinal para tentar outra técnica. Escreva o diferencial para não perder fatores. Não misture novos u com dx antigo, não mantenha limites antigos, não esqueça |u| no logaritmo. Resolva E-M3-1 a E-M3-3. Origem: 1–11, 14–18, 29, 54–57.

## M4 — Integração por partes e fórmulas de redução

### Objetivos
Escolher u e dv em produtos; resolver integrais cíclicas; deduzir redução sem perder termos de fronteira.

### Intuição e teoria essencial
A regra do produto rearranjada e integrada dá ∫u dv=uv-∫v du. Use quando derivar um fator o simplifica e integrar o outro é viável. Para u,v continuamente deriváveis, ∫a^b uv'=[uv]a^b-∫a^b vu'. Em ciclos, a integral original reaparece; nomeie-a I, forme a segunda relação e resolva a equação.

Para n≥2: ∫sin^n x dx=-(sin^{n-1}x cos x)/n +(n-1)/n∫sin^{n-2}x dx. A recorrência reduz o expoente em dois e precisa de valores-base.

### Exemplos trabalhados
∫x e^x dx, com u=x,dv=e^x dx, dá xe^x-∫e^x dx=e^x(x-1)+C. Para I=∫e^x cos x dx, uma aplicação dá I=e^x cos x+J, J=∫e^x sin x dx; outra dá J=e^x sin x-I. Logo I=e^x(sin x+cos x)/2+C.

### Estratégia, erros e fechamento
Em polinômio vezes exponencial/trigonométrica, derive o polinômio. Para ln x sem produto, escreva ln x·1. Se a integral piora, reveja a escolha. Não perca o sinal de du nem o termo uv nos limites. Resolva E-M4-1 a E-M4-3; complementares E-M4-4 e E-M4-5. Origem: 12–13, 16–21, 49, 60–64.

## M5 — Logaritmo, exponencial e funções hiperbólicas

### Objetivos
Integrar ln, exp, a^x, sinh e cosh; usar identidades com domínio e sinal corretos.

### Intuição e teoria essencial
ln x=∫1^x dt/t para x>0; isso explica ln'=1/x. A exponencial é a inversa do logaritmo. sinh e cosh combinam e^x e e^{-x}: sinh=(e^x-e^{-x})/2, cosh=(e^x+e^{-x})/2. Daí sinh'=cosh, cosh'=sinh e cosh²-sinh²=1. Para a>0, a≠1, ∫a^x dx=a^x/ln(a)+C. Em intervalos que não cruzam zero, ∫dx/x=ln|x|+C. arsinh aceita reais; arcosh exige argumento ≥1. Para a>0, ∫dx/sqrt(x²+a²)=arsinh(x/a)+C=ln|x+sqrt(x²+a²)|+C.

### Exemplos trabalhados
Por partes, ∫ln x dx=x ln x-x+C, x>0. Também ∫x sinh x dx=x cosh x-sinh x+C. Para ∫e^{2x}/sqrt(e^x+1)dx, u=e^x+1 resulta 2sqrt(e^x+1)+C.

### Estratégia, erros e fechamento
Simplifique exponenciais e procure ln(a) em a^x. Se esquecer a identidade, reescreva sinh/cosh pela definição. Não trocar o sinal em cosh²-sinh², omitir ln(a) ou estender ln x para x≤0. Resolva E-M5-1 a E-M5-3; complementar E-M5-4. Origem: 48, 54–67, 73–75. O item 59(d) está sinalizado como possível erro de impressão; não memorize a igualdade impressa.

## M6 — Formas especiais e álgebra de integrais

### Objetivos
Escolher substituições trigonométricas/hiperbólicas para radicais; completar quadrado; tratar potências trigonométricas e frações parciais.

### Intuição e teoria essencial
As formas a²-x², a²+x² e x²-a² sugerem x=a sinθ, a tanθ e a secθ, respectivamente, em intervalos onde a troca é um-para-um. Alternativas hiperbólicas também se aplicam. Complete quadrado: x²+bx+c=(x+b/2)²+(c-b²/4). Para sin^m cos^n, expoente ímpar: reserve um fator e converta o restante; ambos pares: use meio ângulo. Em racionais, se grau do numerador ≥ grau do denominador, faça divisão. Depois decomponha fatores lineares, repetidos e quadráticos irredutíveis; sobre quadrático o numerador é linear. Para sqrt(a²-x²), use x=a sin θ em -a<x<a; para sqrt(x²+a²), x=a sinh u; para sqrt(x²-a²), x=a cosh u ou x=a sec θ nos ramos adequados.

### Exemplos trabalhados
Para ∫sqrt(9-x²)dx, x=3sinθ e retorno ao x dão x sqrt(9-x²)/2 +(9/2)arcsin(x/3)+C. Como frações parciais, 1/(x²-1)=1/[2(x-1)]-1/[2(x+1)], então a primitiva é (1/2)ln|(x-1)/(x+1)|+C, em intervalos que não cruzam os polos.

### Estratégia, erros e fechamento
Verifique primeiro se a derivada do denominador já aparece. Depois avalie fatoração, quadrado completo e forma do radical. Para potências trigonométricas, a paridade decide a identidade; para racionais, compare graus antes de decompor. Erros comuns: ignorar domínio/sinal da raiz; misturar arcsin e arctan; decompor sem divisão; esquecer termos de fatores repetidos. Resolva E-M6-1 a E-M6-3; complementares E-M6-4 a E-M6-6. Origem: 4–5, 18–21, 68–75.

## M7 — Áreas cartesianas e polares

### Objetivos
Esboçar região, encontrar interseções, escolher dx ou dy e montar área polar.

### Intuição e teoria essencial
Área é soma de tiras. Corte vertical: altura = curva superior menos inferior. Corte horizontal: largura = curva direita menos esquerda. Se as curvas trocam de ordem, divida nos cruzamentos. Em polar, a área de setor diferencial é (1/2)r²dθ; para uma fronteira simples A=(1/2)∫r²dθ. Entre fronteiras polares, use (1/2)∫(r_ext²-r_int²)dθ, dividindo onde muda a ordem.

### Exemplos trabalhados
Entre y=x e y=x² em [0,1], A=∫0^1(x-x²)dx=1/6. Para r=2cosθ, -π/2≤θ≤π/2, A=(1/2)∫4cos²θdθ=π; a curva percorre o círculo uma vez.

### Estratégia, erros e fechamento
Desenhe, encontre cruzamentos, marque fronteiras e verifique que integrando e limites são não negativos. Em polar, confirme que não há duplicação. Não subtraia na ordem errada, não integre r no lugar de r²/2 e confira assíntotas antes de afirmar que uma região é finita. Resolva E-M7-1 a E-M7-3; complementar E-M7-4. Origem: 50–53, 76–80. O exercício 51 tem limite impresso incompatível com a região finita; confirme com o professor.

## M8 — Comprimento, rotação e massa

### Objetivos
Montar comprimento, volume, superfície e massa com a geometria do elemento correto.

### Intuição e teoria essencial
Comprimento soma distâncias; volume soma áreas de seção; superfície soma circunferência vezes arco; massa soma densidade vezes volume. Para y=f(x), f∈C¹[a,b], L=∫a^b sqrt(1+(f')²)dx. Para (x(t),y(t)), L=∫sqrt(x'²+y'²)dt; em polar L=∫sqrt(r²+(r')²)dθ. Em rotação no eixo x, discos têm volume πR²dx e arruelas π(R²-r²)dx. Para eixo y, cortes horizontais ou cascas podem simplificar; identifique raio e altura. A área de superfície ao girar y=f(x) em torno de x é 2π∫|f|sqrt(1+f'²)dx, em situação regular. Massa de densidade volumétrica ρ(y) e seção A(y) é ∫ρ(y)A(y)dy.

### Exemplos trabalhados
Para y=x²/2, 0≤x≤1, L=∫sqrt(1+x²)dx=(sqrt2+ln(1+sqrt2))/2. A região entre y=x e y=x², girada em torno de y, tem raio externo sqrt(y), interno y: V=π∫0^1(y-y²)dy=π/6. Cilindro de raio R, altura H e ρ(y)=ρ0(1+y/H): M=πR²∫0^Hρ(y)dy=(3/2)πR²ρ0H.

### Estratégia, erros e fechamento
Desenhe um corte e nomeie medidas a partir do eixo. Verifique unidades e se a densidade é linear, superficial ou volumétrica. Não esqueça raiz em arco; não some raios em vez de subtrair quadrados; em superfície use elemento de arco, não apenas dx. Resolva E-M8-1 a E-M8-3; complementares E-M8-4 e E-M8-5. Origem: 81–92.

## M9 — Integrais impróprias e convergência

### Objetivos
Localizar impropriedades, escrever limites, separar intervalos e justificar critérios.

### Intuição e teoria essencial
Integral imprópria é limite de integrais próprias. ∫a^∞f=lim_{R→∞}∫a^R f. Em singularidade c interior, separe em dois limites laterais; ambos precisam convergir. Em caso bilateral, verifique as duas caudas. Teste p: ∫1^∞dx/x^p converge se p>1 e diverge se p≤1; ∫0^1dx/x^p converge se p<1 e diverge se p≥1. Para f,g≥0, f≤g e integral de g convergente implicam integral de f convergente; f≥g e integral de g divergente implicam divergência. Comparação pelo limite usa razão com limite positivo finito. Convergência absoluta implica convergência. Se f não tende a zero numa cauda, integral diverge; se tende a zero, o teste nada decide. Valor principal de Cauchy não é convergência imprópria usual.

### Exemplos trabalhados
∫1^∞dx/x²=lim_R(1-1/R)=1. ∫0^1dx/sqrt(x)=lim_{ε→0+}2(1-sqrt ε)=2. A integral de 1/x em [-1,1] diverge: separar em (-1,0) e (0,1) dá duas divergências mesmo que truncamentos simétricos se cancelem.

### Estratégia, erros e fechamento
Marque cada extremo infinito e cada singularidade; escreva um limite para cada peça antes de integrar. Compare com modelo p perto da cauda ou singularidade. Não use limite simétrico único, não substitua infinito como número, não conclua convergência apenas porque f→0 e não esqueça uma das laterais. Resolva E-M9-1 a E-M9-3; complementares E-M9-4 a E-M9-6. Origem: 93–116, especialmente 111–116.

## M10 — Revisão cumulativa e simulados

### Objetivos
Escolher método sem pista, administrar tempo e transformar erros em plano de revisão.

### Roteiro
Leia todas as questões e classifique: teoria, primitiva, integral definida, geometria ou convergência. Registre hipótese e método. Em aplicações, desenhe e nomeie medidas. Em impróprias, escreva os limites antes de calcular. Reserve o final para derivar primitivas e revisar sinais, extremos e unidades.

Exemplo de escolha mista: em ∫0^1 2x e^{x²}dx, a derivada interna sugere u=x² e o resultado é e-1. Em ∫0^1 xe^x dx, não há fator de cadeia; partes com u=x dão 1. A forma do produto, não a palavra “integral”, decide o método.

### Avaliação e revisão espaçada
O banco inclui dois simulados de 50 minutos com cinco questões de 2 pontos. O primeiro localiza lacunas; o segundo vem após revisão. A prova real pode ter outro formato; 50 minutos é estimativa. Retome erros após 1, 3 e 7 dias; misture técnicas. Classifique erro: conceito, escolha de método, álgebra, cálculo, hipótese/limite ou montagem geométrica.

Simulado A: E-M1-2, E-M3-3, E-M6-2, E-M7-1, E-M9-2. Simulado B: E-M2-3, E-M4-2, E-M5-3, E-M8-2, E-M9-3. As resoluções estão separadas. Domínio exige justificar por que o método serve, não apenas obter um número.




