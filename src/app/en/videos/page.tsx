import { VideosView, videosMetadata } from "@/views/library";

export const metadata = videosMetadata("en");

export default function Page() {
  return <VideosView lang="en" />;
}
