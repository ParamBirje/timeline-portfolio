import { Card } from "@/components/ui/card";
import React from "react";
import { type HashnodePost } from "../types";
import Link from "next/link";

export default function FeaturedItem({ post }: FeaturedItemProps) {
  const FALLBACK_IMAGE =
    "https://media.istockphoto.com/id/1148635445/photo/abstract-black-grainy-paper-texture-background-or-backdrop-empty-asphalt-road-surface-for.webp?b=1&s=170667a&w=0&k=20&c=SsSK-YbyIA9JkT9_v3btSjc2y__mAoCn6uYJ8LKx9PI=";

  return (
    <Link target="_blank" href={post.url}>
      <Card className="flex flex-col md:flex-row gap-0 md:gap-5 md:h-16 relative left-0 hover:left-2 duration-200">
        <img
          src={post.coverImage?.url || FALLBACK_IMAGE}
          className="w-full md:w-[10vw] h-[10vh] md:h-full object-cover rounded-s-lg"
          alt="background"
        />

        <h4 className="scroll-m-20 text-sm font-semibold tracking-tight p-3 md:p-1 w-full my-auto opacity-90">
          {post.title}
        </h4>
      </Card>
    </Link>
  );
}

type FeaturedItemProps = {
  post: HashnodePost;
};
