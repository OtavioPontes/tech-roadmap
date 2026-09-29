import type { Metadata } from "next";
import { BookCard, PageHeader, SectionTitle } from "@/components/ui";
import { books } from "@/data/library";

export const metadata: Metadata = {
  title: "Livros que eu indico",
  description: "Livros técnicos e de carreira recomendados para Software Engineers.",
};

export default function LivrosPage() {
  const tecnicos = books.filter((b) => b.category === "tecnico");
  const carreira = books.filter((b) => b.category === "carreira");

  return (
    <>
      <PageHeader eyebrow="Biblioteca" title="Livros que eu indico">
        Os clássicos de código, design e arquitetura — e alguns livros de carreira e desenvolvimento pessoal que valem a leitura.
      </PageHeader>
      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-16 sm:px-6">
        <section>
          <SectionTitle count={tecnicos.length}>Técnicos</SectionTitle>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
            {tecnicos.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </ul>
        </section>
        <section>
          <SectionTitle count={carreira.length}>Carreira e desenvolvimento pessoal</SectionTitle>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
            {carreira.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
