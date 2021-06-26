import { gql } from "@apollo/client";

export const LOAD_NEWS = gql`
    query{
        allNews{
            title
            body
            fake
        }
    }
`