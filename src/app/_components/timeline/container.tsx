"use client";

import gqlQuery from "@/lib/gql-queries";
import TimelineItem from "./item";
import { useQuery } from "@apollo/client";

function TimelineContainer() {
  const { loading, error, data } = useQuery(gqlQuery.GET_TIMELINE_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("graphql data here", data.publication.series.posts.edges);

  return (
    <div
      id="timeline-container"
      className="grid grid-cols-2 auto-rows-[25vh] gap-5 min-h-3/4 mt-10 pr-1"
    >
      {data.publication.series.posts.edges.map((item: any) => (
        <TimelineItem key={item.node.title} post={item.node} />
      ))}
    </div>
  );
}

export default TimelineContainer;
