import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

const queryTypeDefs: DocumentNode = gql`
  type Query {
    HelloServer: String!
  }
`;

const typeDefs: DocumentNode[] = [queryTypeDefs];

export default typeDefs;
