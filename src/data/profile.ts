import type { StaticImageData } from "next/image";
import cafe from "@/assets/projetos/cafe.webp";
import ctService from "@/assets/projetos/ct-service.webp";
import maidCafe from "@/assets/projetos/maid-cafe.webp";
import marvel from "@/assets/projetos/marvel.webp";
import meLivra from "@/assets/projetos/me-livra.webp";
import petHero from "@/assets/projetos/pet-hero.webp";
import tiktakInfinity from "@/assets/projetos/tiktak-infinity.webp";
import type { Locale } from "@/i18n/config";

// Conteúdo pessoal da home, baseado no CV. Textos traduzidos ficam como { pt, en }.

type Localized = Record<Locale, string>;

export const profile = {
  name: "Otávio Pontes",
  role: "Backend Software Engineer",
  location: { pt: "Goiânia, Brasil", en: "Goiânia, Brazil" } satisfies Localized,
  email: "otavio.pontes1103@gmail.com",
  linkedin: "https://www.linkedin.com/in/otavio-pontes/",
  github: "https://github.com/OtavioPontes",
};

/** Bio da home. Trechos em `pink` são destacados. */
export const bio: Record<Locale, { text: string; pink?: boolean }[]> = {
  pt: [
    { text: "Engenheiro de Software Backend com 5 anos de experiência, em projetos que vão de " },
    { text: "aplicações bancárias", pink: true },
    { text: " a " },
    { text: "gestão de entregas", pink: true },
    { text: ", " },
    { text: "condomínios", pink: true },
    { text: " e " },
    { text: "redes sociais", pink: true },
    { text: ". Hoje construo microsserviços em Go e arquiteturas orientadas a eventos com Kafka; antes, passei anos no mobile com Flutter. Formado em Engenharia de Computação pela UFG." },
  ],
  en: [
    { text: "Backend Software Engineer with 5 years of experience on projects ranging from " },
    { text: "banking applications", pink: true },
    { text: " to " },
    { text: "delivery management", pink: true },
    { text: ", " },
    { text: "condominiums", pink: true },
    { text: " and " },
    { text: "social networks", pink: true },
    { text: ". Today I build Go microservices and event-driven architectures with Kafka; before that, I spent years in mobile with Flutter. Computer Engineering graduate from UFG." },
  ],
};

export type Experience = {
  company: string;
  role: Localized;
  /** "AAAA-MM" */
  start: string;
  /** "AAAA-MM"; ausente = emprego atual */
  end?: string;
  location: Localized;
  stack: string[];
  highlights: Record<Locale, string[]>;
};

/** Mais recente primeiro. */
export const experience: Experience[] = [
  {
    company: "Dialog",
    role: { pt: "Engenheiro de Software Backend", en: "Backend Software Engineer" },
    start: "2024-08",
    location: { pt: "Remoto · São Paulo", en: "Remote · São Paulo" },
    stack: ["Go", "Node.js", "TypeScript", "JavaScript", "Kafka", "RabbitMQ", "Ruby", "GCP"],
    highlights: {
      pt: [
        "Arquitetei e desenvolvi microsserviços em Go e participei da migração de serviços da API legada, melhorando a latência e a disponibilidade da plataforma.",
        "Desenvolvi um mecanismo de detecção e bloqueio de URLs maliciosas com Google Web Risk, contribuindo para controles de segurança alinhados à ISO/IEC 27001:2022 (proteção contra malware e filtragem de conteúdo web).",
        "Participei da arquitetura e do desenvolvimento da feature de gamificação da plataforma, com Arquitetura Orientada a Eventos, Kafka, Kafka Streams e consumers em Go.",
        "Atuei na manutenção de APIs legadas em Node.js e Ruby.",
      ],
      en: [
        "Designed and developed Go microservices and contributed to migrating legacy API services, improving platform latency and availability.",
        "Built a mechanism to detect and block malicious URLs using Google Web Risk, strengthening security controls aligned with ISO/IEC 27001:2022 (malware protection and web content filtering).",
        "Took part in the architecture and development of the platform's gamification feature using Event-Driven Architecture, Kafka, Kafka Streams and Go consumers.",
        "Maintained legacy APIs in Node.js and Ruby.",
      ],
    },
  },
  {
    company: "Aba+",
    role: { pt: "Engenheiro de Software Mobile", en: "Mobile Software Engineer" },
    start: "2023-01",
    end: "2024-07",
    location: { pt: "Remoto · Goiânia", en: "Remote · Goiânia" },
    stack: ["Flutter", "Firebase", "Figma", "Gemini"],
    highlights: {
      pt: [
        "Participei do planejamento, prototipação, desenvolvimento, testes e publicação do aplicativo com Flutter e Figma.",
        "Arquitetei e desenvolvi o Registro Rápido: captura de áudio com transcrição pelo Gemini para uso em outros módulos do app. A atividade no aplicativo aumentou 15%.",
        "Planejei e criei o novo design system do app no Figma. A modernização elevou as notas nas lojas de 3.8 para 4.6 na Play Store e de 4.0 para 4.5 na App Store.",
      ],
      en: [
        "Contributed to planning, prototyping, developing, testing and publishing the app with Flutter and Figma.",
        "Architected and built Quick Registration: audio capture transcribed by Gemini for use across other app modules, increasing app activity by 15%.",
        "Designed the app's new design system in Figma. The modernization raised store ratings from 3.8 to 4.6 on the Play Store and from 4.0 to 4.5 on the App Store.",
      ],
    },
  },
  {
    company: "Lello Condomínios",
    role: { pt: "Engenheiro de Software Fullstack", en: "Fullstack Software Engineer" },
    start: "2022-11",
    end: "2024-01",
    location: { pt: "Remoto · São Paulo", en: "Remote · São Paulo" },
    stack: ["C#", ".NET", "Flutter"],
    highlights: {
      pt: [
        "Desenvolvi funcionalidades e melhorias para os 3 aplicativos da empresa com Flutter, além de melhorias na API Gateway com C# e .NET.",
        "Participei do planejamento, prototipação, desenvolvimento, testes e publicação dos apps e da API, sugerindo e implementando melhorias de arquitetura e design.",
      ],
      en: [
        "Built features and improvements for the company's 3 Flutter apps, plus improvements to the API Gateway with C# and .NET.",
        "Took part in planning, prototyping, developing, testing and publishing the apps and the API, proposing and implementing architecture and design improvements.",
      ],
    },
  },
  {
    company: "Way Data Solution",
    role: { pt: "Engenheiro de Software Mobile", en: "Mobile Software Engineer" },
    start: "2021-06",
    end: "2022-11",
    location: { pt: "Goiânia", en: "Goiânia" },
    stack: ["Flutter", "Firebase"],
    highlights: {
      pt: [
        "Desenvolvi funcionalidades e melhorias para os 3 aplicativos da empresa com Flutter e Firebase.",
        "Participei do planejamento, prototipação, desenvolvimento, testes e publicação dos apps.",
      ],
      en: [
        "Built features and improvements for the company's 3 apps with Flutter and Firebase.",
        "Took part in planning, prototyping, developing, testing and publishing the apps.",
      ],
    },
  },
];

