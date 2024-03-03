import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { config } from './config';

interface QueryArgs {
  width: String;
  height: String;
  young?: String;
  gray?: String;
}

const resolvers = {
  Query: {
    async keanu(_: any, args: QueryArgs) {
      const width = args.width;
      const height = args.height;
      const young = args.young ? args.young : '';
      const gray = args.gray ? args.gray : '';

      const response = await fetch(`${config.endPoint}${width}/${height}${young}${gray}`);
      const data = await response.text();

      return {
        id: 1,
        image: data,
      };
    },
  },
};

const typeDefs = `#graphql
    type Keanu {
        id: ID
        image: String
    }
    type Query {
        keanu(width: String!, height:String!, young: String, gray: String): Keanu
    }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
