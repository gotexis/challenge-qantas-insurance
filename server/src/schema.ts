import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

import applicationResolvers from "./features/application/application.resolver";
import creditCardsResolvers from "./features/creditCards/creditCards.resolver";

const allResolvers = merge(applicationResolvers, creditCardsResolvers, {});

const typeDefs = mergeTypeDefs(loadFilesSync(`${__dirname}/**/*.graphql`));

const executableSchemas = makeExecutableSchema({
  resolvers: allResolvers,
  typeDefs,
});

export default executableSchemas;
