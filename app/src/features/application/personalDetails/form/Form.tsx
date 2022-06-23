import React, { useState } from "react";

import { Button } from "../../../../components";

interface IFormProps {
  handleSubmit: (data: IPersonalDetailsFormData) => void;
  disabled: boolean;
  initalData: IPersonalDetailsFormData;
}

export interface IPersonalDetailsFormData {
  qff: string;
  name: string;
  emailAddress: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
}

function Form({
  handleSubmit,
  disabled,
  initalData = {
    qff: "",
    name: "",
    emailAddress: "",
    dateOfBirth: "",
    nationality: "",
    gender: "",
  },
}: IFormProps) {
  const [formState, setFormState] = useState<IPersonalDetailsFormData>({
    ...initalData,
  });
  const handleInputChange = (event: any): void =>
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSubmit(formState);
  };
  return (
    <form onSubmit={onSubmit}>
      <h3>About you</h3>
      <p>Please enter your personal details to get started with your credit card application.</p>
      <fieldset disabled={disabled}>
        <div>
          <label htmlFor="qff">QFF Membership number</label>
          <input
            name="qff"
            type="number"
            id="qff"
            value={formState.qff}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" value={formState.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="emailAddress">Email address</label>
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            value={formState.emailAddress}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={formState.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="nationality">Nationality</label>
          <select
            name="nationality"
            id="nationality"
            value={formState.nationality}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="AU">Australia</option>
            <option value="FR">France</option>
            <option value="NZ">New Zealand</option>
            <option value="UK">United Kingdom</option>
          </select>
        </div>
        {/* TODO: convert to radio buttons */}
        <div>
          <label htmlFor="gender">Gender</label>
          <input name="gender" id="gender" value={formState.gender} onChange={handleInputChange} />
        </div>
        <Button type="submit" disabled={disabled}>
          Next
        </Button>
      </fieldset>
    </form>
  );
}

export default Form;
