import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DoneDot, PhaseProgress } from "@/components/progress";
import { images } from "@/data/images";
import { certifications } from "@/data/library";
import { studyingNow } from "@/data/profile";
import type { Phase, Topic } from "@/data/types";
import { alternates, href, type Locale, routes, topicHref } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/ui";
import { phaseTheme } from "@/lib/theme";

export function roadmapMetadata(lang: Locale): Metadata {
  const d = getDictionary(lang).roadmap;
  return { title: d.metaTitle, description: d.metaDescription, alternates: alternates(lang, routes.roadmap) };
}

function countSubtopics(topic: Topic) {
  return (topic.groups ?? []).reduce((n, g) => n + g.subtopics.length, 0) + (topic.choose ? 1 : 0);
}

function countResources(topic: Topic) {
  return (topic.articles?.length ?? 0) + (topic.courses?.length ?? 0) + (topic.videos?.length ?? 0) + (topic.books?.length ?? 0);
}

export function RoadmapView({ lang }: { lang: Locale }) {
  const d = getDictionary(lang).roadmap;
  const { phases, allTopics } = getContent(lang);
  const totalLinks = allTopics.reduce((n, t) => n + countResources(t), 0);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20">
        <p className="mb-3 font-mono text-sm text-blue">&lt;Roadmap /&gt;</p>
        <h1 className="glow max-w-3xl font-mono text-3xl font-medium tracking-tight text-balance sm:text-5xl">{d.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-muted">
          {d.intro1} <span className="font-medium text-pink">{d.studyingBadge}</span> {d.intro1b}
        </p>
        <p className="mt-3 max-w-2xl text-pretty text-muted">{d.intro2}</p>

        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {[
            [phases.length, d.statPhases],
            [allTopics.length, d.statTopics],
            [totalLinks, d.statLinks],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tabular-nums">{value}</span>
                <span className="text-sm text-muted">{label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <nav aria-label={d.phasesLabel} className="mt-10 grid gap-3 sm:grid-cols-3">
          {phases.map((phase) => {
            const t = phaseTheme[phase.color];
            return (
              <a
                key={phase.slug}
                href={`#${phase.slug}`}
                className={`rounded-xl border p-4 transition-colors hover:bg-surface ${t.border}`}
              >
                <span className={`font-mono text-xs font-semibold uppercase tracking-wider ${t.text}`}>
                  {d.phase} {phase.number}
                </span>
                <span className="mt-1 block font-semibold">{phase.title}</span>
                <span className="mt-1 block text-sm text-muted">{phase.tagline}</span>
              </a>
            );
          })}
        </nav>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Milestone emoji="🏁" title={d.startTitle} text={d.startText} />

        {phases.map((phase, i) => (
          <PhaseSection key={phase.slug} lang={lang} phase={phase} isLast={i === phases.length - 1} />
        ))}

        <Finish lang={lang} />
      </div>
    </>
  );
}

function StudyingBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-pink/40 bg-pink/10 px-2 py-px font-mono text-[11px] text-pink">
      <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-pink" />
      {label}
    </span>
  );
}

function Milestone({ emoji, title, text }: { emoji: string; title: string; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-full border border-border bg-surface text-2xl">
        {emoji}
      </span>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted">{text}</p>
      </div>
    </div>
  );
}

function PhaseSection({ lang, phase, isLast }: { lang: Locale; phase: Phase; isLast: boolean }) {
  const d = getDictionary(lang).roadmap;
  const t = phaseTheme[phase.color];
  return (
    <section id={phase.slug} className="scroll-mt-20 pt-12">
      <div className={`rounded-2xl border p-5 sm:p-6 ${t.border} ${t.soft}`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${t.text}`}>
              {d.phase} {phase.number}
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">{phase.title}</h2>
            <p className="mt-2 text-pretty text-muted">{phase.description}</p>
          </div>
          <PhaseProgress slugs={phase.topics.map((topic) => topic.slug)} barClass={t.bar} lang={lang} />
        </div>
      </div>

      <ol className="relative mt-6 ml-4 sm:ml-6">
        <span aria-hidden className={`absolute top-0 bottom-0 left-4 w-0.5 -translate-x-1/2 ${t.line}`} />
        {phase.topics.map((topic, i) => (
          <li key={topic.slug} className="relative pb-3 last:pb-0">
            <Link
              href={topicHref(lang, topic.slug)}
              className="group flex items-start gap-4 rounded-xl py-2 pr-3 transition-colors hover:bg-surface"
            >
              <DoneDot slug={topic.slug} number={i + 1} lang={lang} />
              <span className="min-w-0 flex-1 pt-1">
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium group-hover:underline group-hover:underline-offset-4">{topic.title}</span>
                  {studyingNow.includes(topic.slug) && <StudyingBadge label={d.studyingBadge} />}
                </span>
                <span className="mt-0.5 line-clamp-2 block text-sm text-muted text-pretty">{topic.summary}</span>
                <span className="mt-1.5 flex flex-wrap gap-x-3 text-xs text-subtle">
                  {countSubtopics(topic) > 0 && <span>
                      {countSubtopics(topic)} {d.subtopics}
                    </span>}
                  {countResources(topic) > 0 && <span>
                      {countResources(topic)} {d.contents}
                    </span>}
                  {!!(topic.figures?.length || topic.diagrams?.length) && <span>{d.withVisuals}</span>}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {!isLast && (
        <p className="mt-6 ml-4 flex items-center gap-2 text-sm text-muted sm:ml-6">
          <span aria-hidden>↓</span> {d.next}
        </p>
      )}
    </section>
  );
}

function Finish({ lang }: { lang: Locale }) {
  const d = getDictionary(lang).roadmap;
  const bytebytego = getContent(lang).courses.find((c) => c.source === "ByteByteGo");
  return (
    <section className="mt-14 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <Milestone emoji="🏆" title={d.finishTitle} text={d.finishText} />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="font-semibold">{d.certs}</h3>
          <ul className="mt-4 grid grid-cols-3 gap-3">
            {certifications.map((c) => {
              const img = images[c.badge];
              return (
                <li key={c.url}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="group block text-center">
                    <Image src={img.src} width={img.width} height={img.height} alt="" className="mx-auto h-auto w-full max-w-28 transition group-hover:scale-105" />
                    <span className="mt-2 block text-xs text-muted group-hover:text-foreground">{c.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">{d.keepGoing}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {bytebytego && (
              <li>
                <a href={bytebytego.url} target="_blank" rel="noopener noreferrer" className="font-medium underline-offset-4 hover:underline">
                  {bytebytego.title}
                </a>
                <p className="text-muted">{bytebytego.description}</p>
              </li>
            )}
            <li>
              <Link href={href(lang, "books")} className="font-medium underline-offset-4 hover:underline">
                {d.sdiTitle}
              </Link>
              <p className="text-muted">{d.sdiText}</p>
            </li>
            <li>
              <Link href={href(lang, "references")} className="font-medium underline-offset-4 hover:underline">
                {d.blogsTitle}
              </Link>
              <p className="text-muted">{d.blogsText}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
