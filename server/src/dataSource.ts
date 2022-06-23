import ApplicationApi from "./features/application/application.api";
import CreditCardsApi from "./features/creditCards/creditCards.api";

export const allDataSources = () => ({
  application: new ApplicationApi(),
  creditCards: new CreditCardsApi(),
});
