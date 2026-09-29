"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Roadmap" },
  { href: "/cursos", label: "Cursos" },
  { href: "/artigos", label: "Artigos" },
  { href: "/videos", label: "Vídeos" },
  { href: "/livros", label: "Livros" },
  { href: "/referencias", label: "Referências" },
];

export function SiteNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" || pathname.startsWith("/topicos") : pathname.startsWith(href);

  return (
    <nav aria-label="Principal" className="-mr-4 flex min-w-0 flex-1 overflow-x-auto sm:mr-0 sm:justify-end">
      <ul className="flex gap-1 pr-4 text-sm sm:pr-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="block whitespace-nowrap rounded-md px-3 py-1.5 text-muted transition-colors hover:bg-surface hover:text-foreground aria-[current=page]:bg-surface aria-[current=page]:font-medium aria-[current=page]:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
