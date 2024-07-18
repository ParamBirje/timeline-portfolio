import Link from "next/link";
import { format } from "date-fns";
import { type HashnodePost } from "../types";

export default function TimelineItem({ post }: TimelineItemProps) {
  return (
    <Link
      target="_blank"
      href={post.url}
      className={`bg-muted rounded-md relative hover:scale-95 duration-200`}
    >
      <img
        src={post.coverImage.url}
        className="absolute w-full h-full object-cover rounded-md"
        alt="background"
      />
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col gap-1 justify-end p-5">
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          {post.title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {format(new Date(post.publishedAt), "PPP")}
        </p>
      </div>
    </Link>
  );
}

type TimelineItemProps = {
  post: HashnodePost;
};
