import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $email: String!
        $password: String!) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_COMMENT = gql`
    mutation createComment(
        $artId: ID!, $body: String!) {
            createComment(body: $body) {
                _id
                username
                createdAt
                body
            }
        }
    )
`;

export const LIKE_ARTCARD = gql`
    mutation likeArtCard (
        $artId: ID!) {
            likeArtCard( artId: $ID){
                _id
                createdAt
                username
            }
        }, 
    )
`;