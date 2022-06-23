import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Link, RouteComponentProps, useHistory } from "react-router-dom";

import { Container, Disclaimers, Icon, Loader, Sidebar } from "../../../components";

import { ICON_NAMES, ICON_SIZES } from "../../../components/icon/Icon.config";
import { CREDIT_CARD_CODES } from "../../app/App.config";
import appStyles from "../Application.module.scss";
import { GET_APPLICATION_ID } from "../Application.query";
import styles from "./ThankYou.module.scss";

interface IParams {
  creditCardCode: CREDIT_CARD_CODES;
}

function ThankYou({
  match: {
    params: { creditCardCode },
  },
}: RouteComponentProps<IParams>) {
  const { data, loading } = useQuery(GET_APPLICATION_ID);
  const history = useHistory();

  useEffect(() => {
    if (!loading && !data) {
      history.push("/");
    }
  });

  const isLoading: boolean = loading || !data;

  return (
    <>
      <Container className={appStyles.container}>
        {isLoading ? (
          <Loader>Loading</Loader>
        ) : (
          <div className={styles.thankyou}>
            <div className={styles.success}>
              <div className={styles.icon}>
                <Icon name={ICON_NAMES.TICK} size={ICON_SIZES.LG} />
              </div>
              <h1>Thank you!</h1>
            </div>
            <h3>Your application has been received and is being process.</h3>
            <p>
              Your application reference number is:
              <strong className={styles.id}>{data.applicationId}</strong>
            </p>
            <p>
              Please quote this if you need to contact us for any reason. You will also receive an
              email to confirm we have received your application.
            </p>
            <Sidebar creditCardCode={creditCardCode} />
            <Link to={`/`} className={appStyles.back}>
              <Icon size={ICON_SIZES.SM} name={ICON_NAMES.ARROW_LEFT} />
              Return home
            </Link>
          </div>
        )}
      </Container>
      <Disclaimers />
    </>
  );
}

export default ThankYou;
