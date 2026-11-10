import { lazy, Suspense } from "react";
import type { AppState, Page, ReviewItem } from "./types";
import { courseIndex, exercises, lessonMap, lessons } from "./content";
import { EmptyState, Markdown, PerformanceChart, RiemannWidget } from "./ui";
import { ReviewCard } from "./Practice";

const Formula = lazy(() => import("./Formula"));

export function DashboardPage({
  state, coursePercent, exercisePercent, attemptedIds, dueReviews, allAttempts, onGo, onOpenModule,
}: {
  state: AppState; coursePercent: number; exercisePercent: number; attemptedIds: Set<string>;
  dueReviews: ReviewItem[]; allAttempts: unknown[]; onGo: (page: Page) => void; onOpenModule: (id: string) => void;
}) {
  const recommendedModule = courseIndex.modules.find((item) => !state.studiedModules.includes(item.id)) ?? courseIndex.modules[0];
  const recommendedExercise = exercises.find((item) => !attemptedIds.has(item.id)) ?? exercises[0];
  return <section className="dashboard-page">
    <div className="welcome-row">
      <div><span className="eyebrow">UM BOM DIA PARA INTEGRAR</span><h1>Entenda o processo.<br /><em>Domine a técnica.</em></h1><p className="lead">Um percurso de integrais construído a partir do capítulo 4 e da sua Lista 4.</p></div>
      <div className="welcome-illustration" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="integral-glyph">∫</span><span className="mini-equation">f(x) dx</span></div>
    </div>
    <div className="stat-grid">
      <Stat label="Aulas concluídas" value={state.studiedModules.length + "/" + lessons.length} detail={coursePercent + "% do curso"} icon="▤" tone="green" />
      <Stat label="Exercícios tentados" value={attemptedIds.size + "/" + exercises.length} detail={exercisePercent + "% do banco"} icon="∫" tone="blue" />
      <Stat label="Precisam de revisão" value={String(dueReviews.length)} detail={state.errorIds.length + " no caderno de erros"} icon="↻" tone="amber" />
      <Stat label="Tempo de estudo" value={formatClock(state.totalSeconds)} detail={allAttempts.length + " tentativas registradas"} icon="◷" tone="purple" />
    </div>
    <div className="dashboard-columns">
      <section className="panel continue-panel">
        <div className="section-heading"><div><span className="eyebrow">SEU PRÓXIMO PASSO</span><h2>Continue de onde parou</h2></div><button className="text-button" onClick={() => onGo("course")}>Ver o curso <span>→</span></button></div>
        <div className="next-card"><div className="next-mark">∫</div><div className="next-copy">
          <span className="chip subtle">{recommendedModule.id} · {recommendedModule.title}</span>
          <h3>{state.studiedModules.includes(recommendedModule.id) ? "Aprofunde sua prática" : "Comece o próximo módulo"}</h3>
          <p>{recommendedModule.sourceExercises}</p>
          <button className="button primary compact" onClick={() => { onOpenModule(recommendedModule.id); onGo("course"); }}>Abrir módulo <span>→</span></button>
        </div><div className="next-progress"><span>{state.studiedModules.includes(recommendedModule.id) ? "Concluído" : "A seguir"}</span><strong>{state.studiedModules.includes(recommendedModule.id) ? "✓" : recommendedModule.id}</strong></div></div>
        <div className="recommendation-row"><div className="recommend-icon">✦</div><div><strong>Prática recomendada</strong><span>{recommendedExercise.id} · {recommendedExercise.topic}</span></div><button className="icon-button small" onClick={() => onGo("exercises")} aria-label="Ir à prática recomendada">→</button></div>
      </section>
      <section className="panel module-panel"><div className="section-heading"><div><span className="eyebrow">VISÃO GERAL</span><h2>Seu percurso</h2></div><span className="muted-small">{lessons.length} módulos</span></div>
        <div className="module-list-mini">{courseIndex.modules.map((module, index) => {
          const complete = state.studiedModules.includes(module.id);
          return <button key={module.id} className="module-mini-row" onClick={() => { onOpenModule(module.id); onGo("course"); }}>
            <span className={"module-dot " + (complete ? "done" : "")}>{complete ? "✓" : String(index).padStart(2, "0")}</span><span className="module-mini-title">{module.title}</span><span className="module-mini-count">{module.exerciseIds.length || "mix"}</span>
          </button>;
        })}</div>
      </section>
    </div>
    <div className="dashboard-columns lower">
      <section className="panel performance-panel"><div className="section-heading"><div><span className="eyebrow">EVIDÊNCIAS DE APRENDIZAGEM</span><h2>Desempenho por módulo</h2></div><button className="text-button" onClick={() => onGo("exercises")}>Praticar <span>→</span></button></div><PerformanceChart attempts={state.attempts} /></section>
      <section className="panel exam-panel"><span className="eyebrow">PREPARAÇÃO PARA A PROVA</span><h2>Treine sem pistas</h2><p>Dois simulados misturam fundamentos, técnicas e aplicações. A correção é manual e por rubrica.</p><div className="exam-meta"><span>2 provas</span><span>50 min cada</span><span>10 pontos</span></div><button className="button secondary" onClick={() => onGo("mock")}>Ver simulados <span>→</span></button></section>
    </div>
  </section>;
}

