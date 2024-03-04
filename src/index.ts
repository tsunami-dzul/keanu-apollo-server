import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { keanuSchema } from './schemas/keanuSchema';
import { keanuResolver } from './resolvers/keanuResolver';

const server = new ApolloServer({
  typeDefs: keanuSchema,
  resolvers: keanuResolver,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
