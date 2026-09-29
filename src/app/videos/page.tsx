import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { YouTube } from "@/components/youtube";
import { allTopics } from "@/data/roadmap";

export const metadata: Metadata = {
  title: "Catálogo de vídeos",
  description: "Vídeos sobre SOLID, Object Calisthenics, Design Patterns, arquitetura e System Design.",
};

export default function VideosPage() {
  const topics = allTopics.filter((t) => t.videos?.length);
  const total = topics.reduce((n, t) => n + t.videos!.length, 0);

  return (
    <>
      <PageHeader eyebrow="Biblioteca" title="Catálogo de vídeos">
        {total} vídeos organizados por tópico do roadmap.
      </PageHeader>
      <div className="mx-auto max-w-6xl space-y-12 px-4 pb-16 sm:px-6">
        {topics.map((topic) => (
          <section key={topic.slug}>
            <h2 className="mb-4 text-xl font-semibold tracking-tight">
              <Link href={`/topicos/${topic.slug}`} className="underline-offset-4 hover:underline">
                {topic.title}
              </Link>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {topic.videos!.map((v) => (
                <YouTube key={v.youtubeId} video={v} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
