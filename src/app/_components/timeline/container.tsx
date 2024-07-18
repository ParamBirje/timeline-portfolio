"use client";

import gqlQuery from "@/lib/gql-queries";
import TimelineItem from "./item";
import { useQuery } from "@apollo/client";
import TimelineItemLoading from "./loading";

function TimelineContainer() {
  const { loading, error, data } = useQuery(gqlQuery.GET_TIMELINE_POSTS);

  if (loading) return <TimelineItemLoading />;
  if (error) return <p>Error :(</p>;

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
