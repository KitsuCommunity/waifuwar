import gql from 'graphql-tag'
export const FETCH_ROUND_QUERY = gql`
  query FetchRoundQuery {
    currentRound {
        id
        roundNumber
        tier
        opp1Id {
          id
          image
          name
        }
        opp2Id {
          id
          image
          name
        }
      }
   }
`