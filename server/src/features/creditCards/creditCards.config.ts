export interface IGetCreditCardArgs {
  creditCardCode: CREDIT_CARD_CODES;
}

export enum CREDIT_CARD_CODES {
  QPCA = "qpca",
  QPCB = "qpcb",
  QPCC = "qpcc",
}

export interface ICreditCard {
  code: CREDIT_CARD_CODES;
  name: string;
  offer: {
    title: string;
    points: number;
    description: string;
    expiryDate: string;
    features: string[];
    countDownOfferPoints: number;
    countDownOfferExpiryDate: string;
  };
}

export const CREDIT_CARD_API_ENDPOINTS = {
  ALL: "/v1/creditCards/all",
};
