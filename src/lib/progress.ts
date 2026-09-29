"use client";

import { useSyncExternalStore } from "react";

// Progresso do leitor salvo só no navegador dele (localStorage).
const KEY = "tech-roadmap:done";
const EVENT = "tech-roadmap:progress";
const EMPTY: string[] = [];

let cache: { raw: string | null; value: string[] } = { raw: null, value: EMPTY };

function read(): string[] {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(KEY);
  } catch {
    return EMPTY;
  }
  if (raw !== cache.raw) {
    let value = EMPTY;
    try {
      const parsed = JSON.parse(raw ?? "[]");
      if (Array.isArray(parsed)) value = parsed.filter((x) => typeof x === "string");
    } catch {}
    cache = { raw, value };
  }
  return cache.value;
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

export function useProgress() {
  const done = useSyncExternalStore(subscribe, read, () => EMPTY);

  function toggle(slug: string) {
    const current = read();
    const next = current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug];
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  }

  return { done, isDone: (slug: string) => done.includes(slug), toggle };
}
