import { Fragment, useState } from "react";
import type { ReactNode } from "react";
import { courseIndex } from "./content";
import type { AppState } from "./types";

function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part,
  );
}

export function Markdown({ children }: { children: string }) {
  const blocks = children.trim().split(/\n{2,}/).filter(Boolean);
  return <div className="markdown-body">{blocks.map((block, index) => {
    const lines = block.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    if (!lines.length) return null;
    const heading = lines[0].match(/^(#{3,4})\s+(.+)$/);
    if (heading) {
      const title = inline(heading[2]);
      const rest = lines.slice(1).join("\n");
      return <Fragment key={index}>
        {heading[1].length === 3 ? <h3>{title}</h3> : <h4>{title}</h4>}
        {rest && <Markdown>{rest}</Markdown>}
      </Fragment>;
    }
    if (lines.every((line) => line.startsWith("- "))) {
      return <ul key={index}>{lines.map((line, item) => <li key={item}>{inline(line.slice(2))}</li>)}</ul>;
    }
    if (lines.every((line) => /^\d+\.\s/.test(line))) {
      return <ol key={index}>{lines.map((line, item) => <li key={item}>{inline(line.replace(/^\d+\.\s/, ""))}</li>)}</ol>;
    }
    return <p key={index}>{inline(lines.join(" "))}</p>;
  })}</div>;
}

export function RiemannWidget() {
  const [n, setN] = useState(6);
  const width = 390 / n;
  const rects = Array.from({ length: n }, (_, index) => {
    const lower = (index / n) ** 2;
    const upper = ((index + 1) / n) ** 2;
    return { x: 48 + index * width, lowerY: 220 - lower * 170, upperY: 220 - upper * 170, lowerH: lower * 170, upperH: upper * 170 };
  });
  const graph = Array.from({ length: 41 }, (_, index) => {
    const x = index / 40;
    return (index === 0 ? "M" : "L") + (48 + x * 390) + " " + (220 - x * x * 170);
  }).join(" ");
  const lowerSum = ((n - 1) * (2 * n - 1)) / (6 * n * n);
  const upperSum = ((n + 1) * (2 * n + 1)) / (6 * n * n);
  return <section className="visual-card" aria-labelledby="riemann-title">
    <div className="visual-heading"><div><span className="eyebrow">Visualização interativa</span><h3 id="riemann-title">Aproximar a área com retângulos</h3></div><span className="chip">f(x) = x²</span></div>
    <svg className="riemann-graph" viewBox="0 0 480 250" role="img" aria-label={"Somas de Darboux de x ao quadrado com " + n + " subintervalos"}>
      <line x1="48" y1="220" x2="448" y2="220" className="axis" /><line x1="48" y1="220" x2="48" y2="28" className="axis" />
      {rects.map((rect, index) => <g key={index}><rect x={rect.x} y={rect.lowerY} width={width} height={rect.lowerH} className="lower-rect" /><rect x={rect.x} y={rect.upperY} width={width} height={rect.upperH} className="upper-outline" /></g>)}
      <path d={graph} className="curve-line" /><text x="450" y="238" className="svg-label">1</text><text x="31" y="32" className="svg-label">1</text><text x="449" y="25" className="svg-label">x</text><text x="34" y="24" className="svg-label">y</text>
    </svg>
    <label className="range-row"><span>Subintervalos: <strong>{n}</strong></span><input type="range" min="2" max="16" value={n} onChange={(event) => setN(Number(event.target.value))} aria-label="Número de subintervalos" /></label>
    <div className="sum-row"><span><i className="legend-square lower" /> Soma inferior: {lowerSum.toFixed(4)}</span><span><i className="legend-square upper" /> Soma superior: {upperSum.toFixed(4)}</span><strong>Área exata: 0,3333…</strong></div>
  </section>;
}

export function PerformanceChart({ attempts }: { attempts: AppState["attempts"] }) {
  const rows = courseIndex.modules.filter((module) => module.id !== "M10").map((module) => {
    const scores = module.exerciseIds.flatMap((id) => attempts[id]?.slice(-1).map((item) => item.score) ?? []);
    const average = scores.length ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0;
    return { ...module, average, count: scores.length };
  });
  return <div className="performance-list">{rows.map((row) => <div className="performance-row" key={row.id}>
    <span className="performance-code">{row.id}</span><span className="performance-title">{row.title}</span>
    <div className="performance-track"><span style={{ width: (row.count ? row.average / 2 * 100 : 4) + "%" }} /></div>
    <span className="performance-score">{row.count ? row.average.toFixed(1) + "/2" : "—"}</span>
  </div>)}</div>;
}

export function EmptyState({ title, text, action }: { title: string; text: string; action?: ReactNode }) {
  return <div className="empty-state panel"><div className="empty-icon">∫</div><h2>{title}</h2><p>{text}</p>{action}</div>;
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(new Date(value));
}
