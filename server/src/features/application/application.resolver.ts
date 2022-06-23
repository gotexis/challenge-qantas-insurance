import { idGenerator } from "../../utils/idGenerator";
import {
  IConfirmDetailsArgs,
  IFinancialDetailsArgs,
  IPersonalDetailsArgs,
} from "./application.config";

const applicationResolvers = {
  Mutation: {
    confirmDetails: async (
      root: any,
      args: IConfirmDetailsArgs,
      { dataSources }: any,
    ) => {
      return await dataSources.application.confirmDetails(args);
    },
    setFinancialDetails: async (
      root: any,
      args: IFinancialDetailsArgs,
      { dataSources }: any,
    ) => {
      return await dataSources.application.setFinancialDetails(args);
    },
    setPersonalDetails: async (
      root: any,
      args: IPersonalDetailsArgs,
      { dataSources }: any,
    ) => {
      const { applicationId = idGenerator() } = args;
      return await dataSources.application.setPersonalDetails({
        ...args,
        applicationId,
      });
    },
  },
  Query: {
    generateApplicationId: (
      root: any,
      args: any,
      { dataSources }: any,
    ): string => {
      return idGenerator();
    },
  },
};

export default applicationResolvers;