export const education = [
  {
    school: { pt: "Universidade Federal de Goiás (UFG)", en: "Federal University of Goiás (UFG)" },
    degree: { pt: "Bacharelado em Engenharia de Computação", en: "Bachelor's Degree in Computer Engineering" },
    period: "2017 — 2023",
  },
];

export const courses: { title: Localized; detail?: Localized; school: string }[] = [
  {
    title: { pt: "Curso Full Cycle 3.0", en: "Full Cycle Course 3.0" },
    detail: {
      pt: "Docker, Arquitetura de Software, Comunicação entre Sistemas, Microsserviços",
      en: "Docker, Software Architecture, System Communication, Microservices",
    },
    school: "Full Cycle",
  },
  {
    title: { pt: "Golang Avançado — Alto Desempenho e Inteligência Artificial", en: "Advanced Golang — High Performance and Artificial Intelligence" },
    school: "Udemy",
  },
  {
    title: { pt: "Aprenda Golang do Zero! Desenvolva uma Aplicação Completa!", en: "Learn Golang from Scratch! Build a Complete Application!" },
    school: "Udemy",
  },
];

export const languages: { name: Localized; level: Localized; native: string }[] = [
  { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" }, native: "Português" },
  { name: { pt: "Inglês", en: "English" }, level: { pt: "Avançado", en: "Advanced" }, native: "English" },
  { name: { pt: "Japonês", en: "Japanese" }, level: { pt: "Intermediário", en: "Intermediate" }, native: "日本語" },
];

/** Mesmo agrupamento do portfólio, com o back-end na frente (foco atual). */
export const stacks = [
  {
    title: "Back-end",
    accent: "purple",
    phrase: { pt: "Microsserviços, APIs e eventos", en: "Microservices, APIs and events" },
    items: ["Go", "Node.js", "TypeScript", "Ruby", "C# / .NET", "Kafka", "RabbitMQ", "GCP", "Docker"],
  },
  {
    title: "Mobile",
    accent: "pink",
    phrase: { pt: "Apps multiplataforma", en: "Cross-platform apps" },
    items: ["Flutter", "Dart", "Firebase", "Figma"],
  },
  {
    title: "Web",
    accent: "blue",
    phrase: { pt: "Sistemas web e sites", en: "Web systems and sites" },
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
] as const;

export type Project = {
  title: string;
  image: StaticImageData;
  stack: string[];
  url?: string;
};

export const projects: Project[] = [
  { title: "TikTak Infinity", image: tiktakInfinity, stack: ["Flutter"] },
  { title: "Me Livra", image: meLivra, stack: ["Flutter", "Go"], url: "https://github.com/OtavioPontes/app_melivra" },
  { title: "Pet Hero", image: petHero, stack: ["Flutter"], url: "https://github.com/OtavioPontes/pethero" },
  { title: "CT Service", image: ctService, stack: ["Flutter"] },
  { title: "Marvel", image: marvel, stack: ["Flutter"] },
  { title: "Maid Café", image: maidCafe, stack: ["Flutter"] },
  { title: "Café", image: cafe, stack: ["Flutter"] },
];

/**
 * Tópicos do roadmap que estou estudando agora (slugs de roadmap.ts).
 * Aparecem em destaque na home e marcados no roadmap.
 */
export const studyingNow: string[] = ["sistemas-distribuidos", "consistencia-de-dados", "escalabilidade-e-performance"];

/** "2024-08" → "ago 2024" / "Aug 2024" */
export function formatMonth(lang: Locale, ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", { month: "short", year: "numeric", timeZone: "UTC" })
    .format(new Date(Date.UTC(y, m - 1, 1)))
    .replace(".", "")
    .replace(" de ", " ");
}
