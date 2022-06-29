import React from "react";
import { Link } from "react-router-dom";

import { ICreditCard } from "../../features/welcome/Welcome.config";
import { capitalizeEachWord } from "../../utils/text";
import { ICON_NAMES, ICON_SIZES } from "../icon/Icon.config";
import { CountDown, Icon } from "../index";
import styles from "./Card.module.scss";

function Card({ creditCard, showLink = true }: { creditCard: ICreditCard; showLink?: boolean }) {
  const {
    offer: {
      title,
      expiryDate,
      points,
      description,
      features,
      countDownOfferPoints,
      countDownOfferExpiryDate,
    },
    name,
    code,
  } = creditCard;
  return (
    <article className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          {title && <h3>{capitalizeEachWord(title)}</h3>}
          {name && <p>{name}</p>}
          <img src={process.env.PUBLIC_URL + `/img/Cards_Angled_${code}.png`} alt="" />
        </div>
        <div className={styles.paper}>
          <CountDown className={styles.countDown}>{expiryDate}</CountDown>
          <div className={styles.copy}>
            <p>Up to</p>
            <div className={styles.points}>
              <Icon name={ICON_NAMES.Q_POINTS} size={ICON_SIZES.LG} />
              <strong>{points.toLocaleString()}</strong>
              <small>PTS</small>
            </div>
            {/* <div className={styles.countDownOffer}>
              Act quick! Earn an extra{" "}
              <strong>
                {(new Date(countDownOfferExpiryDate).getTime() - Date.now()) /
                  1000}
              </strong>{" "}
              PTS
            </div> */}
            <p>{description}</p>
          </div>
          <ul className={styles.features}>
            {features.map((feature: string, index: number) => (
              <li key={index}>
                <Icon name={ICON_NAMES.TICK} />
                {feature}
              </li>
            ))}
          </ul>
          {showLink && (
            <Link to={`/${code}/personal-details/`} className={styles.link}>
              Apply now <Icon name={ICON_NAMES.ARROW_RIGHT} size={ICON_SIZES.SM} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;
