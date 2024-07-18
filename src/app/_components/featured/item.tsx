import { Card } from "@/components/ui/card";
import React from "react";
import { type HashnodePost } from "../types";

export default function FeaturedItem({ post }: FeaturedItemProps) {
  return (
    <Card className="flex flex-col md:flex-row gap-0 md:gap-5 md:h-16 relative left-0 hover:left-2 duration-200">
      <img
        src={post.coverImage.url}
        className="w-full md:w-[10vw] h-[10vh] md:h-full object-cover rounded-s-lg"
        alt="background"
      />

      <h4 className="scroll-m-20 text-sm font-semibold tracking-tight p-3 md:p-1 w-full my-auto opacity-90">
        {post.title}
      </h4>
    </Card>
  );
}

type FeaturedItemProps = {
  post: HashnodePost;
};
