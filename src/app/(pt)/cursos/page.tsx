import { CoursesView, coursesMetadata } from "@/views/library";

export const metadata = coursesMetadata("pt");

export default function Page() {
  return <CoursesView lang="pt" />;
}
