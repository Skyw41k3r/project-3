const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    token: String
    password: String
    comments: [Comment]!
}

type Auth {
    token: ID!
    user: User
}

type Comment {
    _id: ID
    username: String
    createdAt: String
    body: String
}

type ArtCard {
    _id: ID
    image: String
    title: String
    description: String
    comments: [Comment]
    likes: [Like]!
    likeCount: Int
}

type Like {
    _id: ID
    createdAt: String
    username: String
}

type Query {
    users: [User]
    user(username: String!): User
    getComments:[Comment]
    getComment(commentId: ID!): Comment
    artCards(username: String): [ArtCard]
    artCard(artId: ID!): ArtCard
}

type Mutation {
    addUser(
        username: String!
        email: String!
        password: String!
    ): Auth
    login(username: String!, password: String!): Auth
    createComment(artId: String!, body: String!): ArtCard
    deleteComment(artId: ID!, commentId: ID): ArtCard
    likeArtCard(artId: ID!): ArtCard
}
`;

module.exports = typeDefs;