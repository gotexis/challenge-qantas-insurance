import gql from "graphql-tag";

export const CONFIRM_DETAILS = gql`
  mutation ConfirmDetailsMutation($applicationId: String!) {
    confirmDetails(applicationId: $applicationId) {
      applicationId
      success
    }
  }
`;

export const GET_CONFIRMATION_DETAILS = gql`
  {
    applicationId @client
    name @client
    emailAddress @client
    dateOfBirth @client
    qff @client
    nationality @client
    gender @client
    income @client
    expenses @client
  }
`;
