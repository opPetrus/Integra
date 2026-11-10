import courseRaw from "../content/curso.md?raw";
import exerciseRaw from "../content/exercicios.md?raw";
import indexJson from "../content/index.json";
import type { Exercise, ExerciseMeta, Lesson } from "./types";

export const courseIndex = indexJson as {
  schemaVersion: number;
  exerciseCount: number;
  modules: Array<{ id: string; title: string; exerciseIds: string[]; sourceExercises: string }>;
  exercises: ExerciseMeta[];
  mockExams: Array<{ id: string; durationMinutes: number; questionIds: string[]; pointsPerQuestion: number }>;
  sourceErrata: Array<{ sourceExercise: string | number; status: string; reason: string }>;
};

function collectSections(source: string, pattern: RegExp) {
  const matches = Array.from(source.matchAll(pattern));
  return matches.map((match, index) => {
    const start = (match.index ?? 0) + match[0].length;
    const end = index + 1 < matches.length ? (matches[index + 1].index ?? source.length) : source.length;
    return { match, body: source.slice(start, end).trim() };
  });
}

export const lessons: Lesson[] = collectSections(courseRaw, /^## (M\d+) — (.+)$/gm).map(({ match, body }) => ({
  id: match[1],
  title: match[2],
  markdown: body,
}));

function field(body: string, label: string) {
  const line = body.split(/\r?\n/).find((item) => item.startsWith("- " + label + ": "));
  return line?.slice(label.length + 4).trim() ?? "";
}

export const exercises: Exercise[] = collectSections(exerciseRaw, /^### (E-M\d+-\d+) — (.+)$/gm).map(({ match, body }) => {
  const id = match[1];
  const meta = courseIndex.exercises.find((item) => item.id === id);
  const prompt = body.match(/^- Enunciado: (.+)$/m)?.[1]?.trim() ?? "";
  const hints = [field(body, "Dica 1"), field(body, "Dica 2")].filter(Boolean);
  return {
    id, title: match[2], module: meta?.module ?? id.slice(2, 4),
    difficulty: meta?.difficulty ?? field(body, "Dificuldade").split(".")[0],
    topic: meta?.topic ?? match[2], technique: meta?.technique ?? "",
    origin: meta?.origin ?? field(body, "Origem"),
    prerequisites: meta?.prerequisites ?? [field(body, "Pré-requisito")].filter(Boolean),
    statement: prompt, hints,
    rubric: field(body, "Rubrica (2 pontos)") || field(body, "Rubrica"),
    type: meta?.type ?? field(body, "Tipo"),
  };
});

export const lessonMap = new Map(lessons.map((lesson) => [lesson.id, lesson]));
export const exerciseMap = new Map(exercises.map((exercise) => [exercise.id, exercise]));

let solutionPromise: Promise<Map<string, string>> | undefined;
async function loadSolutionMap() {
  if (!solutionPromise) {
    solutionPromise = import("../content/gabarito.md?raw").then((module) => new Map(
      collectSections(module.default, /^### (E-M\d+-\d+)(?: — .+)?$/gm).map(({ match, body }) => [match[1], body]),
    ));
  }
  return solutionPromise;
}

export async function getSolution(id: string) {
  const map = await loadSolutionMap();
  return map.get(id) ?? "Solução não cadastrada.";
}
