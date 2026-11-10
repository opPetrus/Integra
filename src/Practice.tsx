import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { courseIndex, exercises, getSolution } from "./content";
import { formatDate, Markdown } from "./ui";
import { formatTime } from "./utils";
import type { AppState, Exercise, ReviewItem } from "./types";

const errorKinds = [
  "Conceito ou hipótese", "Escolha da técnica", "Álgebra", "Cálculo",
  "Domínio ou sinal", "Limite ou convergência", "Montagem geométrica",
];

async function copyText(value: string) {
  await navigator.clipboard.writeText(value);
}

export function ExerciseCard({
  exercise, state, setState, selfScore, setSelfScore, solutionOpen, toggleSolution,
  onDraft, onRecord, onCopyPrompt, onNotify,
}: {
  exercise: Exercise;
  state: AppState;
  setState: Dispatch<SetStateAction<AppState>>;
  selfScore: number | "";
  setSelfScore: (score: number | "") => void;
  solutionOpen: boolean;
  toggleSolution: () => void;
  onDraft: (value: string) => void;
  onRecord: (score: number, kind: string) => void;
  onCopyPrompt: () => void;
  onNotify: (message: string) => void;
}) {
  const hintCount = state.hints[exercise.id] ?? 0;
  const attempts = state.attempts[exercise.id] ?? [];
  const [solutionText, setSolutionText] = useState("");
  useEffect(() => { if (solutionOpen && !solutionText) void getSolution(exercise.id).then(setSolutionText); }, [solutionOpen, exercise.id, solutionText]);
  const [errorKind, setErrorKind] = useState(errorKinds[0]);
  const revealHint = () => setState((old) => ({ ...old, hints: { ...old.hints, [exercise.id]: Math.min(exercise.hints.length, hintCount + 1) } }));
  const copyAnswer = async () => {
    try {
      await copyText(state.drafts[exercise.id] ?? "");
      onNotify("Sua resolução foi copiada.");
    } catch {
      onNotify("Não foi possível copiar a resolução.");
    }
  };
  return <article className="exercise-card panel">
    <div className="exercise-topline">
      <div><span className="chip">{exercise.id}</span><span className={"difficulty-pill " + exercise.difficulty}>{exercise.difficulty}</span><span className="muted-small">{exercise.module} · {exercise.type}</span></div>
      {attempts.length > 0 && <span className="attempt-status">{attempts.length} tentativa(s) · última {attempts.at(-1)?.score}/2</span>}
    </div>
    <h2>{exercise.title}</h2>
    <div className="exercise-meta-grid">
      <span><b>Assunto</b>{exercise.topic}</span><span><b>Técnica</b>{exercise.technique}</span>
      <span><b>Origem</b>{exercise.origin}</span><span><b>Pré-requisitos</b>{exercise.prerequisites.join(", ")}</span>
    </div>
    <div className="problem-statement"><span className="eyebrow">ENUNCIADO</span><Markdown>{exercise.statement}</Markdown></div>
    <label className="answer-label">Sua resolução
      <textarea value={state.drafts[exercise.id] ?? ""} onChange={(event) => onDraft(event.target.value)} placeholder="Registre seu raciocínio, incluindo a escolha da técnica e os passos importantes." rows={4} />
    </label>
    <div className="exercise-actions">
      <button className="button secondary compact" onClick={revealHint} disabled={hintCount >= exercise.hints.length}>{hintCount >= exercise.hints.length ? "Todas as dicas abertas" : "Mostrar dica " + (hintCount + 1)}</button>
      <button className="button secondary compact" onClick={toggleSolution}>{solutionOpen ? "Ocultar gabarito" : "Mostrar gabarito"}</button>
      <button className="button subtle-button compact" onClick={onCopyPrompt}>Corrigir com GPT ↗</button>
      <button className="button subtle-button compact" onClick={() => void copyAnswer()}>Copiar resolução</button>
    </div>
    {hintCount > 0 && <div className="hint-stack">{exercise.hints.slice(0, hintCount).map((hint, index) => <div className="hint-box" key={index}><strong>Dica {index + 1}</strong><p>{hint}</p></div>)}</div>}
    {solutionOpen && <div className="solution-box"><div className="solution-header"><strong>Solução comentada</strong><span>Abra só depois da sua tentativa.</span></div>{solutionText ? <Markdown>{solutionText}</Markdown> : <p>Carregando gabarito…</p>}</div>}
    <details className="rubric-details"><summary>Critérios de correção · 2 pontos</summary><p>{exercise.rubric}</p></details>
    <div className="record-row">
      <label>Autoavaliação<select value={selfScore} onChange={(event) => setSelfScore(event.target.value === "" ? "" : Number(event.target.value))}>
        <option value="">Pontuação…</option><option value="0">0 · ainda não consegui</option><option value="1">1 · parcial, com erro</option><option value="2">2 · resolvi e conferi</option>
      </select></label>
      {selfScore !== "" && selfScore < 2 && <label>Tipo de erro<select value={errorKind} onChange={(event) => setErrorKind(event.target.value)}>{errorKinds.map((kind) => <option key={kind}>{kind}</option>)}</select></label>}
      <button className="button primary compact" disabled={selfScore === ""} onClick={() => onRecord(Number(selfScore), errorKind)}>Registrar tentativa</button>
    </div>
  </article>;
}

