import { ApolloServer } from "apollo-server";

import { allDataSources } from "./dataSource";
import allSchemas from "./schema";

const server = new ApolloServer({
  dataSources: allDataSources,
  schema: allSchemas,
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
