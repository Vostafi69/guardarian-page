import { FC } from "react";
import { BENEFITS } from "../config";
import { MotionBenefitCard } from "./benefitCard";
import { useBenefitsAnimation } from "../model/useBenefitsAnim";
import styles from "./benefits.module.scss";

export const Benefits: FC = () => {
  const { cardsScales, opacityBottom, opacityTop, ref } =
    useBenefitsAnimation();

  return (
    <div className={styles.benefits} ref={ref}>
      {BENEFITS.map((benefit, index) => (
        <MotionBenefitCard
          benefit={benefit}
          key={index}
          style={{
            translateX: cardsScales[index],
            opacity: index > 1 ? opacityBottom : opacityTop,
          }}
        ></MotionBenefitCard>
      ))}
    </div>
  );
};
