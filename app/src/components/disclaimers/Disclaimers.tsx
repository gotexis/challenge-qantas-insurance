import React from "react";

import { Container } from "../index";
import styles from "./Disclaimers.module.scss";

function Disclaimers() {
  return (
    <Container className={styles.disclaimers}>
      <h3>Important Information</h3>
      <p>
        Citigroup Pty Limited ABN 88 004 325 080 AFSL No. 238 098 Australian credit licence 238098,
        is the Credit Provider and Issuer of the Qantas Premier credit cards on behalf of Qantas
        Airways Limited ABN 16 009 661 901.
      </p>
      <p>
        All applications are subject to credit criteria. Fees, charges and{` `}
        <a href="https://www.qantasmoney.com/terms" target="_blank" rel="noopener noreferrer">
          Terms &amp; Conditions
        </a>
        {` `}apply.
      </p>
    </Container>
  );
}

export default Disclaimers;
