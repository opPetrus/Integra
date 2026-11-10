import { lazy, Suspense, useEffect, useState } from "react";
import type { AppState, Page, ReviewItem } from "./types";
import { courseIndex, exercises } from "./content";
import { initialState, loadState, saveState } from "./storage";
import { formatTime } from "./utils";
import { isValidAppState } from "./validation";
const ExerciseCard = lazy(() => import("./Practice").then((module) => ({ default: module.ExerciseCard })));
const MockPage = lazy(() => import("./Practice").then((module) => ({ default: module.MockPage })));
const DataPage = lazy(() => import("./Practice").then((module) => ({ default: module.DataPage })));
const CoursePage = lazy(() => import("./Pages").then((module) => ({ default: module.CoursePage })));
const DashboardPage = lazy(() => import("./Pages").then((module) => ({ default: module.DashboardPage })));
const ErrorsPage = lazy(() => import("./Pages").then((module) => ({ default: module.ErrorsPage })));
const ReviewsPage = lazy(() => import("./Pages").then((module) => ({ default: module.ReviewsPage })));

const navItems: Array<{ id: Page; label: string; icon: string }> = [
  { id: "dashboard", label: "Painel", icon: "◫" },
  { id: "course", label: "Curso", icon: "▤" },
  { id: "exercises", label: "Prática", icon: "∫" },
  { id: "reviews", label: "Revisão", icon: "↻" },
  { id: "errors", label: "Caderno de erros", icon: "⌁" },
  { id: "mock", label: "Simulados", icon: "◷" },
  { id: "data", label: "Dados e progresso", icon: "⇅" },
];

const pageTitles: Record<Page, string> = {
  dashboard: "Seu espaço de estudo",
  course: "Curso de integrais",
  exercises: "Prática deliberada",
  reviews: "Revisão espaçada",
  errors: "Caderno de erros",
  mock: "Simulados",
  data: "Dados e progresso",
};


