import gql from 'graphql-tag'
export const FETCH_FANTASYLEAGUE_QUERY = gql`
  query FetchFantasyleagueQuery {
    fantasyLeague {
        id
        image
        name
        tier
        points
    }
  }
`