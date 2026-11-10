import { courseIndex, exercises } from "./content";
import type { AppState } from "./types";

const moduleIds = new Set(courseIndex.modules.map((item) => item.id));
const exerciseIds = new Set(exercises.map((item) => item.id));
const examQuestions = new Map(courseIndex.mockExams.map((item) => [item.id, new Set(item.questionIds)]));

function record(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validDate(value: unknown): value is string {
  return typeof value === "string" && Number.isFinite(Date.parse(value));
}

function stringMap(value: unknown, allowedKeys: Set<string>): value is Record<string, string> {
  return record(value) && Object.entries(value).every(([key, item]) => allowedKeys.has(key) && typeof item === "string");
}

function scoreMap(value: unknown, allowedKeys: Set<string>): value is Record<string, number> {
  return record(value) && Object.entries(value).every(([key, score]) =>
    allowedKeys.has(key) && typeof score === "number" && Number.isInteger(score) && score >= 0 && score <= 2,
  );
}

function validAttempts(value: unknown) {
  return record(value) && Object.entries(value).every(([exerciseId, attempts]) =>
    exerciseIds.has(exerciseId) && Array.isArray(attempts) && attempts.every((attempt) =>
      record(attempt) && typeof attempt.id === "string" && validDate(attempt.createdAt) &&
      typeof attempt.score === "number" && Number.isInteger(attempt.score) && attempt.score >= 0 && attempt.score <= 2 &&
      typeof attempt.answer === "string" && (attempt.errorKind === undefined || typeof attempt.errorKind === "string"),
    ),
  );
}

function validReviews(value: unknown) {
  return record(value) && Object.entries(value).every(([exerciseId, review]) =>
    exerciseIds.has(exerciseId) && record(review) && review.exerciseId === exerciseId && validDate(review.dueAt) &&
    [1, 3, 7].includes(review.intervalDays as number) && typeof review.lastScore === "number" &&
    Number.isInteger(review.lastScore) && review.lastScore >= 0 && review.lastScore <= 2,
  );
}

function validMockRuns(value: unknown) {
  return Array.isArray(value) && value.every((run) => {
    if (!record(run) || typeof run.mockId !== "string" || !validDate(run.createdAt) ||
        typeof run.score !== "number" || !Number.isFinite(run.score) || run.score < 0 || run.score > 10) return false;
    const allowed = examQuestions.get(run.mockId);
    if (!allowed || !scoreMap(run.scores, allowed) || !stringMap(run.answers, allowed)) return false;
    const sum = Object.values(run.scores).reduce((total, score) => total + score, 0);
    return sum === run.score;
  });
}

export function isValidAppState(value: unknown): value is AppState {
  if (!record(value) || value.version !== 1 || !Array.isArray(value.studiedModules) ||
      !value.studiedModules.every((id) => typeof id === "string" && moduleIds.has(id)) ||
      !stringMap(value.drafts, exerciseIds) || !validAttempts(value.attempts) ||
      !Array.isArray(value.errorIds) || !value.errorIds.every((id) => typeof id === "string" && exerciseIds.has(id)) ||
      !stringMap(value.errorKinds, exerciseIds) || !validReviews(value.reviews) ||
      !record(value.hints) || !Object.entries(value.hints).every(([id, count]) =>
        exerciseIds.has(id) && typeof count === "number" && Number.isInteger(count) && count >= 0 && count <= 2,
      ) || typeof value.totalSeconds !== "number" || !Number.isFinite(value.totalSeconds) || value.totalSeconds < 0 ||
      (value.theme !== "light" && value.theme !== "dark") || !validMockRuns(value.mockRuns)) return false;

  if (value.activeMock !== undefined) {
    const active = value.activeMock;
    if (!record(active) || typeof active.mockId !== "string" || !examQuestions.has(active.mockId) ||
        !validDate(active.startedAt) || (active.phase !== "testing" && active.phase !== "grading")) return false;
    const allowed = examQuestions.get(active.mockId)!;
    if (!stringMap(active.answers, allowed) || !scoreMap(active.scores, allowed)) return false;
  }
  return true;
}
