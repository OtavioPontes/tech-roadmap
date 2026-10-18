import { books as booksPt, courses as coursesPt, people as peoplePt } from "@/data/library";
import { phases as phasesPt } from "@/data/roadmap";
import type { Book, Phase, Topic } from "@/data/types";
import type { Locale } from "./config";
import { contentEn } from "./content-en";

const misses = new Set<string>();

/** Traduz um texto de conteúdo (a chave é o texto em português). Sem tradução, mantém o original. */
export function tr(lang: Locale, text: string): string {
  if (lang === "pt") return text;
  const translated = contentEn[text];
  if (translated === undefined && process.env.I18N_DEBUG && !misses.has(text)) {
    misses.add(text);
    console.warn(`[i18n] sem tradução: ${JSON.stringify(text)}`);
  }
  return translated ?? text;
}

function localizeTopic(lang: Locale, topic: Topic): Topic {
  const t = (s: string) => tr(lang, s);
  return {
    ...topic,
    title: t(topic.title),
    summary: t(topic.summary),
    groups: topic.groups?.map((g) => ({
      title: g.title && t(g.title),
      subtopics: g.subtopics.map((s) => ({ ...s, title: t(s.title), items: s.items?.map(t) })),
    })),
    choose: topic.choose && { ...topic.choose, label: t(topic.choose.label) },
    examples: topic.examples?.map((ex) => ({ title: t(ex.title), items: ex.items.map(t) })),
    figures: topic.figures?.map((f) => ({ ...f, alt: t(f.alt), caption: f.caption && t(f.caption) })),
  };
}

const cache = new Map<Locale, ReturnType<typeof build>>();

function build(lang: Locale) {
  const phases: Phase[] = phasesPt.map((p) => ({
    ...p,
    title: tr(lang, p.title),
    tagline: tr(lang, p.tagline),
    description: tr(lang, p.description),
    topics: p.topics.map((topic) => localizeTopic(lang, topic)),
  }));
  const allTopics = phases.flatMap((phase) => phase.topics.map((topic) => ({ ...topic, phase })));
  const books: Book[] = booksPt.map((b) => ({ ...b, title: tr(lang, b.title), author: tr(lang, b.author) }));
  const courses = coursesPt.map((c) => ({ ...c, title: tr(lang, c.title), description: tr(lang, c.description) }));
  const people = peoplePt.map((p) => ({ ...p, known: tr(lang, p.known) }));
  return { phases, allTopics, books, bookById: Object.fromEntries(books.map((b) => [b.id, b])), courses, people };
}

/** Roadmap e biblioteca no idioma pedido. */
export function getContent(lang: Locale) {
  let content = cache.get(lang);
  if (!content) {
    content = build(lang);
    cache.set(lang, content);
  }
  return content;
}

export function findTopic(lang: Locale, slug: string) {
  const { allTopics } = getContent(lang);
  const index = allTopics.findIndex((t) => t.slug === slug);
  if (index === -1) return undefined;
  return { topic: allTopics[index], prev: allTopics[index - 1], next: allTopics[index + 1] };
}
