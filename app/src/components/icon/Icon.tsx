import classnames from "classnames";
import React from "react";

import { ICON_SIZES, IIcon } from "./Icon.config";
import styles from "./Icon.module.scss";
import icons from "./Icons";

function Icon({ className, name, size = ICON_SIZES.MD }: IIcon) {
  if (!icons[name]) {
    return null;
  }
  return (
    <svg
      className={classnames(styles.svg, className)}
      width={size}
      height={size}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}

export default Icon;
