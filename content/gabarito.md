# Integra — gabarito comentado (Fase 2)

As soluções ficam separadas dos enunciados para que a tentativa seja independente. São apresentadas soluções-modelo; métodos equivalentes devem receber crédito se cada passo for válido. A validação formal do conteúdo fica registrada como Fase 3, antes da integração na aplicação.

## M0 — Diagnóstico e pré-requisitos

### E-M0-1
Pela regra do produto, (x² ln x)'=2x ln x+x. Para F(x)=x²ln x/2-x²/4,
F'=x ln x+x/2-x/2=x ln x. Portanto F é primitiva de x ln x em x>0.

### E-M0-2
Escreva
(e^{2x}-1)/sin(3x)=[(e^{2x}-1)/(2x)]·(2/3)·[(3x)/sin(3x)].
Os dois limites entre colchetes são 1; o limite é 2/3.

### E-M0-3
Para o logaritmo, (1+x)/(1-x)>0. Numerador e denominador têm o mesmo sinal apenas quando -1<x<1; esse é o domínio. Pela regra da cadeia,
f'=1/(1+x)+1/(1-x)=2/(1-x²).
Nos extremos o argumento é zero ou não definido, e fora do intervalo é negativo.

## M1 — Integral de Riemann

### E-M1-1
A função é limitada. Dado ε>0, escolha uma partição que isole [1-δ,1+δ] com comprimento menor que ε/7; fora dele, f=0. A diferença entre soma superior e inferior fica no máximo 7·2δ, que pode ser arbitrariamente pequena. Logo f é integrável. Como difere da função zero em apenas um ponto, a propriedade de invariância por alteração finita dá ∫0^2 f=0. Também se pode fazer o argumento com um intervalo isolado de comprimento δ, escolhendo δ tão pequeno quanto necessário.

### E-M1-2
Como x² é crescente, para k=0,...,n-1, o ínfimo em [k/n,(k+1)/n] é k²/n² e o supremo é (k+1)²/n². Cada faixa tem largura 1/n:
L_n=(1/n³)Σ_{k=0}^{n-1}k²=(n-1)(2n-1)/(6n²)→1/3.
U_n=(1/n³)Σ_{j=1}^{n}j²=(n+1)(2n+1)/(6n²)→1/3.
Como ambas convergem ao mesmo limite, esse é ∫0^1x²dx=1/3.

### E-M1-3
x é ímpar e cos x é par; portanto x cos x é ímpar. A integral de uma função ímpar em [-π,π] é zero. Isso expressa cancelamento assinado: a parte abaixo do eixo subtrai a parte acima. A área geométrica total seria ∫_{-π}^{π}|x cos x|dx, que é positiva.

## M2 — Primitivas e Teorema Fundamental

### E-M2-1
u=1+x², du=2x dx. A primitiva é ln(1+x²), pois u>0. Avaliando:
∫0^1 2x/(1+x²)dx=[ln(1+x²)]0^1=ln2-0=ln2.
A derivada de ln(1+x²) é exatamente o integrando.

### E-M2-2
Pelo Teorema Fundamental e regra da cadeia:
A'(x)=sqrt(x²+1)·(2x)=2x sqrt(x²+1).
O fator sqrt(x²+1) é sempre positivo. Logo A'<0 se x<0 e A'>0 se x>0; A é decrescente em (-∞,0] e crescente em [0,∞). A derivada zera em x=0.

### E-M2-3
A média de f no intervalo é
(1/(2-0))∫0^2 x²dx=(1/2)[x³/3]0^2=4/3.
Resolver c²=4/3 com c∈[0,2] dá c=2/√3. A existência também é garantida pelo Teorema do Valor Médio para integrais, pois x² é contínua em [0,2].

## M3 — Substituição

### E-M3-1
u=x³+5 e du=3x²dx. Em qualquer intervalo que não contenha x=-∛5:
∫3x²/(x³+5)dx=∫du/u=ln|u|+C=ln|x³+5|+C.
O integrando não está definido no ponto -∛5; constantes podem ser diferentes nos dois intervalos componentes.

