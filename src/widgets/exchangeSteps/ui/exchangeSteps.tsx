import { FC } from "react";
import { STEPS } from "../config";
import { MotionExchangeStep } from "./exchangeStep";
import styles from "./exchangeSteps.module.scss";
import { useExchangeStepsAnim } from "../model/useExchangeStepsAnim";

export const ExchangeSteps: FC = () => {
  const { ref, rotates, translateY } = useExchangeStepsAnim();

  return (
    <div className={styles.exchangeSteps} ref={ref}>
      {STEPS.map((step, index) => (
        <MotionExchangeStep
          key={index}
          step={step}
          style={{
            rotate: rotates[index],
            translateY: translateY,
          }}
        />
      ))}
    </div>
  );
};
