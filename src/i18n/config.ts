export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

/** Código usado no <html lang>, Open Graph e hreflang. */
export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US" };

// Português fica na raiz (URLs antigas continuam valendo); inglês em /en com caminhos em inglês.
export const routes = {
  home: { pt: "/", en: "/en" },
  roadmap: { pt: "/roadmap", en: "/en/roadmap" },
  courses: { pt: "/cursos", en: "/en/courses" },
  articles: { pt: "/artigos", en: "/en/articles" },
  videos: { pt: "/videos", en: "/en/videos" },
  books: { pt: "/livros", en: "/en/books" },
  references: { pt: "/referencias", en: "/en/references" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

const topicBase: Record<Locale, string> = { pt: "/topicos", en: "/en/topics" };

export const href = (lang: Locale, key: RouteKey) => routes[key][lang];
export const topicHref = (lang: Locale, slug: string) => `${topicBase[lang]}/${slug}`;

/** hreflang/canonical de uma página que existe nos dois idiomas. */
export function alternates(lang: Locale, paths: Record<Locale, string>) {
  return {
    canonical: paths[lang],
    languages: { "pt-BR": paths.pt, en: paths.en, "x-default": paths.pt },
  };
}

/** Converte o pathname atual para o equivalente no outro idioma. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const path = pathname.replace(/\/$/, "") || "/";
  for (const lang of locales) {
    const topicPrefix = `${topicBase[lang]}/`;
    if (path.startsWith(topicPrefix)) return topicHref(target, path.slice(topicPrefix.length));
  }
  for (const key of Object.keys(routes) as RouteKey[]) {
    if (locales.some((lang) => routes[key][lang] === path)) return routes[key][target];
  }
  return routes.home[target];
}
