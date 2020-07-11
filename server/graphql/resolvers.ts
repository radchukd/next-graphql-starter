const resolvers = {
  Query: {
    HelloServer: (
      _parent: unknown,
      _args: unknown,
      _context: unknown,
      _info: unknown,
    ): string => 'Hello from server!',
  },
};

export default resolvers;
