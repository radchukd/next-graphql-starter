import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';

import schema from '../graphql';

it('gets "Hello Server"', async () => {
  const server = new ApolloServer({
    schema,
    context: () => ({}),
  });

  const { query } = createTestClient(server);

  const res = await query({ query: 'query{HelloServer}' });
  expect(res.errors).toBeUndefined();
  expect(res.data).not.toBeUndefined();
  expect(res.data?.HelloServer).not.toBeUndefined();
  expect(res.data?.HelloServer).toEqual('Hello from server!');
});
