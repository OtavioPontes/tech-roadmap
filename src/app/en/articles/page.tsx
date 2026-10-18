import { ArticlesView, articlesMetadata } from "@/views/library";

export const metadata = articlesMetadata("en");

export default function Page() {
  return <ArticlesView lang="en" />;
}
