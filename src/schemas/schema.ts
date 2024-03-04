export const typeDefs = `#graphql
    type Keanu {
        image: String
    }
    type Query {
        keanu(width: String!, height:String!, young: String, gray: String): Keanu
    }
`;
