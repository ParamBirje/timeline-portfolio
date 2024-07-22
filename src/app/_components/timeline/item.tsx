import Link from "next/link";
import { format } from "date-fns";
import { type HashnodePost } from "../types";

export default function TimelineItem({ post }: TimelineItemProps) {
  const FALLBACK_IMAGE =
    "https://media.istockphoto.com/id/1148635445/photo/abstract-black-grainy-paper-texture-background-or-backdrop-empty-asphalt-road-surface-for.webp?b=1&s=170667a&w=0&k=20&c=SsSK-YbyIA9JkT9_v3btSjc2y__mAoCn6uYJ8LKx9PI=";

  return (
    <Link
      target="_blank"
      href={post.url}
      className={`bg-muted rounded-md relative hover:scale-95 duration-200`}
    >
      <img
        src={post.coverImage?.url || FALLBACK_IMAGE}
        className="absolute w-full h-full object-cover rounded-md"
        alt="background"
      />
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col gap-1 justify-end p-5">
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          {post.title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {format(new Date(post.publishedAt), "MMMM, yyyy")}
        </p>
      </div>
    </Link>
  );
}

type TimelineItemProps = {
  post: HashnodePost;
};
