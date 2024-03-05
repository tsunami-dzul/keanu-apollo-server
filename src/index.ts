import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { keanuSchema } from './schemas/keanuSchema';
import { keanuResolver } from './resolvers/keanuResolver';
import { config } from './config/config';

const server = new ApolloServer({
  cache: new InMemoryLRUCache(),
  typeDefs: keanuSchema,
  resolvers: keanuResolver,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: config.port },
});

console.log(`🚀  Server ready at: ${url}`);
