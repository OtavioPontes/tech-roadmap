"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { href, htmlLang, type Locale, type RouteKey, switchLocalePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/ui";

const keys: RouteKey[] = ["home", "roadmap", "courses", "articles", "videos", "books", "references"];

export function SiteNav({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const d = getDictionary(lang);
  const other: Locale = lang === "pt" ? "en" : "pt";
  const topicPrefix = lang === "pt" ? "/topicos" : "/en/topics";

  const isActive = (key: RouteKey) => {
    const path = href(lang, key);
    if (key === "home") return pathname === path;
    if (key === "roadmap") return pathname.startsWith(path) || pathname.startsWith(topicPrefix);
    return pathname.startsWith(path);
  };

  return (
    <div className="-mr-4 flex min-w-0 flex-1 items-center gap-2 sm:mr-0">
      <nav aria-label={d.nav.label} className="flex min-w-0 flex-1 overflow-x-auto sm:justify-end">
        <ul className="flex gap-1 font-mono text-[13px]">
          {keys.map((key) => (
            <li key={key}>
              <Link
                href={href(lang, key)}
                aria-current={isActive(key) ? "page" : undefined}
                className="block whitespace-nowrap rounded-md px-3 py-1.5 text-muted transition-colors hover:bg-surface hover:text-foreground aria-[current=page]:bg-surface aria-[current=page]:text-blue"
              >
                {d.nav[key]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Idiomas usam root layouts diferentes: a troca recarrega a página de qualquer forma. */}
      <a
        href={switchLocalePath(pathname, other)}
        hrefLang={htmlLang[other]}
        lang={htmlLang[other]}
        title={d.nav.switchTo}
        aria-label={d.nav.switchTo}
        className="mr-4 shrink-0 rounded-md border border-border px-2 py-1 font-mono text-xs text-muted transition-colors hover:border-pink/50 hover:text-pink sm:mr-0"
      >
        <span className="text-foreground">{lang.toUpperCase()}</span>
        <span className="mx-1 text-subtle">/</span>
        {other.toUpperCase()}
      </a>
    </div>
  );
}
