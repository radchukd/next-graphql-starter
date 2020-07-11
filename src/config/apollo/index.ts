import { useMemo } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from '@apollo/client';

import cache from './cache';

const IS_SERVER = typeof window === 'undefined';
let apolloClient: ApolloClient<NormalizedCacheObject>;

export const initializeApollo = (initialState: NormalizedCacheObject) => {
  const _apolloClient =
    apolloClient ??
    new ApolloClient({
      ssrMode: IS_SERVER,
      link: new HttpLink({ uri: '/api/graphql', credentials: 'same-origin' }),
      cache: new InMemoryCache(cache),
    });

  if (initialState) _apolloClient.cache.restore(initialState);

  if (IS_SERVER) return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (initialState: NormalizedCacheObject = {}) =>
  useMemo(() => initializeApollo(initialState), [initialState]);
