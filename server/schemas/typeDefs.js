const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    artcards: [ArtCard]!
}

type ArtCard {
    _id: ID
    image: [Image]
    title: String
    description: String
    price: Integer
}

type Query {
    users: [User]!
    user(userId: ID!): User
    artcards: [ArtCard]!
    artcard(artcardId: ID!): ArtCard

type Mutation{
    addUser(firstName: String!): User
    addArtCard(userId: ID!, artcard: String): User
    deleteUser(userID: ID!): User
    deleteArtCard(userId: ID!, artcard: String): User
}
`;

module.exports = typeDefs;