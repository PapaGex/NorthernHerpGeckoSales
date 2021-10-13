const { ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
        type Query {
        hello: String!
        }
`;

const resolvers = {
    Query: {
        hello: (_parent, _args, _context) =>{
            return "Hello Shannon";
        }
    }
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

const handler = apolloServer.createHandler({ path: "/api/graphQL" });

export const config = {
    api: {
        bodyParser: false
}
};

export default handler;