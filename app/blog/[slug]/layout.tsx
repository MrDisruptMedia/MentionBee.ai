import { BlogArticleScrollReset } from "@/components/blog/BlogArticleScrollReset";

export default function BlogArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogArticleScrollReset />
      {children}
    </>
  );
}
