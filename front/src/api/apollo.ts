import 'cross-fetch/polyfill';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';

import { env } from '../configs';

const cache = new InMemoryCache();
const httpLink = createUploadLink({
  uri: env.API_ADRESSE,
});
const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem(env.TOKEN_NAME);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const link = authLink.concat(httpLink);

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});
