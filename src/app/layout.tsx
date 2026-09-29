import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://roadmap.otaviopontes.com"),
  title: {
    default: "Roadmap de Carreira — Software Engineer",
    template: "%s · Roadmap Software Engineer",
  },
  description:
    "Roadmap de carreira para Software Engineers: dos fundamentos à arquitetura e System Design, com cursos, artigos, vídeos e livros recomendados.",
  authors: [{ name: "Otavio Pontes", url: "https://otaviopontes.com" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Roadmap Software Engineer",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6">
            <Link href="/" className="flex shrink-0 items-center gap-2 py-3 font-semibold tracking-tight">
              <span aria-hidden className="grid size-7 place-items-center rounded-md bg-foreground text-xs font-bold text-background">
                SE
              </span>
              <span className="hidden sm:inline">Roadmap</span>
            </Link>
            <SiteNav />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>
              Curadoria por{" "}
              <a href="https://otaviopontes.com" className="font-medium text-foreground underline-offset-4 hover:underline">
                Otavio Pontes
              </a>
              . Os conteúdos linkados pertencem aos seus autores.
            </p>
            <p>Seu progresso fica salvo só neste navegador.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
