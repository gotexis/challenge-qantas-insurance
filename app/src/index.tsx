import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache } from "apollo3-cache-persist";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";

import { Loader } from "./components";
import { Router } from "./features";
import "./styles/global.scss";
import {ClockProvider} from "./hooks/clock";

function Root() {
  const [client, setClient] = useState<ApolloClient<any> | undefined>(undefined);

  const apolloClientInit = async () => {
    const cache = new InMemoryCache();

    const newClient: ApolloClient<any> = new ApolloClient({
      cache,
      resolvers: {},
      uri: process.env.REACT_APP_API_URL,
    });

    await persistCache({
      cache,
      storage: window.localStorage,
    });

    newClient.resetStore();

    setClient(newClient);
  };

  useEffect(() => {
    apolloClientInit();
  }, []);

  if (client === undefined) {
    return <Loader>Initialising</Loader>;
  }

  return (
    <ApolloProvider client={client}>
      <ClockProvider>
        <Router />
      </ClockProvider>
    </ApolloProvider>
  );
}

render(<Root />, document.getElementById("root"));
