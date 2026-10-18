import { TopicView, topicMetadata, topicStaticParams } from "@/views/topic";

export const generateStaticParams = topicStaticParams;

export async function generateMetadata(props: PageProps<"/en/topics/[slug]">) {
  const { slug } = await props.params;
  return topicMetadata("en", slug);
}

export default async function Page(props: PageProps<"/en/topics/[slug]">) {
  const { slug } = await props.params;
  return <TopicView lang="en" slug={slug} />;
}
