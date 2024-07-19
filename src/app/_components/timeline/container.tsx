"use client";

import gqlQuery from "@/lib/gql-queries";
import TimelineItem from "./item";
import { useQuery } from "@apollo/client";
import TimelineItemLoading from "./loading";

function TimelineContainer() {
  const { loading, error, data } = useQuery(gqlQuery.GET_TIMELINE_POSTS);

  if (loading) return <TimelineItemLoading />;
  if (error) return <p>Error :(</p>;

  // if no series found, series doesn't exist
  if (!data.publication.series) {
    console.error(
      "Series not found. Please check the series slug in the gql-config.ts file."
    );
    return <p className="text-sm text-muted-foreground mt-2">Couldn&apos;t fetch.</p>;
  } 

  // if no posts found, but series exists
  if (!data.publication.series.posts.edges.length)
    return <p className="text-sm text-muted-foreground mt-2">No posts yet :(</p>;

  return (
    <div
      id="timeline-container"
      className="grid grid-cols-1 md:grid-cols-2 auto-rows-[25vh] gap-5 min-h-3/4 mt-10 pr-1"
    >
      {data.publication.series.posts.edges.map((item: any) => (
        <TimelineItem key={item.node.title} post={item.node} />
      ))}
    </div>
  );
}

export default TimelineContainer;
