import BlurFade from "@/components/magicui/blur-fade";
import NewsletterSubscribe from "@/components/subscribe";
import { markdownToHTML } from "@/data/blog";
import { getClient } from "@/lib/apollo-client";
import gqlQuery from "@/lib/gql-queries";
import { HashnodePost } from "@/lib/types";
import { format } from "date-fns";

const BLUR_FADE_DELAY = 0.04;

export default async function Page({ params }: { params: { slug: string } }) {
  const { data, loading, error } = await getClient().query({
    query: gqlQuery.GET_POST,
    variables: {
      slug: params.slug,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const post: HashnodePost = data.publication.post;
  const content = post.content?.html as string

  return (
    <main>
      <section id="blog">
        <div className="space-y-12 w-full pb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 1}>
            <img
              className="bg-gray-400 h-[40vh] w-full object-cover rounded-md"
              src={post.coverImage.url}
              alt="post-image"
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {post.title}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {format(new Date(post.publishedAt), "dd MMMM, yyyy")}
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
            <article
            className="prose dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: content }}
            ></article>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
            <NewsletterSubscribe />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
