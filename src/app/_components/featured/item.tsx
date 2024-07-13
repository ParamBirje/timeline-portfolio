import { Card } from "@/components/ui/card";
import React from "react";

export default function FeaturedItem() {
  return (
    <Card className="flex gap-5 min-h-16">
      <div className="w-[10vw] bg-[url('https://github.com/shadcn.png')] bg-cover bg-center rounded-s-md"></div>

      <h4 className="scroll-m-20 text-sm font-semibold tracking-tight p-1 w-full my-auto opacity-90">
        Some title that goes here Lorem ipsum dolor ipsum dolor ...
      </h4>
    </Card>
  );
}
