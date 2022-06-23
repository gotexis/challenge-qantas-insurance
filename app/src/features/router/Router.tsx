import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { App, Confirmation, FinancialDetails, PersonalDetails, ThankYou, Welcome } from "../";

function AppRouter() {
  return (
    <Router>
      <App>
        <>
          <Route path="/" exact component={Welcome} />
          <Route path="/:creditCardCode/personal-details/" component={PersonalDetails} />
          <Route path="/:creditCardCode/financial-details/" component={FinancialDetails} />
          <Route path="/:creditCardCode/confirmation/" component={Confirmation} />
          <Route path="/:creditCardCode/thank-you/" component={ThankYou} />
        </>
      </App>
    </Router>
  );
}

export default AppRouter;
