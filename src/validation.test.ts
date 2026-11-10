import { describe, expect, it } from "vitest";
import { courseIndex, exercises, lessons } from "./content";
import { initialState } from "./storage";
import { isValidAppState } from "./validation";

describe("integridade do conteúdo", () => {
  it("mantém aulas, questões e índice alinhados", () => {
    expect(lessons).toHaveLength(11);
    expect(exercises).toHaveLength(courseIndex.exerciseCount);
    expect(new Set(exercises.map((exercise) => exercise.id)).size).toBe(exercises.length);
    for (const module of courseIndex.modules) {
      expect(module.exerciseIds.every((id) => exercises.some((exercise) => exercise.id === id))).toBe(true);
    }
    for (const exam of courseIndex.mockExams) {
      expect(exam.questionIds).toHaveLength(5);
      expect(exam.questionIds.every((id) => exercises.some((exercise) => exercise.id === id))).toBe(true);
    }
  });
});

describe("validação de progresso", () => {
  it("aceita o estado inicial e um simulado coerente", () => {
    const exam = courseIndex.mockExams[0];
    const firstQuestion = exam.questionIds[0];
    const state = {
      ...initialState,
      mockRuns: [{
        mockId: exam.id, createdAt: new Date().toISOString(), score: 2,
        scores: { [firstQuestion]: 2 }, answers: { [firstQuestion]: "Resolução registrada" },
      }],
    };
    expect(isValidAppState(initialState)).toBe(true);
    expect(isValidAppState(state)).toBe(true);
  });

  it("recusa módulo desconhecido e pontuação fora do intervalo", () => {
    expect(isValidAppState({ ...initialState, studiedModules: ["M99"] })).toBe(false);
    const exerciseId = exercises[0].id;
    const malformed = { ...initialState, attempts: { [exerciseId]: [{
      id: "a1", createdAt: new Date().toISOString(), score: 4, answer: "x",
    }] } };
    expect(isValidAppState(malformed)).toBe(false);
  });

  it("recusa resultados de simulado cuja nota não corresponde às rubricas", () => {
    const exam = courseIndex.mockExams[0];
    const firstQuestion = exam.questionIds[0];
    const malformed = {
      ...initialState,
      mockRuns: [{ mockId: exam.id, createdAt: new Date().toISOString(), score: 8,
        scores: { [firstQuestion]: 2 }, answers: { [firstQuestion]: "resposta" } }],
    };
    expect(isValidAppState(malformed)).toBe(false);
  });
});
