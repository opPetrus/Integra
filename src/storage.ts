import type { AppState } from "./types";
import { isValidAppState } from "./validation";

const DATABASE = "integra-local";
const STORE = "state";
const KEY = "app-state";

export const initialState: AppState = {
  version: 1, studiedModules: [], drafts: {}, attempts: {}, errorIds: [],
  errorKinds: {}, reviews: {}, hints: {}, totalSeconds: 0, theme: "light", mockRuns: [],
};

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) { reject(new Error("IndexedDB indisponível")); return; }
    const request = indexedDB.open(DATABASE, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE)) request.result.createObjectStore(STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Falha ao abrir IndexedDB"));
  });
}

export async function loadState(): Promise<AppState> {
  try {
    const db = await openDatabase();
    const value = await new Promise<unknown>((resolve, reject) => {
      const request = db.transaction(STORE, "readonly").objectStore(STORE).get(KEY);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    db.close();
    const candidate = { ...initialState, ...(record(value) ? value : {}) };
    if (isValidAppState(candidate)) return candidate;
  } catch { /* fallback */ }
  try {
    const fallback = localStorage.getItem(KEY);
    if (fallback) {
      const value: unknown = JSON.parse(fallback);
      const candidate = { ...initialState, ...(record(value) ? value : {}) };
      if (isValidAppState(candidate)) return candidate;
    }
  } catch { /* start with empty progress */ }
  return initialState;
}

function record(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function saveState(state: AppState): Promise<void> {
  try {
    const db = await openDatabase();
    await new Promise<void>((resolve, reject) => {
      const request = db.transaction(STORE, "readwrite").objectStore(STORE).put(state, KEY);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
    db.close();
  } catch {
    localStorage.setItem(KEY, JSON.stringify(state));
  }
}