### E-M3-2
Use u=1+x², du=2x dx. Quando x=0, u=1; quando x=1, u=2:
∫0^1x sqrt(1+x²)dx=(1/2)∫1^2u^{1/2}du
=(1/3)[u^{3/2}]1^2=(2√2-1)/3.

### E-M3-3
Tome u=4-x²; então du=-2x dx. Os limites mudam de x=0,1 para u=4,3:
∫0^1 x/sqrt(4-x²)dx=-(1/2)∫4^3u^{-1/2}du
=-(1/2)[2√u]4^3=2-√3.
A troca é decrescente, por isso o diferencial é negativo e os limites ficam invertidos; os dois sinais se compensam para dar área positiva.

## M4 — Partes e redução

### E-M4-1
Com u=x, dv=cos x dx, temos du=dx e v=sin x:
∫x cos x dx=x sin x-∫sin x dx=x sin x+cos x+C.
Derivando: sin x+x cos x-sin x=x cos x.

### E-M4-2
Defina I=∫e^{2x}sin x dx. Por partes com u=sin x, dv=e^{2x}dx:
I=(e^{2x}/2)sin x-(1/2)∫e^{2x}cos x dx.
Chame J=∫e^{2x}cos x dx. Uma segunda aplicação dá J=(e^{2x}/2)cos x+(1/2)I. Substituindo:
I=(e^{2x}/2)sin x-(e^{2x}/4)cos x-I/4.
Logo (5/4)I=e^{2x}(2sin x-cos x)/4 e
I=e^{2x}(2sin x-cos x)/5+C.
Verificação: a derivada do numerador e^2x(2sin-cos) é e^2x(5sin); dividindo por 5, obtém-se e^{2x}sin x.

### E-M4-3
Escreva I_n=∫cos^{n-1}x cos x dx. Por partes, u=cos^{n-1}x e dv=cos x dx:
I_n=sin x cos^{n-1}x +(n-1)∫sin²x cos^{n-2}x dx.
Use sin²x=1-cos²x:
I_n=sin x cos^{n-1}x +(n-1)(I_{n-2}-I_n).
Reorganizando, nI_n=sin x cos^{n-1}x+(n-1)I_{n-2}, que dá a fórmula pedida. Para intervalo finito [a,b], cos^n é contínua e a fórmula definida é
∫a^b cos^n x dx=[sin x cos^{n-1}x/n]a^b +(n-1)/n∫a^b cos^{n-2}x dx.
O termo de fronteira não pode ser descartado sem uma condição que o anule.

## M5 — Logaritmo, exponencial e hiperbólicas

### E-M5-1
Para x>0, use u=ln(2x), dv=dx. Então du=dx/x e v=x:
∫ln(2x)dx=x ln(2x)-∫x·(1/x)dx=x ln(2x)-x+C.
Derivando: ln(2x)+x·(1/x)-1=ln(2x).

### E-M5-2
Como (5^x)'=5^x ln5,
∫5^x dx=5^x/ln5+C.
A verificação é imediata por derivação. A base positiva permite definir 5^x real para todo x; se a base fosse 1, a função seria constante 1, cuja primitiva é x, não a fórmula com divisão por ln1=0.

### E-M5-3
Substituir x=0 na igualdade impressa dá lado esquerdo sinh y e lado direito 0; não pode ser identidade para todo y. Pela definição exponencial:
sinh(x+y)=[e^{x+y}-e^{-(x+y)}]/2.
Expandindo e agrupando, isso é
[(e^x-e^{-x})/2][(e^y+e^{-y})/2]+[(e^x+e^{-x})/2][(e^y-e^{-y})/2]
=sinh x cosh y+cosh x sinh y.
Assim, o segundo produto impresso deve ser conferido com o professor; a forma padrão usa cosh x sinh y.

## M6 — Formas especiais

### E-M6-1
O integrando é real para -3<x<3 e não definido nos extremos, onde o denominador zera. Com u=9-x², du=-2x dx:
∫x/sqrt(9-x²)dx=-1/2∫u^{-1/2}du=-sqrt(u)+C=-sqrt(9-x²)+C.
Derivando, obtém-se x/sqrt(9-x²).

