import { gql } from "@apollo/client";
import gqlConfig from "@/lib/gql-config";

const gqlQuery = {
  GET_TIMELINE_POSTS: gql`
    query Publication {
      publication(host: "${gqlConfig.host}") {
        id
        series(slug: "${gqlConfig.series}") {          
          posts(first: 20) {
            edges {
              node {
                id
                title
                url
                slug
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
      series(slug: "${gqlConfig.series}") {
        posts(first: 5) {
          edges {
            node {
              id
              title
              url
              slug
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

  GET_POST: gql`
  query Publication($slug: String!) {
    publication(host: "${gqlConfig.host}") {
        id
        post(slug: $slug) {
            id
            title
            coverImage {
              url
            }
            url
            slug
            publishedAt
            content {
              html
            }
        }
    }
  }
  `,

  GET_PUBLICATION: gql`
  query Publication {
    publication(host: "${gqlConfig.host}") {
      id
      title
    }
  }
  `,

  SUBSCRIBE_NEWSLETTER: gql`
    mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
      subscribeToNewsletter(input: $input) {
        status
      }
    }
  `,
};

export default gqlQuery;
