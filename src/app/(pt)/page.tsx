import { HomeView, homeMetadata } from "@/views/home";

export const metadata = homeMetadata("pt");

export default function Page() {
  return <HomeView lang="pt" />;
}
