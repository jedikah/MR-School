import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { createNetworkStatusNotifier } from "react-apollo-network-status";
import { setContext } from "@apollo/client/link/context";

import { env } from "../configs";
import { useSessionDispatch } from "../contexts/session/session.consumer";

const { link, useApolloNetworkStatus } = createNetworkStatusNotifier();

export const useGlobalError = () => {
  const status = useApolloNetworkStatus();
  const sessionDispatch = useSessionDispatch();

  const handleUnauthorized = (message: string) => {
    if (message === "Unauthorized") {
      sessionDispatch({ type: "DISCONNECT" });
      localStorage.removeItem(env.TOKEN_NAME);
    }
  };

  if (status.mutationError && status.mutationError.graphQLErrors) {
    status.mutationError.graphQLErrors.forEach((error) => {
      handleUnauthorized(error.message);
    });
  }

  if (status.queryError && status.queryError.graphQLErrors) {
    status.queryError.graphQLErrors.forEach((error) => {
      handleUnauthorized(error.message);
    });
  }
};

const httpLink = createHttpLink({
  uri: env.API_ADRESSE,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(env.TOKEN_NAME);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: link.concat(authLink.concat(httpLink)),
});
