import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BackpackIcon,
  Component1Icon,
  PersonIcon,
  ShuffleIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TimelineContainer from "./_components/timeline/container";
import FeaturedContainer from "./_components/featured/container";
import SocialBar from "./_components/social-bar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserProfile as user } from "@/lib/user-config";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[80vw] mx-auto lg:h-screen min-h-screen flex flex-col lg:flex-row gap-10 py-10 px-1 lg:px-5 box-border">
      <section id="home-left" className="w-full lg:w-1/2 flex flex-col gap-5">
        <Avatar className="h-[30vw] w-[30vw] md:h-[15vw] md:w-[15vw] lg:h-[8vw] lg:w-[8vw] rounded-md">
          <AvatarImage src={user.profilePic} alt="profile-pic" />
          <AvatarFallback className="rounded-md">{user.profilePicFallback}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 xl:flex-row xl:items-center xl:gap-5">
            <h1 className="scroll-m-20 text-xl font-bold tracking-tight uppercase">
              {user.name}
            </h1>

            <Badge className="w-fit" variant="secondary">
              {user.currentStatus}
            </Badge>
          </div>

          <p className="leading-7 text-muted-foreground w-full md:w-3/4">
            {user.shortAbout}
          </p>

          <div className="mt-2 flex items-center gap-3">
            <Link target="_blank" href={user.myStory}>
              <Button className="w-fit">
                <PersonIcon className="mr-2 h-4 w-4" />
                My Story
              </Button>
            </Link>

            <Link target="_blank" href={user.resume}>
              <Button variant="secondary" className="w-fit">
                <BackpackIcon className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>

          <SocialBar />
        </div>

        <Card className="mt-3">
          <CardHeader>
            <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase flex items-start">
              Featured <Component1Icon className="h-5 w-5 ml-4 mt-1" />
            </h3>
          </CardHeader>
          <CardContent>
            <FeaturedContainer />
          </CardContent>
        </Card>
      </section>

      <section
        id="home-right"
        className="overflow-y-auto overflow-x-hidden w-full lg:w-1/2"
      >
        <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase flex items-start">
          Timeline <ShuffleIcon className="h-5 w-5 ml-4 mt-1" />
        </h3>

        <TimelineContainer />
      </section>
    </main>
  );
}