function parsePage(): Page {
  const value = window.location.hash.replace(/^#\/?/, "").split("/")[0] as Page;
  return navItems.some((item) => item.id === value) ? value : "dashboard";
}
function dateAfter(days: number) { return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString(); }
async function copyText(value: string) { await navigator.clipboard.writeText(value); }

export default function App() {
  const [state, setState] = useState<AppState>(initialState);
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState<Page>(parsePage);
  const [activeModule, setActiveModule] = useState("M0");
  const [query, setQuery] = useState("");
  const [moduleFilter, setModuleFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [toast, setToast] = useState("");
  const [clock, setClock] = useState(Date.now());
  const [solutionOpen, setSolutionOpen] = useState<Record<string, boolean>>({});
  const [selfScores, setSelfScores] = useState<Record<string, number | "">>({});
  const [examSolutions, setExamSolutions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let alive = true;
    loadState().then((loaded) => { if (alive) { setState(loaded); setReady(true); } });
    const onHash = () => setPage(parsePage());
    window.addEventListener("hashchange", onHash);
    return () => { alive = false; window.removeEventListener("hashchange", onHash); };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const timer = window.setTimeout(() => { void saveState(state); }, 300);
    document.documentElement.dataset.theme = state.theme;
    return () => window.clearTimeout(timer);
  }, [state, ready]);

  useEffect(() => {
    let elapsed = 0;
    const timer = window.setInterval(() => {
      setClock(Date.now());
      elapsed += 1;
      if (elapsed % 60 === 0) setState((old) => ({ ...old, totalSeconds: old.totalSeconds + 60 }));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const active = state.activeMock;
    if (!active || active.phase !== "testing") return;
    const exam = courseIndex.mockExams.find((item) => item.id === active.mockId);
    if (exam && clock - new Date(active.startedAt).getTime() >= exam.durationMinutes * 60 * 1000) {
      setState((old) => old.activeMock ? { ...old, activeMock: { ...old.activeMock, phase: "grading" } } : old);
    }
  }, [clock, state.activeMock]);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };
  const go = (next: Page) => {
    setPage(next);
    if (window.location.hash !== "#/" + next) window.location.hash = "/" + next;
  };
  const allAttempts = Object.values(state.attempts).flat();
  const attemptedIds = new Set(Object.keys(state.attempts).filter((id) => state.attempts[id].length > 0));
  const dueReviews = Object.values(state.reviews).filter((item) => new Date(item.dueAt).getTime() <= Date.now());
  const coursePercent = Math.round((state.studiedModules.length / courseIndex.modules.length) * 100);
  const exercisePercent = Math.round((attemptedIds.size / exercises.length) * 100);
  const filteredExercises = exercises.filter((exercise) => {
    const matchesModule = moduleFilter === "all" || exercise.module === moduleFilter;
    const matchesDifficulty = difficultyFilter === "all" || exercise.difficulty === difficultyFilter;
    const text = (exercise.id + " " + exercise.topic + " " + exercise.technique + " " + exercise.origin).toLowerCase();
    return matchesModule && matchesDifficulty && text.includes(query.toLowerCase());
  });

  const updateDraft = (id: string, value: string) => setState((old) => ({ ...old, drafts: { ...old.drafts, [id]: value } }));
  const openPractice = (module: string) => { setActiveModule(module); setModuleFilter(module); go("exercises"); };
  const markStudied = (id: string) => setState((old) => ({
    ...old,
    studiedModules: old.studiedModules.includes(id) ? old.studiedModules.filter((item) => item !== id) : [...old.studiedModules, id],
  }));

  const recordAttempt = (exercise: typeof exercises[number], score: number, errorKind: string) => {
    const answer = state.drafts[exercise.id] ?? "";
    const attempt = { id: exercise.id + "-" + Date.now(), createdAt: new Date().toISOString(), score, answer, errorKind: score < 2 ? errorKind : undefined };
    setState((old) => ({
      ...old,
      attempts: { ...old.attempts, [exercise.id]: [...(old.attempts[exercise.id] ?? []), attempt] },
      errorIds: score < 2 && !old.errorIds.includes(exercise.id) ? [...old.errorIds, exercise.id] : old.errorIds,
      errorKinds: score < 2 ? { ...old.errorKinds, [exercise.id]: errorKind } : old.errorKinds,
      reviews: { ...old.reviews, [exercise.id]: { exerciseId: exercise.id, dueAt: dateAfter(score < 2 ? 1 : 3), intervalDays: score < 2 ? 1 : 3, lastScore: score } },
    }));
    setSelfScores((old) => ({ ...old, [exercise.id]: "" }));
    notify("Tentativa registrada. A revisão foi agendada.");
  };

  const copyPrompt = async (exercise: typeof exercises[number]) => {
    const answer = state.drafts[exercise.id]?.trim() || "(não preenchida)";
    const prompt = [
      "Corrija rigorosamente minha resolução de cálculo integral.",
      "ID: " + exercise.id,
      "Assunto: " + exercise.topic,
      "Técnica esperada: " + exercise.technique,
      "Enunciado: " + exercise.statement,
      "Rubrica: " + exercise.rubric,
      "Minha resolução: " + answer,
      "Dê crédito parcial pela rubrica. Aponte a primeira linha inválida, classifique erro conceitual/algébrico/de domínio/limite e ofereça uma dica antes da solução completa. Aceite métodos equivalentes corretos.",
    ].join("\n\n");
    try { await copyText(prompt); notify("Prompt de correção copiado."); }
    catch { notify("Não foi possível copiar. Verifique a permissão da área de transferência."); }
  };

  const startMock = (mockId: string) => {
    setState((old) => ({ ...old, activeMock: { mockId, startedAt: new Date().toISOString(), phase: "testing", answers: {}, scores: {} } }));
    setExamSolutions({});
    notify("Simulado iniciado. As dicas ficam indisponíveis até entregar.");
  };
  const setMockAnswer = (id: string, value: string) => setState((old) => old.activeMock
    ? { ...old, activeMock: { ...old.activeMock, answers: { ...old.activeMock.answers, [id]: value } } } : old);
  const setMockScore = (id: string, value: number) => setState((old) => old.activeMock
    ? { ...old, activeMock: { ...old.activeMock, scores: { ...old.activeMock.scores, [id]: value } } } : old);
  const finishMock = () => {
    const active = state.activeMock;
    if (!active) return;
    const exam = courseIndex.mockExams.find((item) => item.id === active.mockId);
    if (!exam || exam.questionIds.some((id) => active.scores[id] === undefined)) {
      notify("Atribua 0, 1 ou 2 pontos para cada questão antes de finalizar.");
      return;
    }
    const score = Object.values(active.scores).reduce((sum, value) => sum + value, 0);
    setState((old) => {
      const errors = exam.questionIds.filter((id) => (active.scores[id] ?? 0) < 2);
      const reviews = { ...old.reviews };
      errors.forEach((id) => { reviews[id] = { exerciseId: id, dueAt: dateAfter(1), intervalDays: 1, lastScore: active.scores[id] ?? 0 }; });
      return {
        ...old, mockRuns: [...old.mockRuns, { mockId: active.mockId, createdAt: new Date().toISOString(), score, scores: active.scores, answers: active.answers }],
        errorIds: Array.from(new Set([...old.errorIds, ...errors])), reviews, activeMock: undefined,
      };
    });
    notify("Simulado salvo. Os itens com pontuação parcial entraram na revisão.");
  };

  const exportProgress = () => {
    const payload = { format: "integra-progress", version: 1, exportedAt: new Date().toISOString(), progress: state };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = "integra-progresso.json"; link.click(); window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify("Arquivo de progresso exportado.");
  };
  const importProgress = async (file?: File) => {
    if (!file) return;
    try {
      const parsed: unknown = JSON.parse(await file.text());
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed) ||
          !("format" in parsed) || parsed.format !== "integra-progress" ||
          !("version" in parsed) || parsed.version !== 1 ||
          !("progress" in parsed) || !isValidAppState(parsed.progress)) {
        notify("Arquivo inválido ou de versão incompatível."); return;
      }
      if (!window.confirm("Importar este arquivo e substituir o progresso local atual?")) return;
      setState({ ...initialState, ...parsed.progress });
      notify("Progresso importado.");
    } catch { notify("Não consegui ler esse JSON."); }
  };
  const handleReview = (item: ReviewItem, success: boolean) => {
    const days = success ? 7 : 1;
    setState((old) => ({
      ...old,
      reviews: { ...old.reviews, [item.exerciseId]: { ...item, dueAt: dateAfter(days), intervalDays: days, lastScore: success ? 2 : 0 } },
      errorIds: success ? old.errorIds.filter((id) => id !== item.exerciseId) : old.errorIds,
    }));
    notify(success ? "Boa. Próxima revisão em 7 dias." : "A revisão volta amanhã.");
  };

  if (!ready) return <div className="loading-screen"><div className="brand-mark">∫</div><p>Preparando seu espaço de estudo…</p></div>;
  const currentExam = state.activeMock ? courseIndex.mockExams.find((item) => item.id === state.activeMock?.mockId) : undefined;
  const elapsed = state.activeMock ? Math.max(0, Math.floor((clock - new Date(state.activeMock.startedAt).getTime()) / 1000)) : 0;
  const remainingSeconds = currentExam ? Math.max(0, currentExam.durationMinutes * 60 - elapsed) : 0;

  return <div className="app-shell">
    <aside className="sidebar">
      <button className="brand-lockup" onClick={() => go("dashboard")} aria-label="Integra, ir ao painel"><span className="brand-mark">∫</span><span><strong>Integra</strong><small>laboratório de cálculo</small></span></button>
      <div className="sidebar-caption">ESTUDO</div>
      <nav aria-label="Navegação principal">
        {navItems.map((item) => <button key={item.id} className={"nav-link " + (page === item.id ? "active" : "")} onClick={() => go(item.id)} aria-current={page === item.id ? "page" : undefined}>
          <span className="nav-icon" aria-hidden="true">{item.icon}</span>{item.label}
          {item.id === "reviews" && dueReviews.length > 0 && <span className="nav-count">{dueReviews.length}</span>}
        </button>)}
      </nav>
      <div className="sidebar-bottom"><div className="mini-progress-title"><span>Curso</span><strong>{coursePercent}%</strong></div><div className="progress-track"><span style={{ width: coursePercent + "%" }} /></div><div className="sidebar-note">Um passo claro de cada vez.</div></div>
    </aside>
    <main className="main-area">
      <header className="topbar">
        <div className="mobile-brand"><span className="brand-mark small">∫</span><strong>Integra</strong></div>
        <div className="breadcrumb"><span>Integra</span><i>/</i><strong>{pageTitles[page]}</strong></div>
        <div className="top-actions">
          {page === "exercises" && <label className="top-search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar tema ou exercício" aria-label="Buscar exercício" /></label>}
          <div className="study-clock"><span className="clock-dot" />{formatTime(state.totalSeconds)}</div>
          <button className="icon-button theme-toggle" onClick={() => setState((old) => ({ ...old, theme: old.theme === "light" ? "dark" : "light" }))} aria-label={state.theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}>{state.theme === "light" ? "◐" : "☼"}</button>
        </div>
      </header>
      <div className="page-content"><Suspense fallback={<div className="loading-inline">Abrindo conteúdo…</div>}>
        {page === "dashboard" && <DashboardPage state={state} coursePercent={coursePercent} exercisePercent={exercisePercent} attemptedIds={attemptedIds} dueReviews={dueReviews} allAttempts={allAttempts} onGo={go} onOpenModule={setActiveModule} />}
        {page === "course" && <CoursePage state={state} activeModule={activeModule} onSelect={setActiveModule} onMarkStudied={markStudied} onPractice={(id) => { setModuleFilter(id); go("exercises"); }} />}
        {page === "exercises" && <section className="exercise-page">
          <div className="page-heading"><div><span className="eyebrow">42 QUESTÕES AUTORAIS · GABARITO SEPARADO</span><h1>Prática deliberada</h1><p>Registre sua tentativa. A correção usa critérios, não comparação de texto.</p></div><div className="practice-summary"><strong>{attemptedIds.size}<span>/{exercises.length}</span></strong><small>com tentativa</small></div></div>
          <div className="filter-bar panel">
            <label>Módulo<select value={moduleFilter} onChange={(event) => setModuleFilter(event.target.value)}><option value="all">Todos</option>{courseIndex.modules.filter((item) => item.id !== "M10").map((item) => <option key={item.id} value={item.id}>{item.id} · {item.title}</option>)}</select></label>
            <label>Dificuldade<select value={difficultyFilter} onChange={(event) => setDifficultyFilter(event.target.value)}><option value="all">Todas</option><option value="básica">Básica</option><option value="intermediária">Intermediária</option><option value="avançada">Avançada</option></select></label>
            <span className="filter-count">{filteredExercises.length} questões</span>
          </div>
          {filteredExercises.length === 0 ? <div className="empty-state panel"><div className="empty-icon">∫</div><h2>Nenhuma questão encontrada</h2><p>Tente mudar os filtros ou o termo da busca.</p></div> :
            <div className="exercise-list">{filteredExercises.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} state={state} setState={setState}
              selfScore={selfScores[exercise.id] ?? ""} setSelfScore={(score) => setSelfScores((old) => ({ ...old, [exercise.id]: score }))}
              solutionOpen={solutionOpen[exercise.id] ?? false} toggleSolution={() => setSolutionOpen((old) => ({ ...old, [exercise.id]: !old[exercise.id] }))}
              onDraft={(value) => updateDraft(exercise.id, value)} onRecord={(score, kind) => recordAttempt(exercise, score, kind)}
              onCopyPrompt={() => void copyPrompt(exercise)} onNotify={notify} />)}</div>}
        </section>}
        {page === "reviews" && <ReviewsPage state={state} onReview={handleReview} onOpen={openPractice} />}
        {page === "errors" && <ErrorsPage state={state} onOpen={openPractice} onRemove={(id) => setState((old) => ({ ...old, errorIds: old.errorIds.filter((value) => value !== id) }))} />}
        {page === "mock" && <MockPage state={state} remainingSeconds={remainingSeconds} examSolutions={examSolutions} setExamSolutions={setExamSolutions}
          onStart={startMock} onAnswer={setMockAnswer} onSubmit={() => setState((old) => old.activeMock ? { ...old, activeMock: { ...old.activeMock, phase: "grading" } } : old)}
          onScore={setMockScore} onFinish={finishMock} />}
        {page === "data" && <DataPage state={state} onExport={exportProgress} onImport={(file) => void importProgress(file)} />}
      </Suspense></div>
      <footer className="app-footer"><span>Integra · material pedagógico local</span><span>Deriva foi usado como referência de experiência</span></footer>
    </main>
    {toast && <div className="toast" role="status">{toast}</div>}
  </div>;
}





