import Image from "next/image";
import { images } from "@/data/images";
import type { Book, Figure, Link as LinkType } from "@/data/types";
import { sourceOf } from "@/lib/theme";

export function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6 sm:pt-16">
      {eyebrow && <p className="mb-2 text-sm font-medium text-muted">{eyebrow}</p>}
      <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h1>
      {children && <div className="mt-3 max-w-2xl text-lg text-pretty text-muted">{children}</div>}
    </header>
  );
}

export function SectionTitle({ children, count }: { children: React.ReactNode; count?: number }) {
  return (
    <h2 className="mb-4 flex items-baseline gap-2 text-xl font-semibold tracking-tight">
      {children}
      {count !== undefined && <span className="text-sm font-normal text-subtle">{count}</span>}
    </h2>
  );
}

export function LangTag({ lang }: { lang?: "pt" | "en" }) {
  if (!lang) return null;
  return (
    <span className="rounded border border-border px-1.5 py-px font-mono text-[10px] uppercase tracking-wide text-muted">
      {lang === "pt" ? "PT" : "EN"}
    </span>
  );
}

export function LinkRow({ link, context }: { link: LinkType; context?: string }) {
  return (
    <li>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-colors hover:border-border hover:bg-surface"
      >
        <ExternalIcon className="mt-1 size-3.5 shrink-0 text-subtle group-hover:text-foreground" />
        <span className="min-w-0 flex-1">
          <span className="block font-medium text-pretty group-hover:underline group-hover:underline-offset-4">{link.title}</span>
          <span className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-muted">
            {link.source ?? sourceOf(link.url)}
            <LangTag lang={link.lang} />
            {context && <span className="text-subtle">· {context}</span>}
          </span>
        </span>
      </a>
    </li>
  );
}

export function FigureBlock({ figure }: { figure: Figure }) {
  const img = images[figure.image];
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-white">
      <a href={img.src} target="_blank" rel="noopener noreferrer" title="Abrir imagem em tamanho real">
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt={figure.alt}
          unoptimized={img.src.endsWith(".gif")}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 720px, 100vw"
        />
      </a>
      {(figure.caption || figure.credit) && (
        <figcaption className="border-t border-border bg-surface px-4 py-2.5 text-sm text-muted">
          {figure.caption}
          {figure.credit && <span className="text-subtle"> Fonte: {figure.credit}.</span>}
        </figcaption>
      )}
    </figure>
  );
}

export function BookCard({ book }: { book: Book }) {
  const img = images[book.cover];
  return (
    <li className="group">
      <a
        href={`https://www.google.com/search?tbm=bks&q=${encodeURIComponent(`${book.title} ${book.author}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="overflow-hidden rounded-md border border-border bg-surface shadow-sm transition group-hover:-translate-y-0.5 group-hover:shadow-md">
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt={`Capa do livro ${book.title}`}
            className="aspect-[2/3] h-auto w-full object-cover"
            sizes="(min-width: 1024px) 180px, 40vw"
          />
        </div>
        <p className="mt-2 text-sm font-medium leading-snug text-pretty">{book.title}</p>
        <p className="text-xs text-muted">{book.author}</p>
      </a>
    </li>
  );
}

export function Chip({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm ${
        muted ? "border-dashed border-border text-subtle" : "border-border bg-surface"
      }`}
    >
      {children}
    </span>
  );
}

export function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M6 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V10M9 2h5v5M14 2 7 9" />
    </svg>
  );
}
