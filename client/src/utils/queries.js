import { gql } from '@apollo/client';

export const QUERY_ALL_ARTCARDS = gql`
    query getArtcards {
        artcards {
            _id
            image
            title
            description
            price
        }
    }
`;
export const QUERY_SINGLE_ARTCARD = gql`
    query getSingleArtcard($artId: ID!) {
        artcard(artId: $artId) {
            _id
            image
            title
            description
            price
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

// QUERY ME