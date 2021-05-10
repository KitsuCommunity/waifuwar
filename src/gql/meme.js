import gql from 'graphql-tag'
export const FETCH_MEME_QUERY = gql`
  query FetchMemeQuery {
        meme {
          id
          title
          image
          date
        }
   }
`