# Integra — banco de prática (Fase 2)

## Como usar
Os enunciados aparecem sem solução. Tente cada questão antes de abrir a dica 1; peça as dicas em sequência. Na interface futura, a ação “Corrigir com GPT” deverá enviar a resolução do estudante, o ID e os critérios, nunca revelar automaticamente o gabarito. Questões autorais estão identificadas como Integra; as faixas “Lista 4” indicam correspondência temática, sem alterar os enunciados do professor.

Tipos de erro para registrar: conceito/hipótese, escolha de técnica, álgebra, cálculo, limite, domínio/sinal ou montagem geométrica. A rubrica serve para autocorreção e avaliação manual; não é comparação de strings.

---

## M0 — Diagnóstico e pré-requisitos

### E-M0-1 — derivada de produto
- Dificuldade: básica. Tipo: pré-requisito, cálculo.
- Origem: autoral; revisão dirigida da Lista 4, 30–38. Pré-requisito: produto e cadeia.
- Enunciado: Para x>0, calcule a derivada de f(x)=x² ln x. Em seguida, verifique por derivação se F(x)=x² ln x/2-x²/4 é primitiva de x ln x.
- Dica 1: Derive cada produto separadamente.
- Dica 2: Ao verificar F, derive os dois termos e agrupe os termos com ln x.
- Rubrica (2 pontos): regra do produto correta (1); conclusão sobre F' e integrando correta (1).

### E-M0-2 — limite notável combinado
- Dificuldade: intermediária. Tipo: limite, pré-requisito.
- Origem: autoral; revisão dirigida da Lista 4, 39–47. Pré-requisito: limites notáveis.
- Enunciado: Calcule lim_{x→0}(e^{2x}-1)/sin(3x).
- Dica 1: Separe em (e^{2x}-1)/(2x) · (3x)/sin(3x) · 2/3.
- Dica 2: Cada um dos dois quocientes tende a 1.
- Rubrica: fatoração que reduz aos limites notáveis (1); resultado 2/3 (1).

### E-M0-3 — domínio e derivada logarítmica
- Dificuldade: avançada. Tipo: domínio e derivada.
- Origem: autoral; revisão dirigida da Lista 4, 30–47. Pré-requisito: domínio de ln e regra da cadeia.
- Enunciado: Determine o domínio real e derive f(x)=ln((1+x)/(1-x)).
- Dica 1: O argumento do logaritmo deve ser positivo.
- Dica 2: A fração é positiva exatamente quando -1<x<1; simplifique a derivada.
- Rubrica: domínio (-1,1) (1); derivada 2/(1-x²) (1).

## M1 — Integral de Riemann

### E-M1-1 — alteração em um ponto
- Dificuldade: básica. Tipo: conceito e integral definida.
- Origem: autoral; Lista 4, 22–25. Pré-requisito: integral de função constante.
- Enunciado: Seja f:[0,2]→R dada por f(x)=0 para x≠1 e f(1)=7. Mostre que f é integrável e calcule ∫0^2 f(x)dx.
- Dica 1: Isole um intervalo pequeno em torno de 1; fora dele, supremo e ínfimo coincidem.
- Dica 2: A contribuição possível do intervalo isolado é no máximo 7 vezes seu comprimento.
- Rubrica: argumento de somas superior/inferior ou propriedade de mudança finita (1); integral 0 (1).

### E-M1-2 — somas para x²
- Dificuldade: intermediária. Tipo: somas de Riemann.
- Origem: autoral; fundamentos da Lista 4, 22–25 e 48. Pré-requisito: soma dos quadrados.
- Enunciado: Para f(x)=x² em [0,1], use n subintervalos iguais para escrever a soma inferior e a superior. Calcule os limites quando n→∞ e identifique a integral.
- Dica 1: Em [k/n,(k+1)/n], f é crescente.
- Dica 2: L_n=(n-1)(2n-1)/(6n²) e U_n=(n+1)(2n+1)/(6n²).
- Rubrica: somas corretamente indexadas (1); ambos os limites 1/3 e interpretação como integral (1).

### E-M1-3 — paridade e área assinada
- Dificuldade: avançada. Tipo: teoria com aplicação.
- Origem: autoral; Lista 4, 22–25. Pré-requisito: funções pares/ímpares.
- Enunciado: Calcule ∫_{-π}^{π} x cos x dx sem encontrar uma primitiva. Explique por que o resultado não é a área geométrica entre o gráfico e o eixo x.
- Dica 1: Determine a paridade do produto.
- Dica 2: x é ímpar e cos x é par.
- Rubrica: identifica produto ímpar e integral zero (1); distingue cancelamento assinado de área total (1).

