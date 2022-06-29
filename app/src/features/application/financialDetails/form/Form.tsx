import React from "react";

import { Button } from "../../../../components";
import useForm from "../../../../hooks/use-form";

interface IFormProps {
  handleSubmit: (data: IFinancialDetailsFormData) => void;
  disabled: boolean;
  initialData: IFinancialDetailsFormData;
}

export interface IFinancialDetailsFormData {
  expenses: number;
  income: number;
}

function Form({
  handleSubmit,
  disabled,
  initialData = {
    expenses: 0.0,
    income: 0.0,
  },
}: IFormProps) {

  const { formState, handleInputChange, onSubmit } = useForm<IFinancialDetailsFormData>({
    handleSubmit,
    initialData,
    converter: Number
  })


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