export function CoursePage({
  state, activeModule, onSelect, onMarkStudied, onPractice,
}: {
  state: AppState; activeModule: string; onSelect: (id: string) => void; onMarkStudied: (id: string) => void; onPractice: (module: string) => void;
}) {
  const lesson = lessonMap.get(activeModule);
  const module = courseIndex.modules.find((item) => item.id === activeModule);
  const moduleExercises = exercises.filter((item) => item.module === activeModule);
  const coursePercent = Math.round((state.studiedModules.length / courseIndex.modules.length) * 100);
  return <section className="course-page">
    <div className="page-heading"><div><span className="eyebrow">TRILHA DE APRENDIZAGEM · 20 H ESTIMADAS</span><h1>Curso de integrais</h1><p>Conteúdo aberto desde o início. Avance na ordem ou retome qualquer assunto.</p></div><div className="heading-progress"><strong>{coursePercent}%</strong><span>do curso estudado</span></div></div>
    <div className="course-layout">
      <aside className="course-index panel"><span className="eyebrow">MÓDULOS</span>{courseIndex.modules.map((item, index) => (
        <button key={item.id} className={"course-index-row " + (activeModule === item.id ? "selected" : "")} onClick={() => onSelect(item.id)}>
          <span className={"module-dot " + (state.studiedModules.includes(item.id) ? "done" : "")}>{state.studiedModules.includes(item.id) ? "✓" : String(index).padStart(2, "0")}</span>
          <span><strong>{item.title}</strong><small>{item.exerciseIds.length ? item.exerciseIds.length + " exercícios-base" : "Revisão e simulados"}</small></span>
        </button>
      ))}</aside>
      <article className="lesson-view panel">
        {lesson && module ? <>
          <div className="lesson-kicker"><span className="chip">{lesson.id}</span><span>{module.sourceExercises}</span></div>
          <div className="lesson-title-row"><h2>{lesson.title}</h2><button className={"button " + (state.studiedModules.includes(lesson.id) ? "secondary" : "primary") + " compact"} onClick={() => onMarkStudied(lesson.id)}>{state.studiedModules.includes(lesson.id) ? "✓ Estudada" : "Marcar como estudada"}</button></div>
          <Suspense fallback={<div className="loading-inline">Carregando fórmulas…</div>}><Formula moduleId={lesson.id} /></Suspense>
          {lesson.id === "M1" && <RiemannWidget />}
          <Markdown>{lesson.markdown}</Markdown>
          {lesson.id === "M7" && <div className="notice warning"><strong>Pendência da Lista 4 — exercício 51</strong><p>A reta x=8, como impressa, cruza assíntotas de tan x. Confirme o enunciado com o professor antes de usar um limite alternativo.</p></div>}
          {lesson.id === "M5" && <div className="notice warning"><strong>Pendência da Lista 4 — exercício 59(d)</strong><p>A identidade hiperbólica impressa repete um produto. O curso apresenta a fórmula padrão e mantém a fonte sinalizada.</p></div>}
          <div className="lesson-exercises"><div className="section-heading"><div><span className="eyebrow">PRÁTICA DO MÓDULO</span><h3>Comece por aqui</h3></div><button className="text-button" onClick={() => onPractice(lesson.id)}>Abrir banco <span>→</span></button></div>
            <div className="exercise-chips">{moduleExercises.map((exercise) => <button key={exercise.id} className="exercise-chip" onClick={() => onPractice(lesson.id)}>{exercise.id}<span>{exercise.difficulty}</span></button>)}</div>
          </div>
        </> : <p>Escolha um módulo para começar.</p>}
      </article>
    </div>
  </section>;
}