## M2 — Primitivas e Teorema Fundamental

### E-M2-1 — primitiva e extremos
- Dificuldade: básica. Tipo: integral definida, verificação.
- Origem: autoral; Lista 4, 26–28. Pré-requisito: substituição simples.
- Enunciado: Calcule ∫0^1 2x/(1+x²)dx e confirme o resultado derivando uma primitiva.
- Dica 1: Reconheça a derivada de 1+x².
- Dica 2: Uma primitiva é ln(1+x²).
- Rubrica: primitiva correta (1); avaliação nos extremos ln 2 (1).

### E-M2-2 — função acumulada com limite composto
- Dificuldade: intermediária. Tipo: Teorema Fundamental e cadeia.
- Origem: autoral; Lista 4, 26–28. Pré-requisito: derivada de integral acumulada.
- Enunciado: Seja A(x)=∫_1^{x²+1} sqrt(t)dt. Calcule A'(x) e determine em quais pontos A é crescente.
- Dica 1: Use f(g(x))g'(x).
- Dica 2: A'(x)=2x sqrt(x²+1); seu sinal é o sinal de x.
- Rubrica: derivada correta (1); crescente em [0,∞) e decrescente em (-∞,0] (1).

### E-M2-3 — valor médio integral
- Dificuldade: avançada. Tipo: teorema e equação.
- Origem: autoral; Teorema do Valor Médio para integrais, seção 4.3. Pré-requisito: integral definida e continuidade.
- Enunciado: Para f(x)=x² em [0,2], encontre todos os c∈[0,2] que satisfazem f(c)=(1/2)∫0^2 f(x)dx. Explique por que existe ao menos um.
- Dica 1: Calcule a média de f no intervalo.
- Dica 2: A média é 4/3 e c²=4/3.
- Rubrica: média e soluções c=2/√3 (1); justifica existência pelo teorema, com continuidade (1).

## M3 — Substituição

### E-M3-1 — padrão g'/g
- Dificuldade: básica. Tipo: primitiva por substituição.
- Origem: autoral; família da Lista 4, 1–11. Pré-requisito: logaritmo.
- Enunciado: Calcule ∫3x²/(x³+5)dx e indique os intervalos onde a primitiva está definida.
- Dica 1: u=x³+5.
- Dica 2: du=3x²dx; use ln|u|.
- Rubrica: substituição e fator corretos (1); ln|x³+5|+C e domínio por intervalos separados pela raiz (1).

### E-M3-2 — potência de composição
- Dificuldade: intermediária. Tipo: substituição e integral definida.
- Origem: autoral; família da Lista 4, 1–11. Pré-requisito: potência e troca de variável.
- Enunciado: Calcule ∫0^1 x sqrt(1+x²)dx.
- Dica 1: Use u=1+x².
- Dica 2: Os limites em u vão de 1 a 2 e xdx=du/2.
- Rubrica: mudança de variável e limites corretos (1); resultado (2√2-1)/3 (1).

### E-M3-3 — substituição com radical decrescente
- Dificuldade: avançada. Tipo: identificar sinal e domínio.
- Origem: autoral; padrões de substituição da Lista 4, 14–18 e 68–75. Pré-requisito: radical quadrático.
- Enunciado: Calcule ∫0^1 x/sqrt(4-x²)dx. Mostre como o sinal aparece na troca de variável.
- Dica 1: u=4-x² decresce quando x cresce.
- Dica 2: du=-2x dx; os limites transformados também ficam invertidos.
- Rubrica: diferencial e limites/sinal consistentes (1); resultado 2-√3 (1).

## M4 — Partes e redução

### E-M4-1 — polinômio vezes trigonométrica
- Dificuldade: básica. Tipo: integração por partes.
- Origem: autoral; família da Lista 4, 12–13. Pré-requisito: primitivas de seno e cosseno.
- Enunciado: Calcule ∫x cos x dx e confira por derivação.
- Dica 1: Tome u=x e dv=cos x dx.
- Dica 2: A primitiva de cos x é sin x.
- Rubrica: escolha e aplicação de partes (1); x sin x+cos x+C, conferido (1).

