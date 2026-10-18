import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiagramView } from "@/components/diagrams";
import { DoneToggle } from "@/components/progress";
import { BookCard, Chip, FigureBlock, LinkRow, SectionTitle } from "@/components/ui";
import { YouTube } from "@/components/youtube";
import { studyingNow } from "@/data/profile";
import { allTopics } from "@/data/roadmap";
import { alternates, href, type Locale, topicHref } from "@/i18n/config";
import { findTopic, getContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/ui";
import { phaseTheme } from "@/lib/theme";

export function topicStaticParams() {
  return allTopics.map((t) => ({ slug: t.slug }));
}

// Não usar `dynamicParams = false` nas rotas de tópico: no Cloudflare (OpenNext) sem incremental cache,
// o prerender não é encontrado e todas as páginas de tópico dão 404.
// Slugs inexistentes continuam em 404 pelo notFound() abaixo.

export function topicMetadata(lang: Locale, slug: string): Metadata {
  const found = findTopic(lang, slug);
  if (!found) return {};
  return {
    title: found.topic.title,
    description: found.topic.summary,
    alternates: alternates(lang, { pt: topicHref("pt", slug), en: topicHref("en", slug) }),
  };
}

export function TopicView({ lang, slug }: { lang: Locale; slug: string }) {
  const found = findTopic(lang, slug);
  if (!found) notFound();
  const d = getDictionary(lang).topic;
  const { bookById } = getContent(lang);

  const { topic, prev, next } = found;
  const { phase } = topic;
  const t = phaseTheme[phase.color];
  const position = phase.topics.findIndex((x) => x.slug === topic.slug) + 1;
  const books = (topic.books ?? []).map((id) => bookById[id]).filter(Boolean);
  const hasVisuals = !!(topic.diagrams?.length || topic.figures?.length);

  return (
    <article className="mx-auto max-w-4xl px-4 pt-10 pb-16 sm:px-6">
      <nav aria-label={d.breadcrumb} className="mb-6 text-sm text-muted">
        <Link href={href(lang, "roadmap")} className="hover:text-foreground">
          Roadmap
        </Link>
        <span className="mx-2 text-subtle">/</span>
        <Link href={`${href(lang, "roadmap")}#${phase.slug}`} className="hover:text-foreground">
          {getDictionary(lang).roadmap.phase} {phase.number}: {phase.title}
        </Link>
      </nav>

      <header className="border-b border-border pb-8">
        <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${t.text}`}>
          {d.topicOf(position, phase.topics.length)}
        </p>
        <h1 className="mt-2 font-mono text-3xl font-medium tracking-tight text-balance sm:text-4xl">{topic.title}</h1>
        {studyingNow.includes(topic.slug) && (
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-pink/40 bg-pink/10 px-2.5 py-0.5 font-mono text-xs text-pink">
            <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-pink" />
            {d.studying}
          </p>
        )}
        <p className="mt-3 max-w-2xl text-lg text-pretty text-muted">{topic.summary}</p>
        <div className="mt-6">
          <DoneToggle slug={topic.slug} lang={lang} />
        </div>
      </header>

      <div className="mt-10 space-y-12">
        {(topic.groups || topic.choose) && (
          <section>
            <SectionTitle>{d.whatToStudy}</SectionTitle>
            <div className="space-y-6">
              {topic.choose && (
                <div className={`rounded-xl border p-4 ${t.border} ${t.soft}`}>
                  <p className="mb-3 text-sm font-medium">{topic.choose.label}:</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.choose.options.map((o) => (
                      <Chip key={o}>{o}</Chip>
                    ))}
                  </div>
                </div>
              )}
              {topic.groups?.map((group, gi) => (
                <div key={gi}>
                  {group.title && <h3 className="mb-2 text-sm font-semibold text-muted">{group.title}</h3>}
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {group.subtopics.map((s) => (
                      <li
                        key={s.title}
                        className={`rounded-lg border px-3.5 py-2.5 ${
                          s.optional ? "border-dashed border-border text-muted" : "border-border bg-surface"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span aria-hidden className={`size-1.5 shrink-0 rounded-full ${s.optional ? "bg-subtle" : t.bar}`} />
                          <span className="font-medium">{s.title}</span>
                          {s.optional && <span className="ml-auto text-xs text-subtle">{d.optional}</span>}
                        </span>
                        {s.items && <span className="mt-1 block pl-3.5 text-sm text-muted">{s.items.join(" · ")}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {topic.examples && (
          <section>
            <SectionTitle>{d.examples}</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              {topic.examples.map((ex) => (
                <div key={ex.title} className="rounded-xl border border-border bg-surface p-4">
                  <h3 className="mb-3 font-medium">{ex.title}</h3>
                  <ul className="space-y-2">
                    {ex.items.map((item) => (
                      <li key={item} className="rounded-md bg-yellow-100 px-3 py-2 text-sm text-stone-800 dark:bg-yellow-900/30 dark:text-yellow-100">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {hasVisuals && (
          <section>
            <SectionTitle>{d.visuals}</SectionTitle>
            <div className="space-y-6">
              {topic.diagrams?.map((diagram) => (
                <DiagramView key={diagram} id={diagram} lang={lang} />
              ))}
              {topic.figures?.map((f) => (
                <FigureBlock key={f.image} figure={f} lang={lang} />
              ))}
            </div>
          </section>
        )}

        {topic.courses && (
          <section>
            <SectionTitle count={topic.courses.length}>{d.courses}</SectionTitle>
            <ul className="-mx-3 space-y-1">
              {topic.courses.map((l) => (
                <LinkRow key={l.url} link={l} />
              ))}
            </ul>
          </section>
        )}

        {topic.articles && (
          <section>
            <SectionTitle count={topic.articles.length}>{d.articles}</SectionTitle>
            <ul className="-mx-3 space-y-1">
              {topic.articles.map((l) => (
                <LinkRow key={l.url} link={l} />
              ))}
            </ul>
          </section>
        )}

        {topic.videos && (
          <section>
            <SectionTitle count={topic.videos.length}>{d.videos}</SectionTitle>
            <div className="grid gap-6 sm:grid-cols-2">
              {topic.videos.map((v) => (
                <YouTube key={v.youtubeId} video={v} lang={lang} />
              ))}
            </div>
          </section>
        )}

        {books.length > 0 && (
          <section>
            <SectionTitle count={books.length}>{d.books}</SectionTitle>
            <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {books.map((b) => (
                <BookCard key={b.id} book={b} lang={lang} />
              ))}
            </ul>
          </section>
        )}
      </div>

      <nav aria-label={d.between} className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
        {prev ? (
          <Link href={topicHref(lang, prev.slug)} className="rounded-xl border border-border p-4 transition-colors hover:bg-surface">
            <span className="text-xs text-muted">{d.prev}</span>
            <span className="mt-1 block font-medium">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={topicHref(lang, next.slug)} className="rounded-xl border border-border p-4 text-right transition-colors hover:bg-surface">
            <span className="text-xs text-muted">
              {next.phase.slug !== phase.slug ? d.nextPhase(next.phase.title) : d.next}
            </span>
            <span className="mt-1 block font-medium">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
