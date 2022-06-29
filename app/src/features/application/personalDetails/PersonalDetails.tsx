import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { Link, RouteComponentProps, useHistory } from "react-router-dom";

import {
  Alert,
  Breadcrum,
  Container,
  Disclaimers,
  Icon,
  Loader,
  Sidebar,
} from "../../../components";

import { ICON_NAMES, ICON_SIZES } from "../../../components/icon/Icon.config";
import { getGraphQlErrorMsg } from "../../../utils/errors";
import { APPLICATION_STEPS, CREDIT_CARD_CODES } from "../../app/App.config";
import styles from "../Application.module.scss";
import Form, { IPersonalDetailsFormData } from "./form/Form";
import { GET_PERSONAL_DETAILS, SET_PERSONAL_DETAILS } from "./PersonalDetails.query";

interface IParams {
  creditCardCode: CREDIT_CARD_CODES;
}

function PersonalDetails({
  match: {
    params: { creditCardCode },
  },
}: RouteComponentProps<IParams>) {
  const { data: initData, loading: initLoading, client } = useQuery(GET_PERSONAL_DETAILS);

  const history = useHistory();

  const [setPersonalDetails, { loading: mutationLoading, error: mutationError }] = useMutation(
    SET_PERSONAL_DETAILS,
    {
      onCompleted({ setPersonalDetails: { applicationId } }) {
        client.writeQuery({
          query: GET_PERSONAL_DETAILS,
          data: { applicationId },
        });

        history.push(`/${creditCardCode}/financial-details/`);
      },
    },
  );

  const handleSubmit = (formData: IPersonalDetailsFormData): void => {
    setPersonalDetails({ variables: formData });
    client.writeQuery({
      query: GET_PERSONAL_DETAILS,
      data: { ...formData },
    });
  };

  const isLoading: boolean = initLoading;

  return (
    <>
      <Breadcrum activeStep={APPLICATION_STEPS.PERSONAL_DETAILS} creditCardCode={creditCardCode} />
      {mutationError && <Alert>{getGraphQlErrorMsg(mutationError)}</Alert>}
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>1. Personal details</h1>
          <div className={styles.form}>
            {isLoading ? (
              <Loader>Loading</Loader>
            ) : (
              <Form handleSubmit={handleSubmit} disabled={mutationLoading} initialData={initData} />
            )}
          </div>
          <Link to="/" className={styles.back}>
            <Icon size={ICON_SIZES.SM} name={ICON_NAMES.ARROW_LEFT} />
            Back
          </Link>
        </div>
        <Sidebar creditCardCode={creditCardCode} />
      </Container>
      <Disclaimers />
    </>
  );
}

export default PersonalDetails;
