import classnames from "classnames";
import React from "react";

import styles from "./Loader.module.scss";

function Loader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={classnames(styles.loader, className)}>
      <span className={styles.spinner} />
      {children}
    </div>
  );
}

export default Loader;
