import gql from 'graphql-tag'
export const VOTE_MUTATION = gql`
mutation submitVote($token: String!, $oppid: Int!, $roundid: Int!) {
  submitVote(
    input: {
      token: $token
      oppId: $oppid
      roundId: $roundid
    }
  )
  {
    vote {id}
    errors
  }
}
`
