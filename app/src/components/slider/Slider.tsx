import classnames from "classnames";
import React from "react";

import { Container, Icon } from "../../components";
import { ICON_NAMES, ICON_SIZES } from "../icon/Icon.config";
import styles from "./Slider.module.scss";

function Slider({ children }: { children: React.ReactNode }) {
  const slides: React.ReactNode[] = Array.isArray(children) ? children : [children];
  const numberOfSlides: number = slides.length - 1;
  const [activeSlide, setActiveSlide] = React.useState<number>(1);
  return (
    <Container className={styles.container}>
      <div className={styles.slider}>
        <button
          type="button"
          onClick={() => setActiveSlide(Math.max(activeSlide - 1, 0))}
          className={classnames(styles.btnLeft, {
            [styles.hidden]: activeSlide === 0,
          })}
        >
          <Icon name={ICON_NAMES.CHEVRON_LEFT} size={ICON_SIZES.LG} />
        </button>
        {slides.map((slide, index) => {
          return (
            <div
              className={classnames(styles.slide, {
                [styles.active]: index === activeSlide,
              })}
              key={index}
            >
              {slide}
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => setActiveSlide(Math.min(activeSlide + 1, numberOfSlides))}
          className={classnames(styles.btnRight, {
            [styles.hidden]: activeSlide === numberOfSlides,
          })}
        >
          <Icon name={ICON_NAMES.CHEVRON_RIGHT} size={ICON_SIZES.LG} />
        </button>
      </div>
    </Container>
  );
}

export default Slider;