export function ReviewsPage({ state, onReview, onOpen }: { state: AppState; onReview: (item: ReviewItem, success: boolean) => void; onOpen: (module: string) => void }) {
  const reviews = Object.values(state.reviews).sort((a, b) => a.dueAt.localeCompare(b.dueAt));
  const due = reviews.filter((item) => new Date(item.dueAt).getTime() <= Date.now()).length;
  return <section className="reviews-page">
    <div className="page-heading"><div><span className="eyebrow">RETOMADAS CURTAS · PRIORIDADE PARA ERROS</span><h1>Revisão espaçada</h1><p>Revise quando a memória ainda exige esforço. O próximo intervalo se adapta à sua tentativa.</p></div><div className="practice-summary"><strong>{due}</strong><small>para hoje</small></div></div>
    {reviews.length === 0 ? <EmptyState title="Sua fila está vazia" text="Registre uma tentativa na prática para agendar a primeira revisão." action={<button className="button primary" onClick={() => onOpen("M0")}>Abrir prática</button>} /> :
      <div className="review-list">{reviews.map((item) => <ReviewCard key={item.exerciseId} item={item} onReview={onReview} onOpen={onOpen} />)}</div>}
  </section>;
}

export function ErrorsPage({ state, onOpen, onRemove }: { state: AppState; onOpen: (module: string) => void; onRemove: (id: string) => void }) {
  return <section className="errors-page">
    <div className="page-heading"><div><span className="eyebrow">ERRO É UMA PISTA SOBRE O PRÓXIMO PASSO</span><h1>Caderno de erros</h1><p>Veja o tipo de dificuldade, retome a questão e registre uma nova tentativa.</p></div><div className="practice-summary"><strong>{state.errorIds.length}</strong><small>itens acompanhados</small></div></div>
    {state.errorIds.length === 0 ? <EmptyState title="Nenhum erro registrado" text="Questões com pontuação parcial entram aqui para ajudar a escolher sua revisão." action={<button className="button primary" onClick={() => onOpen("M0")}>Resolver questão</button>} /> :
      <div className="error-list">{state.errorIds.map((id) => {
        const exercise = exercises.find((item) => item.id === id);
        const latest = state.attempts[id]?.at(-1);
        if (!exercise) return null;
        return <article key={id} className="error-card panel"><div className="error-symbol">↗</div><div className="error-content">
          <div className="review-top"><span className="chip">{id} · {exercise.module}</span><span className="muted-small">{latest ? new Date(latest.createdAt).toLocaleDateString("pt-BR") : "Simulado"}</span></div>
          <h3>{exercise.topic}</h3><p className="error-category">{state.errorKinds[id] ?? "Revise os critérios da questão"}</p><p>{exercise.statement}</p>
          <div className="button-row"><button className="button primary compact" onClick={() => onOpen(exercise.module)}>Refazer questão</button><button className="text-button" onClick={() => onRemove(id)}>Remover do caderno</button></div>
        </div></article>;
      })}</div>}
  </section>;
}

function Stat({ label, value, detail, icon, tone }: { label: string; value: string; detail: string; icon: string; tone: string }) {
  return <div className="stat-card panel"><div className={"stat-icon " + tone}>{icon}</div><div><span>{label}</span><strong>{value}</strong><small>{detail}</small></div></div>;
}

function formatClock(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours > 0 ? hours + "h " + String(minutes).padStart(2, "0") + "m" : minutes + " min";
}


