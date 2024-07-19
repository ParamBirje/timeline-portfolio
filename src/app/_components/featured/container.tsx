"use client";

import FeaturedItem from "./item";
import { useQuery } from "@apollo/client";
import gqlQuery from "@/lib/gql-queries";
import FeaturedItemLoading from "./loading";

function FeaturedContainer() {
  const { loading, error, data } = useQuery(gqlQuery.GET_FEATURED_POSTS);

  if (loading) return <FeaturedItemLoading />;
  if (error) return <p>Error :(</p>;

  // if no series found, series doesn't exist
  if (!data.publication.series) {
    console.error(
      "Series not found. Please check the series slug in the gql-config file."
    );
    return <p className="text-sm text-muted-foreground mt-2">Couldn&apos;t fetch.</p>;
  }

  // if no posts found, but series exists
  if (!data.publication.series.posts.edges.length)
    return <p className="text-sm text-muted-foreground">No posts yet :(</p>;

  return (
    <div className="flex flex-col gap-3">
      {data.publication.series.posts.edges.map((item: any) => (
        <FeaturedItem key={item.node.title} post={item.node} />
      ))}
    </div>
  );
}

export default FeaturedContainer;
