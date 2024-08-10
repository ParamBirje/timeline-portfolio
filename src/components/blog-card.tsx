import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { format } from "date-fns";

interface Props {
  title: string;
  dates: string;
  location?: string;
  image?: string;
  url: string;
}

export function BlogCard({ title, dates, url, location, image }: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="rounded-sm border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-cover" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <Link
        target="_blank"
        href={url}
        className="flex flex-1 flex-col justify-start gap-1"
      >
        {dates && (
          <time className="text-xs text-muted-foreground">
            {format(new Date(dates), "dd MMMM, yyyy")}
          </time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {/* {location && ( */}
        {/*   <p className="text-sm text-muted-foreground">{location}</p> */}
        {/* )} */}
      </Link>
    </li>
  );
}