export function MockPage({
  state, remainingSeconds, examSolutions, setExamSolutions, onStart, onAnswer, onSubmit, onScore, onFinish,
}: {
  state: AppState;
  remainingSeconds: number;
  examSolutions: Record<string, boolean>;
  setExamSolutions: Dispatch<SetStateAction<Record<string, boolean>>>;
  onStart: (id: string) => void;
  onAnswer: (id: string, value: string) => void;
  onSubmit: () => void;
  onScore: (id: string, score: number) => void;
  onFinish: () => void;
}) {
  const active = state.activeMock;
  const [solutionTexts, setSolutionTexts] = useState<Record<string, string>>({});
  const exam = active ? courseIndex.mockExams.find((item) => item.id === active.mockId) : undefined;
  if (active && exam) {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const elapsed = Math.max(0, exam.durationMinutes * 60 - remainingSeconds);
    return <section className="mock-page">
      <div className="page-heading"><div><span className="eyebrow">SIMULADO {active.mockId} · 5 QUESTÕES · 10 PONTOS</span><h1>{active.phase === "testing" ? "Resolva sem pistas" : "Corrija por rubrica"}</h1><p>{active.phase === "testing" ? "Organize seu tempo e escreva os passos. O gabarito fica fechado até entregar." : "Compare com o gabarito e atribua pontos manualmente; respostas livres não são corrigidas por texto."}</p></div>
        <div className={"timer-card " + (remainingSeconds < 300 && active.phase === "testing" ? "urgent" : "")}><span>RESTANTE</span><strong>{String(minutes).padStart(2,"0")}:{String(seconds).padStart(2,"0")}</strong><small>{Math.floor(elapsed/60)} min decorridos</small></div>
      </div>
      {active.phase === "testing" && <div className="notice"><strong>Condições do simulado</strong><p>Sem dicas e sem soluções. Ao entregar, você poderá conferir cada critério e registrar a nota de 0 a 2.</p></div>}
      <div className="mock-question-list">{exam.questionIds.map((id, index) => {
        const exercise = exercises.find((item) => item.id === id);
        if (!exercise) return null;
        return <article className="mock-question panel" key={id}>
          <div className="mock-q-head"><span className="question-number">{String(index + 1).padStart(2,"0")}</span><div><span className="chip">{id}</span><h2>{exercise.topic}</h2></div><span className="points-label">2 pontos</span></div>
          <div className="problem-statement"><Markdown>{exercise.statement}</Markdown></div>
          {active.phase === "testing" ? <textarea value={active.answers[id] ?? ""} onChange={(event) => onAnswer(id, event.target.value)} rows={5} placeholder="Mostre as etapas da resolução." aria-label={"Resposta da questão " + (index + 1)} /> :
            <div className="grading-area">
              <div className="solution-box"><div className="solution-header"><strong>Gabarito</strong><button className="text-button" onClick={() => { const open = !examSolutions[id]; setExamSolutions((old) => ({ ...old, [id]: open })); if (open && !solutionTexts[id]) void getSolution(id).then((value) => setSolutionTexts((old) => ({ ...old, [id]: value }))); }}>{examSolutions[id] ? "Ocultar" : "Ver solução"}</button></div>{examSolutions[id] && (solutionTexts[id] ? <Markdown>{solutionTexts[id]}</Markdown> : <p>Carregando gabarito…</p>)}</div>
              <label>Nota desta questão<select value={active.scores[id] ?? ""} onChange={(event) => onScore(id, Number(event.target.value))}><option value="">Atribua 0, 1 ou 2</option><option value="0">0 · sem crédito</option><option value="1">1 · parcial</option><option value="2">2 · completa</option></select></label>
              <details className="rubric-details"><summary>Rubrica</summary><p>{exercise.rubric}</p></details>
            </div>}
        </article>;
      })}</div>
      {active.phase === "testing" ? <button className="button primary submit-mock" onClick={onSubmit}>Entregar e abrir correção <span>→</span></button> :
        <div className="mock-finish panel"><div><strong>Nota registrada pelo estudante</strong><p>Confira as cinco rubricas. A nota final é a soma manual, de 0 a 10.</p></div><strong className="mock-live-score">{Object.values(active.scores).reduce((sum, value) => sum + value, 0)}/10</strong><button className="button primary" onClick={onFinish}>Salvar resultado</button></div>}
    </section>;
  }
  return <section className="mock-page">
    <div className="page-heading"><div><span className="eyebrow">PRÁTICA CUMULATIVA · SEM CORREÇÃO AUTOMÁTICA DE EXPRESSÕES</span><h1>Simulados</h1><p>Provas curtas para treinar escolha de técnica, organização e revisão final.</p></div><div className="practice-summary"><strong>{state.mockRuns.length}</strong><small>concluídos</small></div></div>
    <div className="mock-card-grid">{courseIndex.mockExams.map((item) => {
      const last = state.mockRuns.filter((run) => run.mockId === item.id).at(-1);
      return <article className="mock-option panel" key={item.id}>
        <div className="mock-option-top"><span className="exam-letter">{item.id}</span><span className="chip">Misto</span></div>
        <h2>Simulado {item.id}</h2><p>Cinco questões do banco, de diferentes módulos. Use apenas o que lembrar e justifique seu método.</p>
        <div className="exam-meta"><span>{item.durationMinutes} minutos</span><span>{item.questionIds.length} questões</span><span>10 pontos</span></div>
        {last && <>
          <div className="last-score">Última nota <strong>{last.score}/10</strong><small>{formatDate(last.createdAt)}</small></div>
          <details className="mock-review-details">
            <summary>Analisar respostas e pontuação</summary>
            <ol>{item.questionIds.map((id) => {
              const exercise = exercises.find((entry) => entry.id === id);
              return <li key={id}>
                <span><strong>{id}</strong> · {exercise?.topic ?? "Questão"} · {last.scores?.[id] ?? 0}/2</span>
                <p>{last.answers?.[id]?.trim() || "Nenhuma resposta registrada."}</p>
              </li>;
            })}</ol>
          </details>
        </>}
        <button className="button primary" onClick={() => onStart(item.id)}>Iniciar simulado <span>→</span></button>
      </article>;
    })}</div>
    <div className="notice warning"><strong>Sobre a duração</strong><p>Os 50 minutos são uma estimativa do plano de estudo; o PDF não informa a duração real da prova.</p></div>
  </section>;
}

