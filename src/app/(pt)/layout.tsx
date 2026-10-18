import { rootMetadata, rootViewport, Shell } from "@/components/shell";
import "../globals.css";

export const metadata = rootMetadata("pt");
export const viewport = rootViewport;

export default function Layout({ children }: LayoutProps<"/">) {
  return <Shell lang="pt">{children}</Shell>;
}
