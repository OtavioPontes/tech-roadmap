import { BooksView, booksMetadata } from "@/views/library";

export const metadata = booksMetadata("pt");

export default function Page() {
  return <BooksView lang="pt" />;
}
