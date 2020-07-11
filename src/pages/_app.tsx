import React, { FC, Attributes } from 'react';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../config';
import './base.scss';

interface AppProps {
  initialState: Record<string, any>;
  Component: FC;
  Props: Attributes;
}

const App: FC<AppProps> = ({ initialState, Component, Props }) => (
  <ApolloProvider client={useApollo(initialState)}>
    <Component {...Props} />
  </ApolloProvider>
);
export default App;
