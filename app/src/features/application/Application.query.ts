import gql from "graphql-tag";

export const GET_APPLICATION_ID = gql`
  {
    applicationId @client
  }
`;
