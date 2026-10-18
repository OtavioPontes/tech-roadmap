import { TopicView, topicMetadata, topicStaticParams } from "@/views/topic";

export const generateStaticParams = topicStaticParams;

export async function generateMetadata(props: PageProps<"/topicos/[slug]">) {
  const { slug } = await props.params;
  return topicMetadata("pt", slug);
}

export default async function Page(props: PageProps<"/topicos/[slug]">) {
  const { slug } = await props.params;
  return <TopicView lang="pt" slug={slug} />;
}
