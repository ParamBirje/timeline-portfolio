import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="max-w-[80vw] mx-auto h-screen flex gap-10 py-14 px-5 box-border">
      <section id="home-left" className="w-1/2"></section>

      <section
        id="home-right"
        className="overflow-y-auto overflow-x-hidden w-1/2 no-scrollbar"
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl uppercase">
          Timeline
        </h1>

        <div
          id="timeline-container"
          className="grid grid-cols-2 auto-rows-[25vh] gap-5 min-h-3/4 mt-10 pr-1"
        >
          <div className="bg-muted rounded-md"></div>
          <div className="bg-muted rounded-md"></div>
          <div className="bg-muted rounded-md"></div>
        </div>
      </section>
    </main>
  );
}