### E-M4-2 — integral cíclica
- Dificuldade: intermediária. Tipo: partes repetidas.
- Origem: autoral; relacionada à Lista 4, 49. Pré-requisito: sistema algébrico simples.
- Enunciado: Calcule ∫e^{2x} sin x dx.
- Dica 1: Aplique partes duas vezes e chame a integral original de I.
- Dica 2: A solução deve ter denominador 2²+1.
- Rubrica: duas relações corretas (1); e^{2x}(2 sin x-cos x)/5+C (1).

### E-M4-3 — dedução de redução
- Dificuldade: avançada. Tipo: demonstração.
- Origem: autoral; Lista 4, 19–21. Pré-requisito: partes e identidade sin²+cos²=1.
- Enunciado: Deduzir, para n≥2, I_n=∫cos^n x dx = sin x cos^{n-1}x/n +(n-1)I_{n-2}/n. Declare uma condição para usar a fórmula definida em limites.
- Dica 1: Escreva cos^n=cos^{n-1}cos e aplique partes.
- Dica 2: Substitua sin² por 1-cos² e isole I_n.
- Rubrica: integração por partes e rearranjo corretos (1); condições/termos de fronteira em integral definida devidamente considerados (1).

## M5 — Logaritmo, exponencial e hiperbólicas

### E-M5-1 — logaritmo por partes
- Dificuldade: básica. Tipo: técnica e domínio.
- Origem: autoral; Lista 4, 54–67. Pré-requisito: partes.
- Enunciado: Calcule ∫ln(2x)dx para x>0.
- Dica 1: Escreva ln(2x)·1.
- Dica 2: Escolha u=ln(2x), dv=dx.
- Rubrica: derivada 1/x e aplicação de partes corretas (1); x ln(2x)-x+C (1).

### E-M5-2 — exponencial em base a
- Dificuldade: intermediária. Tipo: fórmula e verificação.
- Origem: autoral; Lista 4, 58–67. Pré-requisito: derivada de a^x.
- Enunciado: Calcule ∫5^x dx e explique o papel da hipótese 5>0 e 5≠1.
- Dica 1: Derive 5^x.
- Dica 2: A derivada é 5^x ln 5.
- Rubrica: primitiva 5^x/ln 5+C verificada (1); explica que base positiva dá função real e base 1 seria constante (1).

### E-M5-3 — auditoria de identidade hiperbólica
- Dificuldade: avançada. Tipo: detectar erro de fonte e corrigir.
- Origem: autoral; confere Lista 4, exercício 59(d). Pré-requisito: fórmulas de adição.
- Enunciado: A lista imprime sinh(x+y)=sinh x cosh y+cosh y sinh x. Teste a igualdade em x=0 e depois escreva a fórmula correta e justifique pela definição em exponenciais.
- Dica 1: Substitua x=0 nos dois lados impressos.
- Dica 2: A segunda parcela correta é cosh x sinh y.
- Rubrica: detecta que a impressão falha no teste (1); fórmula correta e justificativa coerente (1).

## M6 — Formas especiais

### E-M6-1 — radical a²-x²
- Dificuldade: básica. Tipo: substituição, reconhecimento.
- Origem: autoral; família da Lista 4, 68–75. Pré-requisito: derivada de raiz.
- Enunciado: Calcule ∫x/sqrt(9-x²)dx e indique o domínio real do integrando.
- Dica 1: Derive 9-x².
- Dica 2: u=9-x² gera um sinal negativo.
- Rubrica: substituição e sinal corretos (1); -sqrt(9-x²)+C em -3<x<3 (1).

### E-M6-2 — frações parciais
- Dificuldade: intermediária. Tipo: racional com fatores lineares.
- Origem: autoral; família da Lista 4, 68–75. Pré-requisito: fatoração e logaritmos.
- Enunciado: Calcule ∫(3x+5)/(x²+3x+2)dx.
- Dica 1: Fatore o denominador.
- Dica 2: A decomposição é 2/(x+1)+1/(x+2).
- Rubrica: decomposição correta (1); resultado 2ln|x+1|+ln|x+2|+C (1).

### E-M6-3 — completar quadrado
- Dificuldade: avançada. Tipo: forma padrão.
- Origem: autoral; técnicas da seção 4.5 e Lista 4, 68–75. Pré-requisito: arctan.
- Enunciado: Calcule ∫dx/(x²+4x+8) e explique por que a primitiva é válida em toda a reta.
- Dica 1: Complete o quadrado.
- Dica 2: O denominador vira (x+2)²+4.
- Rubrica: forma padrão correta (1); (1/2)arctan((x+2)/2)+C e nota de denominador sempre positivo (1).

