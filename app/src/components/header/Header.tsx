import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../index";
import styles from "./Header.module.scss";
import logoLgSrc from "./qantas-money-logo-lg.svg";
import logoSmSrc from "./qantas-money-logo-sm.svg";

function Header() {
  return (
    <div className={styles.header}>
      <Container className={styles.container}>
        <Link to="/" className={styles.logo}>
          <picture>
            <source srcSet={logoLgSrc} media={`(min-width: 575px)`} />
            <img src={logoSmSrc} alt="Qantas Money logo" height={30} />
          </picture>
        </Link>
      </Container>
    </div>
  );
}

export default Header;
