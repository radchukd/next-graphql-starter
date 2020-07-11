import { InMemoryCacheConfig } from '@apollo/client';

const cache: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        HelloClient: {
          read() {
            return 'Hello from client!';
          },
        },
      },
    },
  },
};

export default cache;
