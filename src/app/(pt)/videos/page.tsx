import { VideosView, videosMetadata } from "@/views/library";

export const metadata = videosMetadata("pt");

export default function Page() {
  return <VideosView lang="pt" />;
}