## M7 — Áreas

### E-M7-1 — área entre curvas
- Dificuldade: básica. Tipo: aplicação cartesiana.
- Origem: autoral; família da Lista 4, 50–53 e 76–80. Pré-requisito: esboço e primitivas polinomiais.
- Enunciado: Calcule a área da região entre y=x e y=x² no primeiro quadrante.
- Dica 1: Resolva x=x² para encontrar os extremos.
- Dica 2: Em 0≤x≤1, a curva superior é x.
- Rubrica: interseções e ordem corretas (1); área 1/6 (1).

### E-M7-2 — limite variável e simetria
- Dificuldade: intermediária. Tipo: área cartesiana.
- Origem: autoral; aplicações da Lista 4, 50–53. Pré-requisito: esboço de parábola.
- Enunciado: Determine a área entre y=4-x² e o eixo x.
- Dica 1: Encontre os zeros e verifique simetria.
- Dica 2: Integre de -2 a 2 ou dobre a integral de 0 a 2.
- Rubrica: limites -2 e 2, ou simetria equivalente (1); área 32/3 (1).

### E-M7-3 — área polar
- Dificuldade: avançada. Tipo: coordenadas polares.
- Origem: autoral; família da Lista 4, 76–80. Pré-requisito: identidade de cos².
- Enunciado: Calcule a área interna à curva r=1+cos θ, 0≤θ≤2π.
- Dica 1: Use A=(1/2)∫r²dθ.
- Dica 2: Expanda (1+cos θ)²; integral de cos θ no período é zero.
- Rubrica: intervalo e fórmula corretos (1); área 3π/2 (1).

## M8 — Comprimento, rotação e massa

