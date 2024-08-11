import BlurFade from "@/components/magicui/blur-fade";
import PrismLoader from "@/components/prism-loader";
import NewsletterSubscribe from "@/components/subscribe";
import { Button } from "@/components/ui/button";
import { getClient } from "@/lib/apollo-client";
import gqlQuery from "@/lib/gql-queries";
import { HashnodePost } from "@/lib/types";
import { format } from "date-fns";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default async function Page({ params }: { params: { slug: string } }) {
  const { data, error } = await getClient().query({
    query: gqlQuery.GET_POST,
    variables: {
      slug: params.slug,
    },
  });

  if (error) return <p>Error :(</p>;

  const post: HashnodePost = data.publication.post;
  const content = post.content?.html as string;

  return (
    <main>
      <section id="blog">
        <div className="space-y-12 w-full pb-12">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Link href="/blog">
              <Button variant="ghost">
                <ArrowLeftIcon className="h-4 mr-2" />
                back to blog
              </Button>
            </Link>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
            <img
              className="bg-gray-400 h-[35vh] w-full object-cover rounded-md"
              src={post.coverImage.url}
              alt="post-image"
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
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
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <article
              className="prose dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: content }}
            ></article>
            <PrismLoader />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
            <NewsletterSubscribe />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Link href="/blog">
              <Button variant="ghost">
                <ArrowLeftIcon className="h-4 mr-2" />
                back to blog
              </Button>
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
