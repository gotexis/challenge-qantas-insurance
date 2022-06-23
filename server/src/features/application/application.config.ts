export interface IPersonalDetailsArgs {
  qff: string;
  name: string;
  emailAddress: string;
  dateOfBirth: string;
  nationality: string;
  applicationId?: string;
}

export interface IFinancialDetailsArgs {
  expenses: number;
  income: number;
  applicationId: string;
}

export interface IConfirmDetailsArgs {
  applicationId: string;
}

export const APPLICATION_API_ENDPOINTS = {
  CONFIRM_DETAILS: "/v1/application/confirm",
  FINANCIAL_DETAILS: "/v1/application/financial-details",
  PERSONAL_DETAILS: "/v1/application/personal-details",
};
