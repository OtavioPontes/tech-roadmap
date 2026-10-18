import { RoadmapView, roadmapMetadata } from "@/views/roadmap";

export const metadata = roadmapMetadata("en");

export default function Page() {
  return <RoadmapView lang="en" />;
}
