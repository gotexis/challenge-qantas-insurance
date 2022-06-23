import { CREDIT_CARD_CODES } from "../app/App.config";

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
