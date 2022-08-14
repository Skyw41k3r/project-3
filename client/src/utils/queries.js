import { gql } from '@apollo/client';

export const QUERY_ALL_ARTCARDS = gql`
    {
        artcards {
            _id
            image
            title
            description
            price
        }
    }
`;

export const QUERY_USER = gql`
    {
        user {
            username
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