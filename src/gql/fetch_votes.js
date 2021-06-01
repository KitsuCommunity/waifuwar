import gql from "graphql-tag";
export const FETCH_VOTE_QUERY = gql`
  query FetchVoteQuery($token: String!) {
    checkVote(token: $token) {
      userId
      roundsId
      opponentsId
    }
  }
`;
