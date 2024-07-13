import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackpackIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TimelineContainer from "./_components/timeline/container";
import FeaturedContainer from "./_components/featured/container";
import SocialBar from "./_components/social-bar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="max-w-[80vw] mx-auto h-screen flex gap-10 py-14 px-5 box-border">
      <section id="home-left" className="w-1/2 flex flex-col gap-5">
        <Avatar className="h-[8vw] w-[8vw] rounded-md">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <h1 className="scroll-m-20 text-xl font-bold tracking-tight uppercase">Param Birje</h1>

            <Badge variant="secondary">Something @ SomeCompany.co</Badge>
          </div>

          <p className="leading-7 text-muted-foreground w-1/2">
            Once upon a time, in a far-off land, there was a very lazy king who spent all day
            lounging on his throne. One day, his advisors came to him with a problem: the kingdom
            was running out of money.
          </p>

          <div className="mt-2 flex items-center gap-3">
            <Button className="w-fit">
              <PersonIcon className="mr-2 h-4 w-4" />
              My Story
            </Button>

            <Button variant="secondary" className="w-fit">
              <BackpackIcon className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          <SocialBar />
        </div>

        <Card className="mt-3">
          <CardHeader>
            <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase">
              Featured
            </h3>
          </CardHeader>
          <CardContent>
            <FeaturedContainer />
          </CardContent>
        </Card>
      </section>

      <section id="home-right" className="overflow-y-auto overflow-x-hidden w-1/2 no-scrollbar">
        <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl uppercase">
          Timeline
        </h3>

        <TimelineContainer />
      </section>
    </main>
  );
}
