import type { ImageKey } from "./images";

export type Link = {
  title: string;
  url: string;
  /** Nome curto da fonte (MDN, AWS, GeeksforGeeks...). Se omitido, é derivado do domínio. */
  source?: string;
  /** Idioma do conteúdo, para exibir uma etiqueta. */
  lang?: "pt" | "en";
};

export type Video = {
  youtubeId: string;
  title: string;
  channel: string;
};

export type Figure = {
  image: ImageKey;
  alt: string;
  caption?: string;
  /** Crédito da imagem (autor/fonte original). */
  credit?: string;
};

export type Subtopic = {
  title: string;
  /** Tópicos opcionais / "bom saber" aparecem com estilo atenuado. */
  optional?: boolean;
  /** Filhos diretos, ex.: os 5 princípios dentro de SOLID. */
  items?: string[];
};

export type SubtopicGroup = {
  title?: string;
  subtopics: Subtopic[];
};

export type Diagram = "no-cache-vs-cache-aside" | "sync-vs-async" | "n-plus-one" | "test-pyramid";

export type Topic = {
  slug: string;
  title: string;
  summary: string;
  groups?: SubtopicGroup[];
  /** "Escolha um(a)..." — lista de opções equivalentes, ex.: linguagens ou frameworks. */
  choose?: { label: string; options: string[] };
  /** Exemplos práticos (ex.: requisitos funcionais x não funcionais). */
  examples?: { title: string; items: string[] }[];
  diagrams?: Diagram[];
  figures?: Figure[];
  articles?: Link[];
  courses?: Link[];
  videos?: Video[];
  /** ids de livros em library.ts */
  books?: string[];
};

export type Phase = {
  slug: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  color: "violet" | "teal" | "amber";
  topics: Topic[];
};

export type Book = {
  id: string;
  title: string;
  author: string;
  cover: ImageKey;
  category: "tecnico" | "carreira";
};

export type Person = {
  name: string;
  known: string;
  url?: string;
};
