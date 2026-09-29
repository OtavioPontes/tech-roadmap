import type { Metadata } from "next";
import { ExternalIcon, LangTag, PageHeader } from "@/components/ui";
import { courses } from "@/data/library";

export const metadata: Metadata = {
  title: "Cursos e treinamentos",
  description: "Treinamentos completos que eu indico para quem está construindo a base como Software Engineer.",
};

export default function CursosPage() {
  return (
    <>
      <PageHeader eyebrow="Biblioteca" title="Treinamentos completos que eu indico">
        Cursos estruturados, do início ao fim. A maioria é gratuita — os CS50 de Harvard são a melhor porta de entrada para os fundamentos.
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
                      c.free
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                        : "bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300"
                    }`}
                  >
                    {c.free ? "Gratuito" : "Pago / parcial"}
                  </span>
                </span>
                <span className="mt-3 font-semibold text-pretty group-hover:underline group-hover:underline-offset-4">{c.title}</span>
                <span className="mt-2 flex-1 text-sm text-pretty text-muted">{c.description}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                  Acessar curso <ExternalIcon className="size-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
