import { getClient } from "@/lib/apollo-client";
import gqlQuery from "@/lib/gql-queries";
import React from "react";
import { BlogCard } from "./blog-card";
import { HashnodePost } from "@/lib/types";

export default async function BlogSection() {
  const { data, loading, error } = await getClient().query({
    query: gqlQuery.GET_TIMELINE_POSTS,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // if no series found, series doesn't exist
  if (!data.publication.series) {
    console.error(
      "Series not found. Please check the series slug in the gql-config.ts file.",
    );
    return (
      <p className="text-sm text-muted-foreground mt-2">Couldn&apos;t fetch.</p>
    );
  }

  // if no posts found, but series exists
  if (!data.publication.series.posts.edges.length)
    return (
      <p className="text-sm text-muted-foreground mt-2">No posts yet :(</p>
    );

  return (
    <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
      {data.publication.series.posts.edges.map((item: any) => {
        let post: HashnodePost = item.node;
        return (
          <BlogCard
            key={post.title}
            title={post.title}
            dates={post.publishedAt}
            image={post.coverImage.url}
            url={post.url}
          />
        );
      })}
    </ul>
  );
}
