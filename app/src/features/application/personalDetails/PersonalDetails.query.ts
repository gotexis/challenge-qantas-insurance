import gql from "graphql-tag";

export const SET_PERSONAL_DETAILS = gql`
  mutation PersonalDetailsMutation(
    $applicationId: String
    $qff: String!
    $name: String!
    $emailAddress: String!
    $dateOfBirth: String!
    $nationality: String!
    $gender: String!
  ) {
    setPersonalDetails(
      applicationId: $applicationId
      qff: $qff
      name: $name
      emailAddress: $emailAddress
      dateOfBirth: $dateOfBirth
      nationality: $nationality
      gender: $gender
    ) {
      step
      applicationId
    }
  }
`;

export const GET_PERSONAL_DETAILS = gql`
  {
    applicationId @client
    name @client
    emailAddress @client
    dateOfBirth @client
    qff @client
    nationality @client
    gender @client
  }
`;
