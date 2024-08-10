import { gql } from "@apollo/client";
import gqlConfig from "@/lib/gql-config";

const gqlQuery = {
  GET_TIMELINE_POSTS: gql`
    query Publication {
      publication(host: "${gqlConfig.host}") {
        id
        series(slug: "${gqlConfig.series}") {
          posts(first: 10) {
            edges {
              node {
                id
                title
                url
                publishedAt
                coverImage {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,

  GET_FEATURED_POSTS: gql`
  query Publication {
    publication(host: "${gqlConfig.host}") {
      id
      series(slug: "${gqlConfig.featured}") {
        posts(first: 3) {
          edges {
            node {
              id
              title
              url
              publishedAt
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  }
`,
};

export default gqlQuery;
