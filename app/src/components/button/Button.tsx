import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

function Button({
  children,
  className,
  to,
  href,
  disabled,
  ...otherProps
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  to?: string;
  disabled?: boolean;
  [x: string]: any;
}) {
  const classes: string = classnames(styles.button, className, {
    [styles.disabled]: disabled,
  });
  if (to) {
    return (
      <Link to={to} className={classes} {...otherProps}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...otherProps} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
