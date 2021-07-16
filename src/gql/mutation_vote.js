import gql from 'graphql-tag'
export const VOTE_MUTATION = gql`
mutation submitVote($token: String!, $oppid: Int!, $ip: String!, $roundid: Int!) {
  submitVote(
    input: {
      token: $token
      oppId: $oppid
      ip: $ip
      roundId: $roundid
    }
  )
  {
    vote {id}
    errors
  }
}
`
