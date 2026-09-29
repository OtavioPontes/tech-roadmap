"use client";

import { useProgress } from "@/lib/progress";

export function DoneToggle({ slug }: { slug: string }) {
  const { isDone, toggle } = useProgress();
  const done = isDone(slug);

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={done}
      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
        done
          ? "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700"
          : "border-border bg-surface hover:border-foreground/30"
      }`}
    >
      <CheckIcon done={done} />
      {done ? "Concluído" : "Marcar como concluído"}
    </button>
  );
}

/** Indicador pequeno usado nos nós do roadmap. */
export function DoneDot({ slug, number }: { slug: string; number: number }) {
  const { isDone } = useProgress();
  const done = isDone(slug);
  return (
    <span
      className={`relative z-10 grid size-8 shrink-0 place-items-center rounded-full border-2 font-mono text-xs font-semibold transition-colors ${
        done ? "border-emerald-600 bg-emerald-600 text-white" : "border-border bg-background text-muted"
      }`}
      aria-label={done ? "Concluído" : undefined}
    >
      {done ? <CheckIcon done /> : number}
    </span>
  );
}

export function PhaseProgress({ slugs, barClass }: { slugs: string[]; barClass: string }) {
  const { done } = useProgress();
  const count = slugs.filter((s) => done.includes(s)).length;
  const pct = Math.round((count / slugs.length) * 100);

  return (
    <div className="flex items-center gap-3 text-sm text-muted">
      <div
        className="h-1.5 w-32 overflow-hidden rounded-full bg-border"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso da etapa"
      >
        <div className={`h-full rounded-full transition-all ${barClass}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="tabular-nums">
        {count}/{slugs.length}
      </span>
    </div>
  );
}

function CheckIcon({ done }: { done: boolean }) {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      {done ? <path d="m3.5 8.5 3 3 6-7" /> : <rect x="2.5" y="2.5" width="11" height="11" rx="2" strokeWidth="1.5" />}
    </svg>
  );
}