### E-M8-1 — comprimento de arco
- Dificuldade: básica. Tipo: aplicação, curva em gráfico.
- Origem: autoral; Lista 4, 81–84. Pré-requisito: derivada e integral padrão.
- Enunciado: Calcule o comprimento de y=x²/2, 0≤x≤1.
- Dica 1: Use sqrt(1+(y')²).
- Dica 2: A integral é ∫0^1sqrt(1+x²)dx; use arsinh ou logaritmo.
- Rubrica: montagem correta (1); resultado (sqrt2+ln(1+sqrt2))/2 (1).

### E-M8-2 — volume ao redor do eixo y
- Dificuldade: intermediária. Tipo: rotação, arruelas.
- Origem: autoral; Lista 4, 88–91. Pré-requisito: inversão de y=x² e y=x.
- Enunciado: A região entre y=x² e y=x, 0≤x≤1, gira ao redor do eixo y. Calcule o volume por cortes horizontais.
- Dica 1: Resolva x em função de y nas duas curvas.
- Dica 2: Raio externo √y e interno y; integre π(R²-r²)dy.
- Rubrica: raios e limites corretos (1); volume π/6 (1).

### E-M8-3 — massa com densidade variável
- Dificuldade: avançada. Tipo: aplicação física.
- Origem: autoral; Lista 4, 92. Pré-requisito: integral definida e densidade.
- Enunciado: Um cilindro vertical tem raio R e altura H. Sua densidade volumétrica é ρ(y)=ρ0(1+y/H), 0≤y≤H. Determine sua massa.
- Dica 1: Uma camada horizontal de espessura dy tem volume πR²dy.
- Dica 2: Integre ρ(y)πR² de 0 a H.
- Rubrica: elemento diferencial com unidades corretas (1); massa (3/2)πR²ρ0H (1).

## M9 — Integrais impróprias

### E-M9-1 — cauda p
- Dificuldade: básica. Tipo: integral imprópria em intervalo infinito.
- Origem: autoral; Lista 4, 93–110. Pré-requisito: limites no infinito.
- Enunciado: Decida se ∫_2^∞ dx/x³ converge e, se convergir, calcule o valor.
- Dica 1: Substitua ∞ por R e tome limite.
- Dica 2: Uma primitiva é -1/(2x²).
- Rubrica: definição por limite (1); convergência e valor 1/8 (1).

### E-M9-2 — singularidade integrável
- Dificuldade: intermediária. Tipo: extremo singular.
- Origem: autoral; Lista 4, 93–110. Pré-requisito: limite lateral e potência.
- Enunciado: Decida se ∫0^1 dx/x^{2/3} converge e calcule o valor.
- Dica 1: Introduza ε>0 como limite inferior.
- Dica 2: A primitiva é 3x^{1/3}.
- Rubrica: escreve limite unilateral correto (1); convergência e valor 3 (1).

### E-M9-3 — convergência condicional
- Dificuldade: avançada. Tipo: oscilatória, absoluta versus condicional.
- Origem: autoral; conceitos da Lista 4, 93–116. Pré-requisito: partes, comparação e caudas.
- Enunciado: Mostre que ∫_1^∞ sin x/x dx converge. Explique por que não converge absolutamente.
- Dica 1: Para convergência, integre por partes em [1,R]; o termo de fronteira em R tende a zero e sobra uma integral dominada por 1/x².
- Dica 2: Para não convergência absoluta, use intervalos de comprimento fixo em que |sin x|≥1/2; a soma das contribuições é comparável à série harmônica.
- Rubrica: argumento de convergência com termo de fronteira e integral absolutamente convergente (1); argumento de divergência de ∫|sin x|/x (1).

## Simulados de 50 minutos

Cada questão vale 2 pontos, total 10. Sem dicas durante a tentativa. Corrija apenas ao final com gabarito separado.

- Simulado A: E-M1-2, E-M3-3, E-M6-2, E-M7-1, E-M9-2.
- Simulado B: E-M2-3, E-M4-2, E-M5-3, E-M8-2, E-M9-3.

## Critérios para correção com GPT

O estudante deve anexar sua própria resolução. O corretor deve:
1. avaliar cada critério da rubrica e dar crédito parcial;
2. apontar a primeira linha inválida e explicar o motivo;
3. distinguir erro conceitual, de escolha, algébrico, de cálculo, domínio/sinal ou limite;
4. dar uma dica antes da solução completa se o estudante ainda estiver tentando;
5. aceitar métodos equivalentes corretos;
6. não declarar exercício verificado apenas porque a resposta final coincide.


---

## Questões complementares por módulo

### E-M4-4 — potência trigonométrica ímpar
- Dificuldade: intermediária. Tipo: primitiva definida.
- Origem: autoral; Lista 4, 19–21. Pré-requisito: identidade sin²+cos²=1.
- Enunciado: Calcule ∫0^{π/2} sin³x cos²x dx.
- Dica 1: Separe um fator sin x dx.
- Dica 2: Use u=cos x e sin²x=1-u².
- Rubrica (2 pontos): transformação e limites corretos (1); resultado 2/15 (1).

### E-M4-5 — potência par por identidade
- Dificuldade: avançada. Tipo: primitiva.
- Origem: autoral; Lista 4, 19–21. Pré-requisito: fórmula de meio ângulo.
- Enunciado: Calcule ∫sin⁴x dx.
- Dica 1: Use sin²x=(1-cos 2x)/2.
- Dica 2: Eleve ao quadrado e reduza cos²2x.
- Rubrica: redução trigonométrica correta (1); 3x/8-sin(2x)/4+sin(4x)/32+C (1).

### E-M5-4 — primitiva hiperbólica inversa
- Dificuldade: avançada. Tipo: forma padrão e verificação.
- Origem: autoral; seção 4.4 e Lista 4, 65–67. Pré-requisito: arsinh.
- Enunciado: Calcule ∫dx/sqrt(x²+4) e confira o resultado por derivação.
- Dica 1: Faça x=2 sinh u ou use arsinh.
- Dica 2: Uma resposta é arsinh(x/2)+C.
- Rubrica: técnica/formula coerente (1); ln|x+sqrt(x²+4)|+C ou arsinh(x/2)+C, derivada correta (1).

### E-M6-4 — substituição trigonométrica definida
- Dificuldade: intermediária. Tipo: integral definida e geometria.
- Origem: autoral; Lista 4, 68–75. Pré-requisito: x=3sin θ.
- Enunciado: Calcule ∫0^3sqrt(9-x²)dx usando substituição trigonométrica; indique também a interpretação geométrica.
- Dica 1: Use x=3sin θ, 0≤θ≤π/2.
- Dica 2: O gráfico é um quarto de círculo de raio 3.
- Rubrica (2 pontos): troca e limites corretos (1); valor 9π/4 e interpretação (1).

### E-M6-5 — fração sobre quadrática irredutível
- Dificuldade: avançada. Tipo: racional com logaritmo e arctan.
- Origem: autoral; técnicas da seção 4.5 e Lista 4, 68–75. Pré-requisito: derivada de x²+1 e arctan.
- Enunciado: Calcule ∫(x+2)/(x²+1)dx.
- Dica 1: Separe x/(x²+1) e 2/(x²+1).
- Dica 2: Um termo dá logaritmo e o outro arctan.
- Rubrica: separação adequada (1); (1/2)ln(x²+1)+2 arctan x+C (1).

### E-M6-6 — substituição hiperbólica
- Dificuldade: avançada. Tipo: integral definida, radical.
- Origem: autoral; técnicas da seção 4.5 e Lista 4, 68–75. Pré-requisito: x=2sinh u.
- Enunciado: Calcule ∫0^2 dx/sqrt(x²+4) por substituição hiperbólica.
- Dica 1: x=2sinh u; então sqrt(x²+4)=2cosh u.
- Dica 2: O limite superior em u é arsinh 1.
- Rubrica: diferencial e limites corretos (1); resultado arsinh 1=ln(1+√2) (1).

### E-M7-4 — área por tiras horizontais
- Dificuldade: avançada. Tipo: aplicação cartesiana, escolha de variável.
- Origem: autoral; Lista 4, 50–53. Pré-requisito: inversas de parábola e reta.
- Enunciado: Calcule por dy a área limitada por y=x² e y=2-x.
- Dica 1: As interseções são (-2,4) e (1,1); a região alcança y=0.
- Dica 2: De 0 a 1, largura 2√y; de 1 a 4, largura 2-y+√y.
- Rubrica: identifica a divisão em y=1 e larguras corretas (1); área 9/2 (1).

### E-M8-4 — arco parametrizado
- Dificuldade: intermediária. Tipo: comprimento de curva.
- Origem: autoral; Lista 4, 81–84. Pré-requisito: fórmula paramétrica.
- Enunciado: Calcule o comprimento da curva x=3cos t, y=3sin t, 0≤t≤π/2.
- Dica 1: Use velocidade sqrt((x')²+(y')²).
- Dica 2: A velocidade é constante e igual a 3.
- Rubrica: fórmula e velocidade (1); comprimento 3π/2 (1).

### E-M8-5 — superfície de revolução
- Dificuldade: avançada. Tipo: aplicação geométrica.
- Origem: autoral; Lista 4, 85–87. Pré-requisito: comprimento de arco.
- Enunciado: A curva y=x, 0≤x≤1, gira ao redor do eixo x. Calcule a área da superfície gerada.
- Dica 1: Use 2π vezes raio vezes elemento de arco.
- Dica 2: y'=1, então ds=√2 dx e o raio é x.
- Rubrica: integral 2π∫0^1x√2dx (1); resultado π√2 (1).

### E-M9-4 — singularidade interior e valor principal
- Dificuldade: intermediária. Tipo: definição e distinção conceitual.
- Origem: autoral; Lista 4, 93–116, em especial 111. Pré-requisito: limites laterais.
- Enunciado: Classifique ∫-1^1 dx/x como integral imprópria usual. Calcule separadamente os limites laterais e compare com o truncamento simétrico.
- Dica 1: Escreva ∫-1^0 e ∫0^1 com limites próprios.
- Dica 2: Ambos os lados divergem, mas ∫_{-1}^{-ε}1/x dx+∫_ε^1 1/x dx=0.
- Rubrica: separação e divergência da integral usual (1); identifica que o valor principal simétrico zero não é convergência usual (1).

### E-M9-5 — comparação em cauda oscilatória
- Dificuldade: intermediária. Tipo: comparação.
- Origem: autoral; Lista 4, 93–116. Pré-requisito: comparação e cotas trigonométricas.
- Enunciado: Decida se ∫1^∞(2+sin x)/x² dx converge.
- Dica 1: 1≤2+sin x≤3.
- Dica 2: Compare com 3/x².
- Rubrica: não negatividade e cota superior (1); conclui convergência pelo modelo p=2 (1).

### E-M9-6 — duas condições p
- Dificuldade: avançada. Tipo: classificação paramétrica.
- Origem: autoral; Lista 4, 93–110. Pré-requisito: teste p.
- Enunciado: Determine os p reais para os quais tanto ∫0^1 dx/x^p quanto ∫1^∞ dx/x^p convergem.
- Dica 1: A singularidade em 0 exige uma desigualdade em p.
- Dica 2: A cauda em infinito exige a desigualdade oposta.
- Rubrica: identifica p<1 perto de 0 (1); identifica p>1 no infinito e conclui que não há p que satisfaça ambas (1).
