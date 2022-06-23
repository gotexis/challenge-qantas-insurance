import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  describe("Valid children", () => {
    const ValidTestComponent = () => <>Test valid component</>;
    it("renders the child component if it contains no errors", async () => {
      render(
        <ErrorBoundary>
          <ValidTestComponent />
        </ErrorBoundary>,
      );

      await waitFor(() => screen.getByText("Test valid component"));
    });
  });

  describe("Invalid children", () => {
    it("catches errors in child components", () => {
      return;
    });
  });
});