export function DataPage({ state, onExport, onImport }: { state: AppState; onExport: () => void; onImport: (file?: File) => void }) {
  const fileInput = useRef<HTMLInputElement>(null);
  const attemptCount = Object.values(state.attempts).reduce((sum, list) => sum + list.length, 0);
  return <section className="data-page">
    <div className="page-heading"><div><span className="eyebrow">SEU PROGRESSO PERMANECE NO NAVEGADOR</span><h1>Dados e progresso</h1><p>Exporte uma cópia ou importe um arquivo da mesma versão.</p></div></div>
    <div className="data-grid">
      <article className="panel data-card"><div className="data-icon">⇧</div><span className="eyebrow">CÓPIA DE SEGURANÇA</span><h2>Exportar progresso</h2><p>Baixe aulas estudadas, tentativas, erros, revisões e resultados de simulados em JSON.</p><button className="button primary" onClick={onExport}>Baixar arquivo JSON <span>↓</span></button></article>
      <article className="panel data-card"><div className="data-icon">⇩</div><span className="eyebrow">RESTAURAR UMA CÓPIA</span><h2>Importar progresso</h2><p>O arquivo será validado. A importação pede confirmação antes de substituir os dados deste navegador.</p>
        <input ref={fileInput} type="file" accept="application/json,.json" hidden onChange={(event) => { onImport(event.target.files?.[0]); event.currentTarget.value = ""; }} />
        <button className="button secondary" onClick={() => fileInput.current?.click()}>Selecionar arquivo</button>
      </article>
    </div>
    <section className="panel data-summary"><div className="section-heading"><div><span className="eyebrow">RESUMO LOCAL</span><h2>O que está salvo</h2></div></div><div className="data-facts">
      <span><strong>{state.studiedModules.length}</strong>aulas marcadas</span><span><strong>{attemptCount}</strong>tentativas</span><span><strong>{state.errorIds.length}</strong>itens no caderno</span><span><strong>{state.mockRuns.length}</strong>simulados concluídos</span><span><strong>{formatTime(state.totalSeconds)}</strong>tempo registrado</span>
    </div></section>
    <div className="notice"><strong>Privacidade</strong><p>Não há conta ou servidor. Se você limpar os dados do navegador, use o arquivo exportado para recuperar o progresso.</p></div>
  </section>;
}

