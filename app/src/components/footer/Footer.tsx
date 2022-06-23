import React from "react";

import { Container } from "../index";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <p>© Qantas Airways Limited ABN 16 009 661 901</p>
      </Container>
    </div>
  );
}

export default Footer;
