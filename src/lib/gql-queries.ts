import { gql } from "@apollo/client";
import gqlConfig from "@/lib/gql-config";

const gqlQuery = {
  GET_TIMELINE_POSTS: gql`
    query Publication {
      publication(host: "${gqlConfig.host}") {
        isTeam
        title
        series(slug: "${gqlConfig.series}") {
          posts(first: 10) {
            edges {
              node {
                title
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
