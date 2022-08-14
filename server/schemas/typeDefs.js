const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    artcards: [ArtCard]
}

type Auth {
    token: ID
    user: User
}

type ArtCard {
    _id: ID
    image: String
    title: String
    description: String
    price: Float
}

type Query {
    users: [User]
    user(username: String!): User
    artcards(username: String): [ArtCard]
    artcard(artId: ID!): ArtCard
}

type Mutation {
    addUser(
        username: String!
        email: String!
        password: String!
    ): Auth
    addArtCard(title: String!): ArtCard
    deleteArtCard(artId: ID!): ArtCard
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;