### E-M6-2
Fatore x²+3x+2=(x+1)(x+2) e escreva
(3x+5)/((x+1)(x+2))=A/(x+1)+B/(x+2).
A(x+2)+B(x+1)=(A+B)x+(2A+B), então A+B=3 e 2A+B=5; logo A=2, B=1.
A primitiva é 2ln|x+1|+ln|x+2|+C, em cada intervalo que não cruza -2 ou -1. A derivada recompõe a fração original.

### E-M6-3
Complete o quadrado: x²+4x+8=(x+2)²+4. Com u=(x+2)/2, dx=2du:
∫dx/((x+2)²+4)=(1/2)∫du/(1+u²)=(1/2)arctan((x+2)/2)+C.
O denominador original é (x+2)²+4>0 para todo real; a primitiva é válida em R.

## M7 — Áreas

### E-M7-1
As interseções resolvem x=x², isto é, x=0 ou x=1. No intervalo [0,1], x≥x². Logo
A=∫0^1(x-x²)dx=[x²/2-x³/3]0^1=1/2-1/3=1/6.

### E-M7-2
A curva encontra o eixo x quando 4-x²=0, isto é, x=±2. A função é não negativa e par nesse intervalo:
A=∫-2^2(4-x²)dx=2∫0^2(4-x²)dx
=2[4x-x³/3]0^2=2(8-8/3)=32/3.
A área é positiva; a conta também confere com largura 4 e altura máxima 4, que limita a área por 16.

### E-M7-3
A=(1/2)∫0^{2π}(1+cos θ)²dθ
=(1/2)∫(1+2cos θ+cos²θ)dθ.
No ciclo, ∫cos θ=0 e ∫cos²θ=π; portanto A=(1/2)(2π+π)=3π/2.

## M8 — Comprimento, rotação e massa

### E-M8-1
y'=x; então
L=∫0^1sqrt(1+x²)dx
=(1/2)[x sqrt(1+x²)+arsinh x]0^1.
Como arsinh(1)=ln(1+√2), L=(√2+ln(1+√2))/2.

### E-M8-2
Para 0≤y≤1, a reta y=x dá x=y e a parábola y=x² dá x=√y. A seção perpendicular ao eixo y é uma arruela de raio externo √y e interno y:
V=π∫0^1[(√y)²-y²]dy=π∫0^1(y-y²)dy
=π(1/2-1/3)=π/6.

### E-M8-3
Uma camada horizontal tem volume dV=πR²dy e massa dm=ρ(y)dV. Logo
M=πR²ρ0∫0^H(1+y/H)dy
=πR²ρ0[H+H/2]=(3/2)πR²ρ0H.
A dimensão é densidade volumétrica vezes volume, como esperado.

## M9 — Integrais impróprias

### E-M9-1
Para R>2,
∫2^R x^{-3}dx=[-1/(2x²)]2^R=1/8-1/(2R²).
Ao tomar R→∞, o limite é 1/8; a integral converge.

### E-M9-2
A singularidade está no extremo 0, então
∫0^1x^{-2/3}dx=lim_{ε→0+}∫ε^1x^{-2/3}dx
=lim_{ε→0+}[3x^{1/3}]ε^1
=lim 3(1-ε^{1/3})=3.
Logo converge.

### E-M9-3
Em [1,R], por partes com u=1/x e dv=sin x dx:
∫1^R sin x/x dx=[-cos x/x]1^R-∫1^R cos x/x² dx.
O termo de fronteira em R tende a zero. A integral residual converge absolutamente, pois |cos x|/x²≤1/x² e ∫1∞dx/x² converge. Portanto a integral original converge.

Para mostrar que não converge absolutamente, considere, para k grande, intervalos [π/6+2πk,5π/6+2πk], onde |sin x|≥1/2. Em cada um, ∫|sin x|/x dx é pelo menos metade do comprimento do intervalo dividido pelo seu extremo superior. Isso é ≥C/k para alguma constante C>0 e k suficientemente grande. A soma dessas contribuições diverge como a série harmônica. Logo a convergência é condicional.

## Conferência de resultados

