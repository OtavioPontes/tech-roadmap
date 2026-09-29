import type { Phase } from "@/data/types";

/** Classes estáticas por cor de etapa (o Tailwind precisa das strings completas). */
export const phaseTheme: Record<
  Phase["color"],
  { text: string; solid: string; soft: string; border: string; line: string; bar: string }
> = {
  violet: {
    text: "text-violet-700 dark:text-violet-300",
    solid: "bg-violet-600 text-white",
    soft: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-200 dark:border-violet-900",
    line: "bg-violet-200 dark:bg-violet-900",
    bar: "bg-violet-600",
  },
  teal: {
    text: "text-teal-700 dark:text-teal-300",
    solid: "bg-teal-600 text-white",
    soft: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-200 dark:border-teal-900",
    line: "bg-teal-200 dark:bg-teal-900",
    bar: "bg-teal-600",
  },
  amber: {
    text: "text-amber-700 dark:text-amber-300",
    solid: "bg-amber-500 text-stone-950",
    soft: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-900",
    line: "bg-amber-200 dark:bg-amber-900",
    bar: "bg-amber-500",
  },
};

export function sourceOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
