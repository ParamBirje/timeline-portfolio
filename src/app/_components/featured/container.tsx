"use client";

import FeaturedItem from "./item";
import { useQuery } from "@apollo/client";
import gqlQuery from "@/lib/gql-queries";

function FeaturedContainer() {
  const { loading, error, data } = useQuery(gqlQuery.GET_FEATURED_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex flex-col gap-3">
      {data.publication.series.posts.edges.map((item: any) => (
        <FeaturedItem key={item.node.title} post={item.node} />
      ))}
    </div>
  );
}

export default FeaturedContainer;
