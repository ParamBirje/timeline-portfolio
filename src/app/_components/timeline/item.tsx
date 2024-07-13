import React from "react";

export default function TimelineItem() {
  return (
    <div className="cursor-pointer bg-muted rounded-md bg-[url('https://github.com/shadcn.png')] bg-center bg-no-repeat bg-cover relative hover:scale-95 duration-200">
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-5">
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Some title that goes here
        </h4>
      </div>
    </div>
  );
}
