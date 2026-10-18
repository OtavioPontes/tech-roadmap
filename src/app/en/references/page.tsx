import { ReferencesView, referencesMetadata } from "@/views/library";

export const metadata = referencesMetadata("en");

export default function Page() {
  return <ReferencesView lang="en" />;
}
