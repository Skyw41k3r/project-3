const express = require('express');
// Imports ApolloServer class
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require('dotenv').config();

// Imports the typeDefs and resolvers for GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs, 
    resolvers, 
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if (process.env.NODE_ENV === 'development') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// Creates a new Apollo server with GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// Calls the function to start the server
startApolloServer(typeDefs, resolvers);