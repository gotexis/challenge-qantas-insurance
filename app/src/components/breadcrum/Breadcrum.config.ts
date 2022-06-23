import {
  APPLICATION_STEPS,
  CREDIT_CARD_CODES,
} from "../../features/app/App.config";

export interface IStep {
  step: APPLICATION_STEPS;
  getPath: (creditCardCode?: CREDIT_CARD_CODES) => string;
  title: string;
  path?: string;
  order?: number;
}

export const STEP_LIST: IStep[] = [
  {
    getPath: () => ``,
    step: APPLICATION_STEPS.CHOOSE_CARD,
    title: "Choose a card",
  },
  {
    getPath: (creditCardCode) => `/${creditCardCode}/personal-details/`,
    step: APPLICATION_STEPS.PERSONAL_DETAILS,
    title: "Personal details",
  },
  {
    getPath: (creditCardCode) => `/${creditCardCode}/financial-details/`,
    step: APPLICATION_STEPS.FINANCIAL_DETAILS,
    title: "Financial details",
  },
  {
    getPath: (creditCardCode) => `/${creditCardCode}/confirm/`,
    step: APPLICATION_STEPS.REVIEW_CONFIRM,
    title: "Review & confirm",
  },
];
