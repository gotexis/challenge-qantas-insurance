import gql from "graphql-tag";

export const SET_FINANCIAL_DETAILS = gql`
  mutation FinancialDetailsMutation(
    $applicationId: String!
    $income: Float!
    $expenses: Float!
  ) {
    setFinancialDetails(
      applicationId: $applicationId
      income: $income
      expenses: $expenses
    ) {
      step
      applicationId
    }
  }
`;

export const GET_FINANCIAL_DETAILS = gql`
  {
    applicationId @client
    income @client
    expenses @client
  }
`;
