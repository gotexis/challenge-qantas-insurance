import _ from "lodash";

import { ICreditCard, IGetCreditCardArgs } from "./creditCards.config";

const creditCardsResolvers = {
  Query: {
    getCreditCard: async (
      root: any,
      { creditCardCode }: IGetCreditCardArgs,
      { dataSources }: any,
    ): Promise<ICreditCard | undefined> => {
      const allCreditCards: ICreditCard[] =
        await dataSources.creditCards.getCreditCards();
      const matchedCreditCard: ICreditCard | undefined = allCreditCards.find(
        (creditCard: ICreditCard) =>
          _.upperCase(creditCard.code) === _.upperCase(creditCardCode),
      );
      return matchedCreditCard;
    },
    getCreditCards: async (
      root: any,
      args: any,
      { dataSources }: any,
    ): Promise<ICreditCard[]> => {
      return await dataSources.creditCards.getCreditCards();
    },
  },
};

export default creditCardsResolvers;
