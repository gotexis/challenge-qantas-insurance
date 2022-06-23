import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

describe("App", () => {
  it("renders the app component", () => {
    const app = render(
      <Router>
        <App>children</App>
      </Router>,
    );

    expect(app.baseElement).toMatchSnapshot();
  });
});
