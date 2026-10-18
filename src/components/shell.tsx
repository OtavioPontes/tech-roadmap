import type { Metadata, Viewport } from "next";
import { Fira_Code, Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/avatar.png";
import { SiteNav } from "@/components/site-nav";
import { SocialLinks } from "@/components/social";
import { profile } from "@/data/profile";
import { alternates, href, htmlLang, ogLocale, type Locale, routes } from "@/i18n/config";
import { getDictionary } from "@/i18n/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export function rootMetadata(lang: Locale): Metadata {
  const d = getDictionary(lang);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://otaviopontes.com"),
    title: { default: d.meta.title, template: `%s · ${d.meta.siteName}` },
    description: d.meta.description,
    authors: [{ name: profile.name, url: profile.linkedin }],
    alternates: alternates(lang, routes.home),
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: lang === "pt" ? ogLocale.en : ogLocale.pt,
      siteName: d.meta.siteName,
    },
  };
}

export const rootViewport: Viewport = {
  themeColor: "#16171e",
  colorScheme: "dark",
};

export function Shell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  const d = getDictionary(lang);
  return (
    <html lang={htmlLang[lang]} className={`dark ${geistSans.variable} ${firaCode.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6">
            <Link href={href(lang, "home")} className="group flex shrink-0 items-center gap-2.5 py-2.5 font-mono text-sm">
              <Image src={avatar} alt="" width={32} height={32} className="size-8 [image-rendering:pixelated]" priority />
              <span className="hidden lg:inline">
                otavio<span className="text-pink">.</span>pontes
              </span>
            </Link>
            <SiteNav lang={lang} />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border bg-site-gradient">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="space-y-1.5 text-sm text-muted">
              <p className="glow font-mono text-foreground">
                {d.footer.built} {profile.name}
              </p>
              <p>{d.footer.note}</p>
            </div>
            <SocialLinks lang={lang} />
          </div>
        </footer>
      </body>
    </html>
  );
}
