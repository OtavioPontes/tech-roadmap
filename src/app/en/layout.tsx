import { rootMetadata, rootViewport, Shell } from "@/components/shell";
import "../globals.css";

export const metadata = rootMetadata("en");
export const viewport = rootViewport;

export default function Layout({ children }: LayoutProps<"/en">) {
  return <Shell lang="en">{children}</Shell>;
}
