import { Card } from "@/components/ui/card";
import React from "react";
import { type HashnodePost } from "../types";

export default function FeaturedItem({ post }: FeaturedItemProps) {
  return (
    <Card className="flex gap-5 h-16 relative left-0 hover:left-2 duration-200">
      <img
        src={post.coverImage.url}
        className="w-[10vw] object-cover rounded-s-lg"
        alt="background"
      />

      <h4 className="scroll-m-20 text-sm font-semibold tracking-tight p-1 w-full my-auto opacity-90">
        {post.title}
      </h4>
    </Card>
  );
}

type FeaturedItemProps = {
  post: HashnodePost;
};
