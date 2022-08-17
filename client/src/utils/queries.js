import { gql } from '@apollo/client';

export const QUERY_ALL_ARTCARDS = gql`
    query ArtCards {
        artCard {
            _id
            image
            title
            description
            comments
        }
    }
`;
export const QUERY_SINGLE_ARTCARD = gql`
    query ArtCard($artId: ID!) {
        artCard(artId: $artId) {
            _id
            image
            title
            description
            comments
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            artcards {
                _id
                image
                title
                description
                price
            }
        }
    }
`;
 export const QUERY_ALL_COMMENTS = gql`
    query getComments {
        comments{
            _id
            username
            createdAt
            body
        }
    }
`;
export const QUERY_SINGLE_COMMENT = gql`
    query getComment {$commentId: ID!) {
        comment(commentId: $commentId) {
            _id
            username
            createdAt
            body
        }

    } }`