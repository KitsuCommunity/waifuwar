import gql from 'graphql-tag'
export const VOTE_MUTATION = gql`
mutation submitVote($token: String!, $oppid: Int!, $ip: String!, $roundid: Int!) {
  submitVote(
    input: {
      token: $token
      oppId: $oppid
      roundId: $roundid
      ip: $ip
    }
  )
  {
    vote {id}
    errors
  }
}
`