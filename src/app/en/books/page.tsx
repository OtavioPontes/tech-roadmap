import { BooksView, booksMetadata } from "@/views/library";

export const metadata = booksMetadata("en");

export default function Page() {
  return <BooksView lang="en" />;
}
