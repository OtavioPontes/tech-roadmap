import { ArticlesView, articlesMetadata } from "@/views/library";

export const metadata = articlesMetadata("pt");

export default function Page() {
  return <ArticlesView lang="pt" />;
}
