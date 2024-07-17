import { type HashnodePost } from "../types";

export default function TimelineItem({ post }: TimelineItemProps) {
  return (
    <div
      className={`cursor-pointer bg-muted rounded-md relative hover:scale-95 duration-200`}
    >
      <img
        src={post.coverImage.url}
        className="absolute w-full h-full object-cover rounded-md"
        alt="background"
      />
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-5">
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          {post.title}
        </h4>
      </div>
    </div>
  );
}

type TimelineItemProps = {
  post: HashnodePost;
};
