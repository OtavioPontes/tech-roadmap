import type { Phase } from "@/data/types";

/** Classes estáticas por cor de etapa (o Tailwind precisa das strings completas). */
export const phaseTheme: Record<
  Phase["color"],
  { text: string; solid: string; soft: string; border: string; line: string; bar: string }
> = {
  // As chaves continuam as de roadmap.ts; as cores seguem a paleta do portfólio.
  violet: {
    text: "text-purple-soft",
    solid: "bg-purple text-white",
    soft: "bg-purple/10",
    border: "border-purple/40",
    line: "bg-purple/40",
    bar: "bg-purple-soft",
  },
  teal: {
    text: "text-blue",
    solid: "bg-blue text-background",
    soft: "bg-blue/8",
    border: "border-blue/35",
    line: "bg-blue/35",
    bar: "bg-blue",
  },
  amber: {
    text: "text-pink",
    solid: "bg-pink text-background",
    soft: "bg-pink/8",
    border: "border-pink/35",
    line: "bg-pink/35",
    bar: "bg-pink",
  },
};

export function sourceOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