- Primitivas elementares foram verificadas derivando o resultado.
- Integrais definidas foram avaliadas com limites escritos.
- Aplicações têm cortes, raios, seções ou densidade declarados.
- Integrais impróprias foram divididas e interpretadas por limites.
- As duas pendências da Lista 4 (51 e 59(d)) continuam sinalizadas; este gabarito não corrige silenciosamente o material do professor.

## Soluções das questões complementares

### E-M4-4
Separe sin³x=sin²x·sin x=(1-cos²x)sin x e tome u=cos x, du=-sin x dx. Os limites x=0,π/2 passam a u=1,0:
∫0^{π/2}sin³x cos²x dx
=-∫1^0(1-u²)u²du
=∫0^1(u²-u⁴)du=1/3-1/5=2/15.

### E-M4-5
sin⁴x=[(1-cos2x)/2]²=3/8-(1/2)cos2x+(1/8)cos4x. Integrando termo a termo:
∫sin⁴x dx=3x/8-sin(2x)/4+sin(4x)/32+C.
Derivar o resultado recupera a identidade de potência.

### E-M5-4
Tome x=2sinh u. Então dx=2cosh u du e sqrt(x²+4)=2cosh u, de modo que a integral se reduz a ∫du=u+C=arsinh(x/2)+C. A forma logarítmica equivalente é ln|x+sqrt(x²+4)|+C; a derivada de qualquer forma é 1/sqrt(x²+4).

### E-M6-4
x=3sin θ, dx=3cos θdθ e sqrt(9-x²)=3cos θ para 0≤θ≤π/2. Os limites passam de x=0,3 para θ=0,π/2:
∫0^3sqrt(9-x²)dx=9∫0^{π/2}cos²θdθ=9π/4.
Geometricamente, é a área de um quarto de disco de raio 3.

### E-M6-5
Separe:
∫(x+2)/(x²+1)dx=∫x/(x²+1)dx+2∫1/(x²+1)dx
=(1/2)ln(x²+1)+2 arctan x+C.
A derivada de cada parcela recompõe o numerador x+2.

### E-M6-6
Use x=2sinh u. Então dx=2cosh u du e sqrt(x²+4)=2cosh u. Os limites x=0,2 viram u=0,arsinh 1. Logo a integral é ∫0^{arsinh 1}du=arsinh 1=ln(1+√2).

### E-M7-4
As curvas se cruzam em x=-2 e x=1, com alturas y=4 e y=1. Para tiras horizontais, de 0≤y≤1 as fronteiras são -√y e √y. De 1≤y≤4, são -√y e 2-y. Assim:
A=∫0^1 2√y dy+∫1^4(2-y+√y)dy
=4/3+19/6=9/2.
A divisão em y=1 é necessária porque a fronteira direita muda da parábola para a reta.

### E-M8-4
x'=-3sin t e y'=3cos t, então a velocidade é sqrt(9sin²t+9cos²t)=3. Portanto L=∫0^{π/2}3dt=3π/2, o quarto da circunferência de raio 3.

### E-M8-5
Para rotação em torno do eixo x, o raio é y=x e ds=sqrt(1+(y')²)dx=√2 dx. Logo
S=2π∫0^1x√2 dx=π√2.

### E-M9-4
Separando:
∫-1^0 dx/x=lim_{ε→0+}∫-1^{-ε}dx/x=lim ln ε=-∞;
∫0^1 dx/x=lim_{ε→0+}∫ε^1dx/x=lim(-ln ε)=+∞.
A integral imprópria usual diverge. Já o truncamento simétrico soma ln ε e -ln ε e dá zero para cada ε; esse valor principal de Cauchy não torna convergente a integral usual.

### E-M9-5
Para x≥1, 1≤2+sin x≤3. Logo
0≤(2+sin x)/x²≤3/x².
A integral majorante ∫1∞3/x²dx converge; pelo teste de comparação, a integral dada converge (o valor não foi pedido).

### E-M9-6
Perto de 0, ∫0^1x^{-p}dx converge exatamente quando p<1. Na cauda infinita, ∫1∞x^{-p}dx converge exatamente quando p>1. As condições são incompatíveis; não existe p real que faça ambas convergirem. Para p=1, cada uma é logaritmicamente divergente.

