export const typeDefs = `#graphql
    type Keanu {
        id: ID
        width: String
        height: String
        young: String
        gray: String
        image: String
    }
    type Query {
        keanu: Keanu
    }
`;
