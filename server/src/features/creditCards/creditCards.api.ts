import { RESTDataSource } from "apollo-datasource-rest";

import { API_URL } from "../../utils/env";
import { CREDIT_CARD_API_ENDPOINTS } from "./creditCards.config";

class CreditCardsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  public async getCreditCards() {
    return this.get(CREDIT_CARD_API_ENDPOINTS.ALL);
  }
}

export default CreditCardsApi;
