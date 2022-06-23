import { ApolloError } from "@apollo/client";

const defaultErrorMsg: string =
  "Sorry, we are experiencing some technical difficulties. Please try again later.";

export const getGraphQlErrorMsg = (error?: ApolloError): string | null => {
  if (!error) {
    return null;
  }

  const [firstError] = error.graphQLErrors;
  if (!firstError.extensions) {
    return defaultErrorMsg;
  }

  // return firstError.extensions.response.body.message || defaultErrorMsg;
  return firstError.message || defaultErrorMsg;
};
