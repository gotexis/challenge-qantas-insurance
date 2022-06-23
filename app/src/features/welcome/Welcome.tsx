import { useQuery } from "@apollo/client";
import React from "react";

import { Card, Container, Disclaimers, Loader, Slider } from "../../components";
import { ICreditCard } from "./Welcome.config";
import styles from "./Welcome.module.scss";
import { GET_CREDIT_CARDS } from "./Welcome.query";

function Welcome() {
  const { loading, error, data } = useQuery(GET_CREDIT_CARDS);
  if (loading) {
    return (
      <Loader>
        <p>Loading Credit Card data</p>
      </Loader>
    );
  }
  if (error) {
    throw new Error(`Failed to load Credit Card data`);
  }
  const { getCreditCards: creditCardData } = data;
  return (
    <section className={styles.welcome}>
      <Container className={styles.intro}>
        <h1>Welcome to Qantas Money</h1>
        <p>Select a credit card to get started with your application:</p>
      </Container>
      <Slider>
        {creditCardData.map((creditCard: ICreditCard) => (
          <Card key={creditCard.code} creditCard={creditCard} />
        ))}
      </Slider>
      <Disclaimers />
    </section>
  );
}

export default Welcome;
