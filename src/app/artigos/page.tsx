import type { Metadata } from "next";
import { ArticleSearch, type ArticleEntry } from "@/components/article-search";
import { PageHeader } from "@/components/ui";
import { allTopics, phases } from "@/data/roadmap";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Artigos que vão te ajudar em cada tópico do roadmap de Software Engineer.",
};

export default function ArtigosPage() {
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
      <PageHeader eyebrow="Biblioteca" title="Artigos que irão te ajudar">
        {entries.length} leituras organizadas por tópico. Filtre por etapa, idioma ou busque pelo assunto.
      </PageHeader>
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <ArticleSearch entries={entries} phases={phases.map((p) => ({ slug: p.slug, title: p.title, number: p.number }))} />
      </div>
    </>
  );
}
