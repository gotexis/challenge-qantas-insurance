import classnames from "classnames";
import React from "react";

import styles from "./CountDown.module.scss";

function CountDown({ children, className }: { children?: React.ReactNode; className?: string }) {
  if (!children) {
    return <div className={styles.empty} />;
  }
  return (
    <div className={classnames(styles.countDown, className)}>
      <span className={styles.inner}>{children}</span>
    </div>
  );
}

export default CountDown;
