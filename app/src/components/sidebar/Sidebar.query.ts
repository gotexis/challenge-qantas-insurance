import gql from "graphql-tag";

export const GET_CREDIT_CARD = gql`
  query CreditCardQuery($creditCardCode: String!) {
    getCreditCard(creditCardCode: $creditCardCode) {
      code
      offer {
        points
        description
        expiryDate
        features
      }
    }
  }
`;
