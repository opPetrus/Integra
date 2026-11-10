# Integra — validação do conteúdo, Fase 3

## Escopo revisado

- 11 módulos, M0–M10, cobrindo o capítulo 4 conforme a matriz da Fase 1.
- 42 exercícios autorais: os três níveis-base de M0 a M9 e 12 complementares para aprofundar potências trigonométricas, substituições trigonométricas/hiperbólicas, frações parciais, cortes horizontais, arco paramétrico, superfície de revolução, comparação e singularidade interior.
- 42 soluções identificadas com os mesmos IDs; dois simulados de 50 minutos, cinco questões cada, 10 pontos no total.
- Os metadados registram módulo, assunto, técnica, dificuldade, tipo, origem, pré-requisitos e rubrica.
- Soluções permanecem separadas dos enunciados.

## Conferências matemáticas

Usei diferenciação simbólica e integração exata em fórmulas representativas, além da revisão algébrica manual de todas as 42 soluções e de suas hipóteses.

- Derivadas de primitivas: verifiquei as expressões de E-M0-1, E-M0-3, E-M2-1, E-M2-2, E-M3-1 (fora do polo), E-M4-1, E-M4-2, E-M5-1, E-M5-2, E-M5-4, E-M6-1, E-M6-2, E-M6-3, E-M6-5 e E-M8-1.
- Valores exatos: conferi E-M1-2, E-M3-2, E-M3-3, E-M4-4, E-M6-4, E-M6-6, E-M7-1, E-M7-2, E-M7-3, E-M7-4, E-M8-2, E-M8-3, E-M8-4, E-M8-5, E-M9-1 e E-M9-2.
- A fórmula de adição corrigida para sinh foi expandida pelas definições exponenciais e simplifica a zero ao subtrair os lados.
- Em E-M4-3, a recorrência de cos^n inclui o termo de fronteira; em intervalo definido, ele não deve ser descartado sem condição que o anule.
- E-M3-1 e E-M6-2 especificam intervalos sem polos; E-M6-1 exclui os extremos onde o denominador zera; E-M5-1 restringe x>0.
- E-M8-2 usa raios em função de y e arruelas perpendiculares ao eixo y. E-M8-3 preserva as unidades de densidade volumétrica.
- E-M9-3 foi verificado por partes: o termo de fronteira tende a zero e a integral residual é absolutamente convergente por comparação com 1/x². A divergência absoluta foi justificada em intervalos onde |sin x|≥1/2.
- E-M9-4 separa os limites laterais e distingue divergência usual de valor principal simétrico. O critério p diferencia corretamente singularidade em zero e cauda no infinito.

## Revisão didática

Cada módulo tem objetivos, intuição, teoria e hipóteses, exemplos, estratégia de escolha, erros frequentes e fechamento. O banco oferece dicas progressivas e rubrica com crédito parcial. A checagem de domínio usa uma questão básica, uma intermediária e uma avançada, com meta provisória de 5/6 sem dicas e sem erro central de hipótese ou método.

A diversidade foi reforçada nos módulos com maior concentração técnica. O plano de 20 horas não promete resolver profundamente todos os 116 itens originais; a plataforma não promete nota.

## Correções feitas durante a revisão

1. E-M7-2: corrigido o valor da área sob y=4-x², de 16/3 para 32/3. A conta é ∫[-2,2](4-x²)dx=32/3.
2. Índice do conteúdo: corrigida a contagem para 42 exercícios e vinculados todos os IDs a um módulo, enunciado e solução.

## Pendências mantidas da fonte

- Lista 4, exercício 51: o limite impresso x=8 cruza assíntotas de tan x; não foi substituído por uma conjectura.
- Lista 4, exercício 59(d): a identidade impressa repete um produto e falha em x=0; o material explica a forma padrão e mantém a necessidade de confirmar a errata com o professor.

## Limites do conteúdo produzido

Os 42 itens deste banco são autorais e alinhados às famílias da lista. O Integra não transcreve nem oferece solução comentada para cada um dos 116 enunciados da Lista 4; a matriz e os metadados indicam as faixas cobertas para orientar prática com o PDF do professor. Este documento registra a revisão de conteúdo da Fase 3. A integração da interface e as validações posteriores estão em [implementação e validação](implementacao-validacao.md).