export function ReviewCard({ item, onReview, onOpen }: { item: ReviewItem; onReview: (item: ReviewItem, success: boolean) => void; onOpen: (module: string) => void }) {
  const exercise = exercises.find((value) => value.id === item.exerciseId);
  if (!exercise) return null;
  const due = new Date(item.dueAt).getTime() <= Date.now();
  return <article className={"review-card panel " + (!due ? "not-due" : "")}>
    <div className="review-top"><span className="chip">{exercise.id} · {exercise.module}</span><span className={due ? "due-label" : "muted-small"}>{due ? "Devida agora" : "Agendada para " + formatDate(item.dueAt)}</span></div>
    <h3>{exercise.topic}</h3><p>{exercise.statement}</p>
    <div className="review-meta"><span>{exercise.difficulty}</span><span>Último resultado: {item.lastScore}/2</span><span>Intervalo: {item.intervalDays} dia(s)</span></div>
    <div className="button-row"><button className="button secondary compact" onClick={() => onOpen(exercise.module)}>Abrir questão</button><button className="button subtle-button compact" onClick={() => onReview(item, false)}>Preciso retomar · amanhã</button><button className="button primary compact" onClick={() => onReview(item, true)}>Acertei sem ajuda · 7 dias</button></div>
  </article>;
}

export function dueNow(items: Record<string, ReviewItem>) {
  return Object.values(items).filter((item) => new Date(item.dueAt).getTime() <= Date.now());
}

export function emptyAction(text: string) {
  return <span>{text}</span>;
}


