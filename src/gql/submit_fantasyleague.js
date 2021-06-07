import gql from 'graphql-tag'
export const SUBMIT_FANTASYLEAGUE = gql`
mutation submitFantasyleagueVote($token: String!, $waifus: [Int!]!, $best_waifu: Int!, $memes: [Int!]!, $best_meme: Int!) {
  submitFantasyleagueVote(
    input: {
      token: $token
      waifuIds: $waifus
      bestWaifu: $best_waifu
      memeIds: $memes
      bestMeme: $best_meme
    }
  )
  {
    vote {
      id
    }
    errors
  }
}
`