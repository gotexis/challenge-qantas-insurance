import { RESTDataSource } from "apollo-datasource-rest";

import { API_URL } from "../../utils/env";
import {
  APPLICATION_API_ENDPOINTS,
  IConfirmDetailsArgs,
  IFinancialDetailsArgs,
  IPersonalDetailsArgs,
} from "./application.config";

class ApplicationApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  public async setFinancialDetails(args: IFinancialDetailsArgs) {
    return this.post(APPLICATION_API_ENDPOINTS.FINANCIAL_DETAILS, args);
  }

  public async setPersonalDetails(args: IPersonalDetailsArgs) {
    return this.post(APPLICATION_API_ENDPOINTS.PERSONAL_DETAILS, args);
  }

  public async confirmDetails(args: IConfirmDetailsArgs) {
    return this.post(APPLICATION_API_ENDPOINTS.CONFIRM_DETAILS, args);
  }
}

export default ApplicationApi;
