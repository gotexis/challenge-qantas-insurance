import classnames from "classnames";
import React from "react";

import styles from "./Container.module.scss";

interface IContainer {
  children?: React.ReactNode;
  className?: string;
}

function Container({ children, className }: IContainer) {
  return <div className={classnames(styles.container, className)}>{children}</div>;
}

export default Container;
