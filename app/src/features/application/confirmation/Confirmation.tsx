import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Link, RouteComponentProps, useHistory } from "react-router-dom";

import {
  Alert,
  Breadcrum,
  Button,
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
import { CONFIRM_DETAILS, GET_CONFIRMATION_DETAILS } from "./Confirmation.query";

interface IParams {
  creditCardCode: CREDIT_CARD_CODES;
}

function Confirmation({
  match: {
    params: { creditCardCode },
  },
}: RouteComponentProps<IParams>) {
  const { data, loading } = useQuery(GET_CONFIRMATION_DETAILS);
  const history = useHistory();
  const [confirmDetails, { loading: mutationLoading, error: mutationError }] = useMutation(
    CONFIRM_DETAILS,
    {
      onCompleted() {
        history.push(`/${creditCardCode}/thank-you/`);
      },
    },
  );

  useEffect(() => {
    if (!loading && !data) {
      history.push("/");
    }
  }, [data, loading, history]);

  const handleSubmit = (): void => {
    confirmDetails({
      variables: {
        applicationId: data.applicationId,
      },
    });
  };
  const isLoading: boolean = loading || !data;

  const renderConfirmation = (): React.ReactNode => {
    if (isLoading) {
      return <Loader>Loading</Loader>;
    }
    return (
      <>
        <h3>Personal Details</h3>
        <p>
          Please carefully check all your information before submitting your application. Once
          submitted you will be unable to edit them.
        </p>
        <dl className={styles.dl}>
          <dt>QFF Membership number:</dt>
          <dd>{data.qff}</dd>
          <dt>Name:</dt>
          <dd>{data.name}</dd>
          <dt>Email address:</dt>
          <dd>{data.emailAddress}</dd>
          <dt>Date of birth:</dt>
          <dd>{data.dateOfBirth}</dd>
          <dt>Nationality:</dt>
          <dd>{data.nationality}</dd>
          <dt>Gender:</dt>
          <dd>{data.gender}</dd>
        </dl>
        <Link to={`/${creditCardCode}/personal-details/`} className={styles.edit}>
          Edit personal details
        </Link>
        <h3>Financial Details</h3>
        <p>
          It is important your financial details are up to date and accurate. Please check them
          carefully.
        </p>
        <dl className={styles.dl}>
          <dt>Income:</dt>
          <dd>{data.income}</dd>
          <dt>Expenses:</dt>
          <dd>{data.expenses}</dd>
        </dl>
        <Link to={`/${creditCardCode}/financial-details/`} className={styles.edit}>
          Edit financial details
        </Link>
        <br />
        <Button type="button" onClick={handleSubmit} disabled={mutationLoading}>
          Confirm
        </Button>
      </>
    );
  };

  return (
    <>
      <Breadcrum activeStep={APPLICATION_STEPS.REVIEW_CONFIRM} creditCardCode={creditCardCode} />
      {mutationError && <Alert>{getGraphQlErrorMsg(mutationError)}</Alert>}
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>3. Confirm your details</h1>
          {/* TODO: Add alert if error */}
          <div className={styles.form}>{renderConfirmation()}</div>
          <Link to={`/${creditCardCode}/financial-details/`} className={styles.back}>
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

export default Confirmation;
