export type Page = "dashboard" | "course" | "exercises" | "errors" | "reviews" | "mock" | "data";
export interface Lesson { id: string; title: string; markdown: string; }
export interface ExerciseMeta {
  id: string; module: string; topic: string; technique: string; difficulty: string;
  type: string; origin: string; prerequisites: string[]; maxScore: number; reviewStatus: string;
}
export interface Exercise {
  id: string; title: string; module: string; difficulty: string; topic: string; technique: string;
  origin: string; prerequisites: string[]; statement: string; hints: string[]; rubric: string; type: string;
}
export interface ExerciseAttempt { id: string; createdAt: string; score: number; answer: string; errorKind?: string; }
export interface ReviewItem { exerciseId: string; dueAt: string; intervalDays: number; lastScore: number; }
export interface MockRun { mockId: string; createdAt: string; score: number; scores: Record<string, number>; answers: Record<string, string>; }
export interface ActiveMock {
  mockId: string; startedAt: string; phase: "testing" | "grading";
  answers: Record<string, string>; scores: Record<string, number>;
}
export interface AppState {
  version: 1; studiedModules: string[]; drafts: Record<string, string>;
  attempts: Record<string, ExerciseAttempt[]>; errorIds: string[]; errorKinds: Record<string, string>;
  reviews: Record<string, ReviewItem>; hints: Record<string, number>; totalSeconds: number;
  theme: "light" | "dark"; mockRuns: MockRun[]; activeMock?: ActiveMock;
}
