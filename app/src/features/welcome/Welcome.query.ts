import gql from "graphql-tag";

export const GET_CREDIT_CARDS = gql`
  query CreditCardsQuery {
    getCreditCards {
      code
      name
      offer {
        title
        points
        description
        expiryDate
        features
        countDownOfferPoints
        countDownOfferExpiryDate
      }
    }
  }
`;
