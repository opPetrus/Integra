import katex from "katex";
import { formulas } from "./formulas";

export default function Formula({ moduleId }: { moduleId: string }) {
  return <div className="formula-grid">{(formulas[moduleId] ?? []).map((formula) => {
    const html = katex.renderToString(formula.latex, { throwOnError: false, displayMode: true });
    return <div className="formula-card" role="img" aria-label={formula.label} key={formula.label}>
      <span className="formula-label">{formula.label}</span>
      <div aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
    </div>;
  })}</div>;
}
