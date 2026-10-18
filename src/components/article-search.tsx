"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Link as LinkType } from "@/data/types";
import { type Locale, topicHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/ui";
import { LinkRow } from "./ui";

export type ArticleEntry = LinkType & { topicSlug: string; topicTitle: string; phaseSlug: string };

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

export function ArticleSearch({
  lang,
  entries,
  phases,
}: {
  lang: Locale;
  entries: ArticleEntry[];
  phases: { slug: string; title: string; number: number }[];
}) {
  const d = getDictionary(lang).search;
  const [query, setQuery] = useState("");
  const [phase, setPhase] = useState<string>("");
  const [langFilter, setLangFilter] = useState<"" | "pt" | "en">("");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return entries.filter(
      (e) =>
        (!phase || e.phaseSlug === phase) &&
        (!langFilter || e.lang === langFilter) &&
        (!q || normalize(`${e.title} ${e.topicTitle} ${e.source ?? ""}`).includes(q)),
    );
  }, [entries, query, phase, langFilter]);

  // Agrupa por tópico mantendo a ordem do roadmap
  const groups = useMemo(() => {
    const map = new Map<string, { title: string; items: ArticleEntry[] }>();
    for (const e of filtered) {
      if (!map.has(e.topicSlug)) map.set(e.topicSlug, { title: e.topicTitle, items: [] });
      map.get(e.topicSlug)!.items.push(e);
    }
    return [...map.entries()];
  }, [filtered]);

  const pill = (active: boolean) =>
    `rounded-full border px-3 py-1 text-sm transition-colors ${
      active ? "border-foreground bg-foreground text-background" : "border-border hover:bg-surface"
    }`;

  return (
    <div>
      <div className="sticky top-14 z-20 -mx-4 mb-6 space-y-3 border-b border-border bg-background/90 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={d.placeholder}
          aria-label={d.label}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 outline-none placeholder:text-subtle focus:border-foreground/40"
        />
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={pill(!phase)} onClick={() => setPhase("")}>
            {d.allPhases}
          </button>
          {phases.map((p) => (
            <button key={p.slug} type="button" className={pill(phase === p.slug)} onClick={() => setPhase(p.slug)}>
              {p.number}. {p.title}
            </button>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
          {(["", "pt", "en"] as const).map((l) => (
            <button key={l || "all"} type="button" className={pill(langFilter === l)} onClick={() => setLangFilter(l)}>
              {l === "" ? d.allLangs : d[l]}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-4 text-sm text-muted" aria-live="polite">
        {d.count(filtered.length)}
      </p>

      {groups.length === 0 ? (
        <p className="py-12 text-center text-muted">{d.empty}</p>
      ) : (
        <div className="space-y-8">
          {groups.map(([slug, group]) => (
            <section key={slug}>
              <h2 className="mb-2 font-semibold">
                <Link href={topicHref(lang, slug)} className="underline-offset-4 hover:underline">
                  {group.title}
                </Link>
              </h2>
              <ul className="-mx-3 grid gap-x-4 md:grid-cols-2">
                {group.items.map((a) => (
                  <LinkRow key={a.url} link={a} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
