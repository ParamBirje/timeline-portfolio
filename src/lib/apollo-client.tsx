import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import gqlConfig from "./gql-config";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: gqlConfig.domain,
    }),
  });
});
