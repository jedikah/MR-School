import { ApolloClient, InMemoryCache } from "@apollo/client";

import { env } from "../configs";

export const apolloClient = new ApolloClient({
  uri: env.API_ADRESSE,
  cache: new InMemoryCache(),
});
