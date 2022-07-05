import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://kmitl-atjpo-api.hooray.site/',
    cache: new InMemoryCache()
  });