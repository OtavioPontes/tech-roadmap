import Image from "next/image";
import Link from "next/link";
import { DoneDot, PhaseProgress } from "@/components/progress";
import { images } from "@/data/images";
import { certifications, courses } from "@/data/library";
import { allTopics, phases } from "@/data/roadmap";
import type { Phase, Topic } from "@/data/types";
import { phaseTheme } from "@/lib/theme";

function countSubtopics(topic: Topic) {
  return (topic.groups ?? []).reduce((n, g) => n + g.subtopics.length, 0) + (topic.choose ? 1 : 0);
}

function countResources(topic: Topic) {
  return (topic.articles?.length ?? 0) + (topic.courses?.length ?? 0) + (topic.videos?.length ?? 0) + (topic.books?.length ?? 0);
}

export default function Home() {
  const totalLinks = allTopics.reduce((n, t) => n + countResources(t), 0);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20">
        <p className="mb-3 text-sm font-medium text-muted">Roadmap de carreira</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Software Engineer: dos fundamentos à arquitetura
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-muted">
          Um caminho em três etapas, com os tópicos na ordem em que fazem sentido — e, para cada um, os cursos, artigos, vídeos e livros
          que eu indico. Marque o que já estudou para acompanhar seu progresso.
        </p>

        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {[
            [phases.length, "etapas"],
            [allTopics.length, "tópicos"],
            [totalLinks, "conteúdos indicados"],
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

        <nav aria-label="Etapas" className="mt-10 grid gap-3 sm:grid-cols-3">
          {phases.map((phase) => {
            const t = phaseTheme[phase.color];
            return (
              <a
                key={phase.slug}
                href={`#${phase.slug}`}
                className={`rounded-xl border p-4 transition-colors hover:bg-surface ${t.border}`}
              >
                <span className={`font-mono text-xs font-semibold uppercase tracking-wider ${t.text}`}>Etapa {phase.number}</span>
                <span className="mt-1 block font-semibold">{phase.title}</span>
                <span className="mt-1 block text-sm text-muted">{phase.tagline}</span>
              </a>
            );
          })}
        </nav>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Milestone emoji="🏁" title="Largada" text="Comece por aqui. Não pule os fundamentos — tudo depois se apoia neles." />

        {phases.map((phase, i) => (
          <PhaseSection key={phase.slug} phase={phase} isLast={i === phases.length - 1} />
        ))}

        <Finish />
      </div>
    </>
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

function PhaseSection({ phase, isLast }: { phase: Phase; isLast: boolean }) {
  const t = phaseTheme[phase.color];
  return (
    <section id={phase.slug} className="scroll-mt-20 pt-12">
      <div className={`rounded-2xl border p-5 sm:p-6 ${t.border} ${t.soft}`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${t.text}`}>Etapa {phase.number}</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">{phase.title}</h2>
            <p className="mt-2 text-pretty text-muted">{phase.description}</p>
          </div>
          <PhaseProgress slugs={phase.topics.map((topic) => topic.slug)} barClass={t.bar} />
        </div>
      </div>

      <ol className="relative mt-6 ml-4 sm:ml-6">
        <span aria-hidden className={`absolute top-0 bottom-0 left-4 w-0.5 -translate-x-1/2 ${t.line}`} />
        {phase.topics.map((topic, i) => (
          <li key={topic.slug} className="relative pb-3 last:pb-0">
            <Link
              href={`/topicos/${topic.slug}`}
              className="group flex items-start gap-4 rounded-xl py-2 pr-3 transition-colors hover:bg-surface"
            >
              <DoneDot slug={topic.slug} number={i + 1} />
              <span className="min-w-0 flex-1 pt-1">
                <span className="block font-medium group-hover:underline group-hover:underline-offset-4">{topic.title}</span>
                <span className="mt-0.5 line-clamp-2 block text-sm text-muted text-pretty">{topic.summary}</span>
                <span className="mt-1.5 flex flex-wrap gap-x-3 text-xs text-subtle">
                  {countSubtopics(topic) > 0 && <span>{countSubtopics(topic)} subtópicos</span>}
                  {countResources(topic) > 0 && <span>{countResources(topic)} conteúdos</span>}
                  {!!(topic.figures?.length || topic.diagrams?.length) && <span>com exemplos visuais</span>}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {!isLast && (
        <p className="mt-6 ml-4 flex items-center gap-2 text-sm text-muted sm:ml-6">
          <span aria-hidden>↓</span> Transição para a próxima etapa
        </p>
      )}
    </section>
  );
}

function Finish() {
  const bytebytego = courses.find((c) => c.source === "ByteByteGo");
  return (
    <section className="mt-14 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <Milestone emoji="🏆" title="Parabéns!" text="Chegou até aqui? Hora de validar o conhecimento e continuar se aprofundando." />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="font-semibold">Certificações recomendadas</h3>
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
          <h3 className="font-semibold">Para continuar em System Design</h3>
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
              <Link href="/livros" className="font-medium underline-offset-4 hover:underline">
                System Design Interview, Vol. 1 e 2 — Alex Xu
              </Link>
              <p className="text-muted">Os dois livros mais usados para estudar entrevistas de System Design.</p>
            </li>
            <li>
              <Link href="/referencias" className="font-medium underline-offset-4 hover:underline">
                Blogs de engenharia e newsletters
              </Link>
              <p className="text-muted">Como Netflix, Uber, Stripe, Meta e outras resolvem problemas reais em escala.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
