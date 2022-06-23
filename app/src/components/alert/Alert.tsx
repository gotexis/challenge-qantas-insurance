import classnames from "classnames";
import React from "react";

import { ICON_NAMES } from "../icon/Icon.config";
import { Container, Icon } from "../index";
import styles from "./Alert.module.scss";

function Alert({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={classnames(styles.alert, className)}>
      <Container className={styles.container}>
        <Icon name={ICON_NAMES.WARNING} />
        <div className={styles.msg}>{children}</div>
      </Container>
    </div>
  );
}

export default Alert;
