import { useQuery } from "@apollo/client";
import React from "react";

import { CREDIT_CARD_CODES } from "../../features/app/App.config";
import { Card, Loader } from "../index";
import styles from "./Sidebar.module.scss";
import { GET_CREDIT_CARD } from "./Sidebar.query";

interface IProps {
  creditCardCode: CREDIT_CARD_CODES;
}

function Sidebar({ creditCardCode }: IProps) {
  const { loading, error, data } = useQuery(GET_CREDIT_CARD, {
    variables: {
      creditCardCode,
    },
  });
  if (loading) {
    return (
      <Loader className={styles.sidebar}>
        <p>Loading Credit Card data</p>
      </Loader>
    );
  }
  if (error) {
    throw new Error(`Failed to load Credit Card data`);
  }
  const { getCreditCard: creditCardData } = data;
  return (
    <aside className={styles.sidebar}>
      <Card creditCard={creditCardData} showLink={false} />
    </aside>
  );
}

export default Sidebar;
