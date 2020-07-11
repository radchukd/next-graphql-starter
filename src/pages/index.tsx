import React from 'react';
import { useQuery, gql, useApolloClient } from '@apollo/client';

import { PublicLayout } from '../components';

const IndexPage = () => {
  const clientQuery = useApolloClient().readQuery({
    query: gql`query { HelloClient }`,
  });

  const { data, loading, error } = useQuery(
    gql`
      query {
        HelloServer
      }
    `,
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <PublicLayout title="Home">
      <h1>{data.HelloServer}</h1>
      <h1>{clientQuery.HelloClient}</h1>
    </PublicLayout>
  );
};
export default IndexPage;
