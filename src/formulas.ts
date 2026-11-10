export const formulas: Record<string, Array<{ label: string; latex: string }>> = {
  M0: [
    { label: "Regra da cadeia em um logaritmo", latex: "\\frac{d}{dx}\\ln(g(x))=\\frac{g'(x)}{g(x)}" },
    { label: "Limites fundamentais", latex: "\\begin{aligned}\\lim_{x\\to0}\\frac{\\sin x}{x}&=1\\\\[4pt]\\lim_{x\\to0}\\frac{e^x-1}{x}&=1\\end{aligned}" },
  ],
  M1: [
    { label: "Integral como limite de somas", latex: "\\int_a^b f(x)\\,dx=\\lim_{\\|P\\|\\to0}\\sum_i f(\\xi_i)\\,\\Delta x_i" },
    { label: "Somas de Darboux", latex: "L(P)\\leq \\int_a^b f(x)\\,dx\\leq U(P)" },
  ],
  M2: [
    { label: "Teorema Fundamental do Cálculo", latex: "\\frac{d}{dx}\\int_a^x f(t)\\,dt=f(x)" },
    { label: "Avaliação nos extremos", latex: "\\int_a^b f(x)\\,dx=F(b)-F(a),\\qquad F'=f" },
  ],
  M3: [
    { label: "Substituição", latex: "u=g(x),\\quad du=g'(x)\\,dx" },
    { label: "Padrão logarítmico", latex: "\\int\\frac{g'(x)}{g(x)}\\,dx=\\ln|g(x)|+C" },
  ],
  M4: [
    { label: "Integração por partes", latex: "\\int u\\,dv=uv-\\int v\\,du" },
    { label: "Redução de potência", latex: "I_n=\\frac{\\sin x\\,\\cos^{n-1}x}{n}+\\frac{n-1}{n}I_{n-2}" },
  ],
  M5: [
    { label: "Exponencial de base a", latex: "\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C\\quad(a>0,\\ a\\neq1)" },
    { label: "Identidade hiperbólica", latex: "\\cosh^2x-\\sinh^2x=1" },
  ],
  M6: [
    { label: "Radicais quadráticos", latex: "\\sqrt{a^2-x^2}:x=a\\sin\\theta,\\qquad \\sqrt{x^2+a^2}:x=a\\sinh u" },
    { label: "Quadrática irredutível", latex: "\\int\\frac{dx}{x^2+a^2}=\\frac1a\\arctan\\left(\\frac{x}{a}\\right)+C" },
  ],
  M7: [
    { label: "Área entre gráficos", latex: "A=\\int_a^b\\bigl(y_{\\mathrm{sup}}-y_{\\mathrm{inf}}\\bigr)\\,dx" },
    { label: "Área polar", latex: "A=\\frac12\\int_\\alpha^\\beta r(\\theta)^2\\,d\\theta" },
  ],
  M8: [
    { label: "Comprimento de arco", latex: "L=\\int_a^b\\sqrt{1+(f'(x))^2}\\,dx" },
    { label: "Volume por arruelas", latex: "V=\\pi\\int_a^b\\bigl(R(x)^2-r(x)^2\\bigr)\\,dx" },
    { label: "Massa por densidade", latex: "M=\\int_a^b\\rho(y)A(y)\\,dy" },
  ],
  M9: [
    { label: "Cauda infinita", latex: "\\int_a^\\infty f(x)\\,dx=\\lim_{R\\to\\infty}\\int_a^R f(x)\\,dx" },
    { label: "Critério p", latex: "\\int_1^\\infty\\frac{dx}{x^p}\\text{ converge}\\iff p>1" },
  ],
  M10: [
    { label: "Escolha da técnica", latex: "\\text{composição}+g'(x)\\Rightarrow\\text{substituição},\\qquad \\text{produto}\\Rightarrow\\text{avalie partes}" },
  ],
};
