import {gql} from '@apollo/client'

export const CREATE_NEWS_MUTATION = gql `
    mutation createMutation($title : String! $body: String, $fake: Boolean){
        createNews(newsData : {
            title : $title,
            body : $body,
            fake : $fake,
        }){
            news{
                title
            }
        }
    }
`