import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiagramView } from "@/components/diagrams";
import { DoneToggle } from "@/components/progress";
import { BookCard, Chip, FigureBlock, LinkRow, SectionTitle } from "@/components/ui";
import { YouTube } from "@/components/youtube";
import { bookById } from "@/data/library";
import { allTopics, findTopic } from "@/data/roadmap";
import { phaseTheme } from "@/lib/theme";

export function generateStaticParams() {
  return allTopics.map((t) => ({ slug: t.slug }));
}

// Não usar `dynamicParams = false`: no Cloudflare (OpenNext) sem incremental cache,
// o prerender não é encontrado e todas as páginas de tópico dão 404.
// Slugs inexistentes continuam em 404 pelo notFound() abaixo.

export async function generateMetadata(props: PageProps<"/topicos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const found = findTopic(slug);
  if (!found) return {};
  return { title: found.topic.title, description: found.topic.summary };
}

export default async function TopicPage(props: PageProps<"/topicos/[slug]">) {
  const { slug } = await props.params;
  const found = findTopic(slug);
  if (!found) notFound();

  const { topic, prev, next } = found;
  const { phase } = topic;
  const t = phaseTheme[phase.color];
  const position = phase.topics.findIndex((x) => x.slug === topic.slug) + 1;
  const books = (topic.books ?? []).map((id) => bookById[id]).filter(Boolean);
  const hasVisuals = !!(topic.diagrams?.length || topic.figures?.length);

  return (
    <article className="mx-auto max-w-4xl px-4 pt-10 pb-16 sm:px-6">
      <nav aria-label="Trilha" className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-foreground">
          Roadmap
        </Link>
        <span className="mx-2 text-subtle">/</span>
        <Link href={`/#${phase.slug}`} className="hover:text-foreground">
          Etapa {phase.number}: {phase.title}
        </Link>
      </nav>

      <header className="border-b border-border pb-8">
        <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${t.text}`}>
          Tópico {position} de {phase.topics.length}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{topic.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-pretty text-muted">{topic.summary}</p>
        <div className="mt-6">
          <DoneToggle slug={topic.slug} />
        </div>
      </header>

      <div className="mt-10 space-y-12">
        {(topic.groups || topic.choose) && (
          <section>
            <SectionTitle>O que estudar</SectionTitle>
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
                          {s.optional && <span className="ml-auto text-xs text-subtle">opcional</span>}
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
            <SectionTitle>Exemplos</SectionTitle>
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
            <SectionTitle>Exemplos visuais</SectionTitle>
            <div className="space-y-6">
              {topic.diagrams?.map((d) => (
                <DiagramView key={d} id={d} />
              ))}
              {topic.figures?.map((f) => (
                <FigureBlock key={f.image} figure={f} />
              ))}
            </div>
          </section>
        )}

        {topic.courses && (
          <section>
            <SectionTitle count={topic.courses.length}>Cursos e aulas</SectionTitle>
            <ul className="-mx-3 space-y-1">
              {topic.courses.map((l) => (
                <LinkRow key={l.url} link={l} />
              ))}
            </ul>
          </section>
        )}

        {topic.articles && (
          <section>
            <SectionTitle count={topic.articles.length}>Artigos</SectionTitle>
            <ul className="-mx-3 space-y-1">
              {topic.articles.map((l) => (
                <LinkRow key={l.url} link={l} />
              ))}
            </ul>
          </section>
        )}

        {topic.videos && (
          <section>
            <SectionTitle count={topic.videos.length}>Vídeos</SectionTitle>
            <div className="grid gap-6 sm:grid-cols-2">
              {topic.videos.map((v) => (
                <YouTube key={v.youtubeId} video={v} />
              ))}
            </div>
          </section>
        )}

        {books.length > 0 && (
          <section>
            <SectionTitle count={books.length}>Livros</SectionTitle>
            <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {books.map((b) => (
                <BookCard key={b.id} book={b} />
              ))}
            </ul>
          </section>
        )}
      </div>

      <nav aria-label="Navegação entre tópicos" className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
        {prev ? (
          <Link href={`/topicos/${prev.slug}`} className="rounded-xl border border-border p-4 transition-colors hover:bg-surface">
            <span className="text-xs text-muted">← Anterior</span>
            <span className="mt-1 block font-medium">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/topicos/${next.slug}`} className="rounded-xl border border-border p-4 text-right transition-colors hover:bg-surface">
            <span className="text-xs text-muted">
              {next.phase.slug !== phase.slug ? `Próxima etapa: ${next.phase.title} →` : "Próximo →"}
            </span>
            <span className="mt-1 block font-medium">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
