import type { Metadata } from "next";
import { ExternalIcon, LinkRow, PageHeader, SectionTitle } from "@/components/ui";
import { blogs, newsletters, people } from "@/data/library";

export const metadata: Metadata = {
  title: "Referências",
  description: "Pessoas, blogs de engenharia e newsletters de System Design e arquitetura que eu recomendo acompanhar.",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter((p) => /^[A-Z]/.test(p))
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function ReferenciasPage() {
  return (
    <>
      <PageHeader eyebrow="Biblioteca" title="Conteúdos que eu recomendo">
        Quem acompanhar, quais blogs de engenharia ler e as newsletters de System Design que valem a assinatura.
      </PageHeader>
      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-16 sm:px-6">
        <section>
          <SectionTitle count={people.length}>Referências</SectionTitle>
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
            <SectionTitle count={blogs.length}>Blogs de System Design e arquitetura</SectionTitle>
            <ul className="-mx-3 space-y-1">
              {blogs.map((b) => (
                <LinkRow key={b.url} link={b} />
              ))}
            </ul>
          </section>
          <section>
            <SectionTitle count={newsletters.length}>Newsletters</SectionTitle>
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
