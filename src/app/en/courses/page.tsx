import { CoursesView, coursesMetadata } from "@/views/library";

export const metadata = coursesMetadata("en");

export default function Page() {
  return <CoursesView lang="en" />;
}
