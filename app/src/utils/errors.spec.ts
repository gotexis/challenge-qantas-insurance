import { ApolloError } from "@apollo/client";
import { getGraphQlErrorMsg } from "./errors";

describe("getGraphQlErrorMsg", () => {
  it("returns body response message from graphQLError", () => {
    const expected: string = "Sorry, something went wrong";
    const mockError: any = {
      graphQLErrors: [
        {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
            response: {
              body: {
                code: "UPSTREAM_ERROR",
                message: expected,
              },
            },
            status: 500,
            statusText: "Internal Server Error",
            url: "/v1/xxx",
          },
          message: "500: Internal Server Error",
        },
      ],
    };
    const actual: string | null = getGraphQlErrorMsg(
      mockError as any as ApolloError,
    );

    expect(typeof actual).toBe("string");
    expect(actual).toEqual("500: Internal Server Error");
  });

  it("returns null if no ApolloError", () => {
    expect(getGraphQlErrorMsg(undefined)).toBe(null);
  });
});
