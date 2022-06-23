import React from "react";
import { Link } from "react-router-dom";

import { APPLICATION_STEPS, CREDIT_CARD_CODES } from "../../features/app/App.config";
import { ICON_NAMES, ICON_SIZES } from "../icon/Icon.config";
import { Container, Icon } from "../index";
import { IStep, STEP_LIST } from "./Breadcrum.config";
import styles from "./Breadcrum.module.scss";

function ActiveStep({ title, order }: IStep) {
  return (
    <li className={styles.active}>
      <span className={styles.link}>
        <span className={styles.icon}>{order}</span>
        {title}
      </span>
    </li>
  );
}

function CompletedStep({ title, path }: IStep) {
  return (
    <li className={styles.completed}>
      <Link to={path!} className={styles.link}>
        <span className={styles.icon}>
          <Icon name={ICON_NAMES.TICK} size={ICON_SIZES.SM} />
        </span>
        {title}
      </Link>
    </li>
  );
}

function IncompleteStep({ title, order }: IStep) {
  return (
    <li className={styles.incomplete}>
      <span className={styles.link}>
        <span className={styles.icon}>{order}</span>
        {title}
      </span>
    </li>
  );
}

function Breadcrum({
  activeStep,
  creditCardCode,
}: {
  activeStep: APPLICATION_STEPS;
  creditCardCode: CREDIT_CARD_CODES;
}) {
  const activeStepIndex: number = STEP_LIST.findIndex((s: IStep) => s.step === activeStep)!;
  return (
    <nav className={styles.breadcrum}>
      <Container>
        <ul>
          {STEP_LIST.map((step: IStep, index: number) => {
            if (activeStepIndex === index) {
              return <ActiveStep {...step} order={index} key={`step_${index}`} />;
            } else if (activeStepIndex > index) {
              const path: string = step.getPath(creditCardCode);
              return <CompletedStep {...step} order={index} key={`step_${index}`} path={path} />;
            }
            return <IncompleteStep {...step} order={index} key={`step_${index}`} />;
          })}
        </ul>
      </Container>
    </nav>
  );
}

export default Breadcrum;
