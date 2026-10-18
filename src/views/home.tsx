import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/avatar.png";
import { SocialLinks } from "@/components/social";
import { bio, courses, education, experience, formatMonth, languages, profile, projects, stacks, studyingNow } from "@/data/profile";
import { alternates, href, type Locale, routes, topicHref } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/ui";
import { phaseTheme } from "@/lib/theme";

const accent = {
  pink: { text: "text-pink", border: "hover:border-pink/50", dot: "bg-pink" },
  blue: { text: "text-blue", border: "hover:border-blue/50", dot: "bg-blue" },
  purple: { text: "text-purple-soft", border: "hover:border-purple/60", dot: "bg-purple-soft" },
};

export function homeMetadata(lang: Locale): Metadata {
  return { alternates: alternates(lang, routes.home) };
}

export function HomeView({ lang }: { lang: Locale }) {
  const d = getDictionary(lang).home;
  const { phases, allTopics } = getContent(lang);
  const focus = studyingNow.map((slug) => allTopics.find((t) => t.slug === slug)).filter((t) => t !== undefined);

  return (
    <>
      <Hero lang={lang} />

      <div className="mx-auto max-w-6xl space-y-24 px-4 py-20 sm:px-6">
        {/* Ênfase: o roadmap é o que eu uso para estudar */}
        <section id="agora" aria-labelledby="agora-title" className="scroll-mt-20">
          <SectionHeading eyebrow={d.nowEyebrow} id="agora-title">
            {d.nowTitle}
          </SectionHeading>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-muted">{d.nowText}</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
            <div className="rounded-2xl border border-pink/30 bg-pink/5 p-5 sm:p-6">
              <p className="flex items-center gap-2 font-mono text-sm text-pink">
                <span aria-hidden className="size-2 animate-pulse rounded-full bg-pink" />
                {d.studyingNow}
              </p>
              <ul className="mt-4 space-y-2">
                {focus.map((topic) => {
                  const t = phaseTheme[topic.phase.color];
                  return (
                    <li key={topic.slug}>
                      <Link
                        href={topicHref(lang, topic.slug)}
                        className="group block rounded-xl border border-transparent p-3 transition-colors hover:border-border hover:bg-surface"
                      >
                        <span className={`font-mono text-xs ${t.text}`}>
                          {d.phase} {topic.phase.number} · {topic.phase.title}
                        </span>
                        <span className="mt-0.5 block font-medium group-hover:underline group-hover:underline-offset-4">{topic.title}</span>
                        <span className="mt-0.5 line-clamp-2 block text-sm text-pretty text-muted">{topic.summary}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              {phases.map((phase) => {
                const t = phaseTheme[phase.color];
                return (
                  <Link
                    key={phase.slug}
                    href={`${href(lang, "roadmap")}#${phase.slug}`}
                    className={`group rounded-xl border p-4 transition-colors hover:bg-surface ${t.border}`}
                  >
                    <span className="flex items-baseline justify-between gap-3">
                      <span className={`font-mono text-xs uppercase tracking-wider ${t.text}`}>
                        {d.phase} {phase.number}
                      </span>
                      <span className="text-xs text-subtle">
                        {phase.topics.length} {d.topics}
                      </span>
                    </span>
                    <span className="mt-1 block font-semibold">{phase.title}</span>
                    <span className="mt-0.5 block text-sm text-muted">{phase.tagline}</span>
                  </Link>
                );
              })}
              <Link
                href={href(lang, "roadmap")}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-pink px-4 py-3 font-mono text-sm font-medium text-background transition hover:brightness-110"
              >
                {d.openRoadmap} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="experiencia-title">
          <SectionHeading eyebrow={d.experienceEyebrow} id="experiencia-title">
            {d.experienceTitle}
          </SectionHeading>
          <ol className="relative mt-10 ml-1.5 space-y-12 border-l border-border pl-8">
            {experience.map((job) => {
              const current = !job.end;
              return (
                <li key={job.company} className="relative">
                  <span
                    aria-hidden
                    className={`absolute top-2 -left-[2.4rem] size-3 rounded-full ring-4 ring-background ${current ? "bg-blue" : "bg-border"}`}
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-mono text-lg">
                      {job.role[lang]} <span className="text-muted">@</span> <span className="text-blue">{job.company}</span>
                    </h3>
                    <p className="font-mono text-sm text-subtle">
                      {formatMonth(lang, job.start)} — {job.end ? formatMonth(lang, job.end) : <span className="text-pink">{d.present}</span>}
                    </p>
                  </div>
                  <p className="mt-0.5 text-sm text-subtle">{job.location[lang]}</p>
                  <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 text-pretty text-muted marker:text-subtle">
                    {job.highlights[lang].map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {job.stack.map((s) => (
                      <li key={s} className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted">
                        {s}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </section>

        <section aria-labelledby="stack-title">
          <SectionHeading eyebrow={d.stackEyebrow} id="stack-title">
            {d.stackTitle}
          </SectionHeading>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stacks.map((stack) => {
              const a = accent[stack.accent];
              return (
                <div key={stack.title} className={`rounded-2xl border border-border bg-surface/50 p-5 transition-colors ${a.border}`}>
                  <p className="font-mono text-xl">
                    Stack <span className={a.text}>{stack.title}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">{stack.phrase[lang]}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <li key={item} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-sm">
                        <span aria-hidden className={`size-1.5 rounded-full ${a.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="projetos-title">
          <SectionHeading eyebrow={d.projectsEyebrow} id="projetos-title">
            {d.projectsTitle}
          </SectionHeading>
          <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {projects.map((project) => {
              const card = (
                <>
                  <div className="relative aspect-9/19 overflow-hidden rounded-[20px] bg-[linear-gradient(160deg,rgba(97,0,255,0.18),rgba(248,99,171,0.12))] shadow-[0_14px_40px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(255,255,255,0.06)] transition-[box-shadow] duration-300 group-hover:shadow-[0_20px_55px_rgba(248,99,171,0.3),inset_0_0_0_1px_rgba(248,99,171,0.35)]">
                    <Image
                      src={project.image}
                      alt={`${d.projectAlt} ${project.title}`}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 30vw, 45vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 font-mono transition-colors group-hover:text-pink">{project.title}</p>
                  <p className="text-xs text-subtle">{project.stack.join(" · ")}</p>
                </>
              );
              return (
                <li key={project.title} className="group text-center transition-transform duration-300 hover:-translate-y-2">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="contato-title" className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface/50 p-6">
            <p className="font-mono text-sm text-blue">{d.education}</p>
            {education.map((e) => (
              <div key={e.school.pt} className="mt-3">
                <p className="font-semibold">{e.degree[lang]}</p>
                <p className="text-muted">{e.school[lang]}</p>
                <p className="font-mono text-xs text-subtle">{e.period}</p>
              </div>
            ))}
            <p className="mt-5 text-sm font-medium">{d.courses}</p>
            <ul className="mt-2 space-y-2 text-sm">
              {courses.map((c) => (
                <li key={c.title.pt}>
                  <span className="block text-pretty">{c.title[lang]}</span>
                  <span className="text-xs text-subtle">
                    {c.school}
                    {c.detail && ` · ${c.detail[lang]}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface/50 p-6">
            <p className="font-mono text-sm text-pink">{d.languages}</p>
            <ul className="mt-3 space-y-3">
              {languages.map((l) => (
                <li key={l.native} className="flex items-baseline justify-between gap-3">
                  <span>
                    <span className="font-semibold">{l.name[lang]}</span>
                    {l.native !== l.name[lang] && (
                      <span lang={l.native === "日本語" ? "ja" : undefined} className="ml-2 font-mono text-xs text-subtle">
                        {l.native}
                      </span>
                    )}
                  </span>
                  <span className="text-sm text-muted">{l.level[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-purple/40 bg-purple/10 p-6">
            <h2 id="contato-title" className="font-mono text-sm text-purple-soft">
              {d.contact}
            </h2>
            <p className="mt-3 font-semibold">{d.contactTitle}</p>
            <a
              href={`mailto:${profile.email}`}
              className="glow mt-1 block font-mono text-sm tracking-wide break-all text-foreground underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
            <SocialLinks lang={lang} className="mt-5" />
          </div>
        </section>
      </div>
    </>
  );
}

function Hero({ lang }: { lang: Locale }) {
  const d = getDictionary(lang).home;
  return (
    <section className="relative overflow-hidden border-b border-border bg-site-gradient">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <p
        aria-hidden
        lang="ja"
        className="glow pointer-events-none absolute top-1/2 left-6 hidden -translate-y-1/2 font-mono text-lg tracking-[10px] text-foreground/80 [writing-mode:vertical-rl] xl:block"
      >
        ソフトウェア　エンジニア
      </p>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-[auto_1fr]">
        <Image
          src={avatar}
          alt={d.avatarAlt}
          width={180}
          height={180}
          priority
          className="mx-auto size-32 transition-[filter] duration-300 [image-rendering:pixelated] hover:drop-shadow-[0_5px_5px_var(--blue)] sm:size-44 md:mx-0"
        />

        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-muted">{d.hello}</p>
          <h1 className="glow mt-1 font-mono text-4xl font-medium tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="glow-blue mt-3 font-mono text-lg text-blue sm:text-2xl">&lt;{profile.role}/&gt;</p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted md:mx-0">
            {bio[lang].map((part, i) =>
              part.pink ? (
                <span key={i} className="text-pink">
                  {part.text}
                </span>
              ) : (
                part.text
              ),
            )}
          </p>
          <p className="mt-3 font-mono text-sm text-subtle">
            {profile.location[lang]} · <span className="text-blue">{experience[0].company}</span>
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="#agora"
              className="inline-flex items-center gap-2 rounded-xl bg-pink px-5 py-3 font-mono text-sm font-medium text-background transition hover:brightness-110"
            >
              {d.cta} <span aria-hidden>↓</span>
            </Link>
            <SocialLinks lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, id, children }: { eyebrow: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-sm text-blue">{eyebrow}</p>
      <h2 id={id} className="glow mt-2 font-mono text-2xl font-medium tracking-tight text-balance sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}
