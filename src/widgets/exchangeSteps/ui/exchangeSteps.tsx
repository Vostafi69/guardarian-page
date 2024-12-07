import { FC } from "react";
import { STEPS } from "../config";
import { ExchangeStep } from "./exchangeStep";
import styles from "./exchangeSteps.module.scss";

export const ExchangeSteps: FC = () => {
  return (
    <div className={styles.exchangeSteps}>
      {STEPS.map((step, index) => (
        <ExchangeStep key={index} step={step} />
      ))}
    </div>
  );
};
