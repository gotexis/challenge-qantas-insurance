import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
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
import { GET_APPLICATION_ID } from "../Application.query";
import { GET_FINANCIAL_DETAILS, SET_FINANCIAL_DETAILS } from "./FinancialDetails.query";
import Form, { IFinancialDetailsFormData } from "./form/Form";

interface IParams {
  creditCardCode: CREDIT_CARD_CODES;
}

function FinancialDetails({
  match: {
    params: { creditCardCode },
  },
}: RouteComponentProps<IParams>) {
  const { data, client, loading } = useQuery(GET_APPLICATION_ID);
  const { data: initData, loading: initLoading } = useQuery(GET_FINANCIAL_DETAILS);

  const history = useHistory();

  const [setFinancialDetails, { loading: mutationLoading, error: mutationError }] = useMutation(
    SET_FINANCIAL_DETAILS,
    {
      onCompleted() {
        history.push(`/${creditCardCode}/confirmation/`);
      },
    },
  );

  useEffect(() => {
    if (!loading && !data) {
      history.push("/");
    }
  }, [data, loading, history]);

  const handleSubmit = (formData: IFinancialDetailsFormData): void => {
    const { applicationId } = data;
    setFinancialDetails({ variables: { ...formData, applicationId } });

    client.writeQuery({
      query: GET_FINANCIAL_DETAILS,
      data: { ...formData },
    });
  };

  const isLoading: boolean = loading || initLoading;
  return (
    <>
      <Breadcrum activeStep={APPLICATION_STEPS.FINANCIAL_DETAILS} creditCardCode={creditCardCode} />
      {mutationError && <Alert>{getGraphQlErrorMsg(mutationError)}</Alert>}
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>2. Financial details</h1>
          <div className={styles.form}>
            {isLoading ? (
              <Loader>Loading</Loader>
            ) : (
              <Form handleSubmit={handleSubmit} disabled={mutationLoading} initialData={initData} />
            )}
          </div>
          <Link to={`/${creditCardCode}/personal-details/`} className={styles.back}>
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

export default FinancialDetails;
