import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSearch, type ArticleEntry } from "@/components/article-search";
import { BookCard, ExternalIcon, LangTag, LinkRow, PageHeader, SectionTitle } from "@/components/ui";
import { YouTube } from "@/components/youtube";
import { blogs, newsletters } from "@/data/library";
import { alternates, type Locale, routes, topicHref } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/ui";

// ── Cursos ──────────────────────────────────────────────────

export function coursesMetadata(lang: Locale): Metadata {
  const d = getDictionary(lang).library;
  return { title: d.coursesMetaTitle, description: d.coursesMetaDescription, alternates: alternates(lang, routes.courses) };
}

export function CoursesView({ lang }: { lang: Locale }) {
  const d = getDictionary(lang).library;
  const { courses } = getContent(lang);
  return (
    <>
      <PageHeader eyebrow={d.eyebrow} title={d.coursesTitle}>
        {d.coursesIntro}
      </PageHeader>
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <li key={c.url}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex items-center gap-2 text-xs text-muted">
                  <span className="font-medium">{c.source}</span>
                  <LangTag lang={c.lang} />
                  <span
                    className={`ml-auto rounded-full px-2 py-0.5 font-medium ${
                      c.free ? "bg-emerald-950 text-emerald-300" : "bg-stone-800 text-stone-300"
                    }`}
                  >
                    {c.free ? d.free : d.paid}
                  </span>
                </span>
                <span className="mt-3 font-semibold text-pretty group-hover:underline group-hover:underline-offset-4">{c.title}</span>
                <span className="mt-2 flex-1 text-sm text-pretty text-muted">{c.description}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                  {d.access} <ExternalIcon className="size-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// ── Artigos ─────────────────────────────────────────────────

export function articlesMetadata(lang: Locale): Metadata {
  const d = getDictionary(lang).library;
  return { title: d.articlesMetaTitle, description: d.articlesMetaDescription, alternates: alternates(lang, routes.articles) };
}

export function ArticlesView({ lang }: { lang: Locale }) {
  const d = getDictionary(lang).library;
  const { allTopics, phases } = getContent(lang);
  const entries: ArticleEntry[] = allTopics.flatMap((topic) =>
    (topic.articles ?? []).map((a) => ({
      ...a,
      topicSlug: topic.slug,
      topicTitle: topic.title,
      phaseSlug: topic.phase.slug,
    })),
  );

  return (
    <>
      <PageHeader eyebrow={d.eyebrow} title={d.articlesTitle}>
        {d.articlesIntro(entries.length)}
      </PageHeader>
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <ArticleSearch lang={lang} entries={entries} phases={phases.map((p) => ({ slug: p.slug, title: p.title, number: p.number }))} />
      </div>
    </>
  );
}

// ── Vídeos ──────────────────────────────────────────────────

export function videosMetadata(lang: Locale): Metadata {
  const d = getDictionary(lang).library;
  return { title: d.videosMetaTitle, description: d.videosMetaDescription, alternates: alternates(lang, routes.videos) };
}

export function VideosView({ lang }: { lang: Locale }) {
  const d = getDictionary(lang).library;
  const topics = getContent(lang).allTopics.filter((t) => t.videos?.length);
  const total = topics.reduce((n, t) => n + t.videos!.length, 0);

  return (
    <>
      <PageHeader eyebrow={d.eyebrow} title={d.videosTitle}>
        {d.videosIntro(total)} {d.videosNote}
      </PageHeader>
      <div className="mx-auto max-w-6xl space-y-12 px-4 pb-16 sm:px-6">
        {topics.map((topic) => (
          <section key={topic.slug}>
            <h2 className="mb-4 text-xl font-semibold tracking-tight">
              <Link href={topicHref(lang, topic.slug)} className="underline-offset-4 hover:underline">
                {topic.title}
              </Link>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {topic.videos!.map((v) => (
                <YouTube key={v.youtubeId} video={v} lang={lang} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

// ── Livros ──────────────────────────────────────────────────

export function booksMetadata(lang: Locale): Metadata {
  const d = getDictionary(lang).library;
  return { title: d.booksMetaTitle, description: d.booksMetaDescription, alternates: alternates(lang, routes.books) };
}

export function BooksView({ lang }: { lang: Locale }) {
  const d = getDictionary(lang).library;
  const { books } = getContent(lang);
  const groups = [
    { title: d.technical, items: books.filter((b) => b.category === "tecnico") },
    { title: d.career, items: books.filter((b) => b.category === "carreira") },
  ];

  return (
    <>
      <PageHeader eyebrow={d.eyebrow} title={d.booksTitle}>
        {d.booksIntro}
      </PageHeader>
      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-16 sm:px-6">
        {groups.map((group) => (
          <section key={group.title}>
            <SectionTitle count={group.items.length}>{group.title}</SectionTitle>
            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
              {group.items.map((b) => (
                <BookCard key={b.id} book={b} lang={lang} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

// ── Referências ─────────────────────────────────────────────

export function referencesMetadata(lang: Locale): Metadata {
  const d = getDictionary(lang).library;
  return { title: d.refsMetaTitle, description: d.refsMetaDescription, alternates: alternates(lang, routes.references) };
}

function initials(name: string) {
  return name
    .split(" ")
    .filter((p) => /^[A-Z]/.test(p))
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function ReferencesView({ lang }: { lang: Locale }) {
  const d = getDictionary(lang).library;
  const { people } = getContent(lang);
  return (
    <>
      <PageHeader eyebrow={d.eyebrow} title={d.refsTitle}>
        {d.refsIntro}
      </PageHeader>
      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-16 sm:px-6">
        <section>
          <SectionTitle count={people.length}>{d.people}</SectionTitle>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((p) => {
              const content = (
                <>
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-foreground/5 font-semibold text-muted"
                  >
                    {initials(p.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5 font-medium">
                      {p.name}
                      {p.url && <ExternalIcon className="size-3 text-subtle" />}
                    </span>
                    <span className="block text-sm text-muted">{p.known}</span>
                  </span>
                </>
              );
              const cls = "flex items-center gap-3 rounded-xl border border-border bg-surface p-3";
              return (
                <li key={p.name}>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className={`${cls} transition-colors hover:border-foreground/30`}>
                      {content}
                    </a>
                  ) : (
                    <div className={cls}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <div className="grid gap-14 lg:grid-cols-2">
          <section>
            <SectionTitle count={blogs.length}>{d.blogs}</SectionTitle>
            <ul className="-mx-3 space-y-1">
              {blogs.map((b) => (
                <LinkRow key={b.url} link={b} />
              ))}
            </ul>
          </section>
          <section>
            <SectionTitle count={newsletters.length}>{d.newsletters}</SectionTitle>
            <ul className="-mx-3 space-y-1">
              {newsletters.map((n) => (
                <LinkRow key={n.url} link={{ ...n, source: n.author }} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
