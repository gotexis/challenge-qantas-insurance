import React, { useState } from "react";

import { Button } from "../../../../components";

interface IFormProps {
  handleSubmit: (data: IFinancialDetailsFormData) => void;
  disabled: boolean;
  initalData: IFinancialDetailsFormData;
}

export interface IFinancialDetailsFormData {
  expenses: number;
  income: number;
}

function Form({
  handleSubmit,
  disabled,
  initalData = {
    expenses: 0.0,
    income: 0.0,
  },
}: IFormProps) {
  const [formState, setFormState] = useState<IFinancialDetailsFormData>({
    ...initalData,
  });
  const handleInputChange = (event: any): void =>
    setFormState({
      ...formState,
      [event.target.name]: Number(event.target.value),
    });
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSubmit(formState);
  };
  return (
    <form onSubmit={onSubmit}>
      <fieldset disabled={disabled}>
        <h3>Income</h3>
        <p>Please enter your income details.</p>
        <div>
          <label htmlFor="qff">Yearly income</label>
          <input
            name="income"
            type="number"
            id="income"
            value={formState.income}
            onChange={handleInputChange}
          />
        </div>
        <h3>Expenses</h3>
        <p>Please enter your income details. Examples of expenses include:</p>
        <ul>
          <li>Rent</li>
          <li>Personal/Household shopping</li>
          <li>Car</li>
          <li>Loan repayments</li>
          <li>Phone/Electricity/Water/Internet bills</li>
        </ul>
        <div>
          <label htmlFor="qff">Yearly expenses</label>
          <input
            name="expenses"
            type="number"
            id="expenses"
            value={formState.expenses}
            onChange={handleInputChange}
          />
        </div>
        <Button type="submit" disabled={disabled}>
          Next
        </Button>
      </fieldset>
    </form>
  );
}

export default Form;
