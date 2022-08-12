const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    artcards: [ArtCard]
    orders: [Order]
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
    user: User
    user(userId: ID!): User
    artcards: [ArtCard]
    artcard(_id: ID!): ArtCard
    order(_id: ID!): Order

type Mutation{
    addUser(
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    addArtCard(userId: ID!, artcard: String): User
    deleteUser(userID: ID!): User
    deleteArtCard(userId: ID!, artcard: String): User
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;