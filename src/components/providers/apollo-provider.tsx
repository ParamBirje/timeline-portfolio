"use client";

import { DATA } from "@/data/resume";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: DATA.gqlConfig.domain,
  cache: new InMemoryCache(),
});

export default function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
