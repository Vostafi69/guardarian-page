import { FC } from "react";
import { BENEFITS } from "../config";
import { BenefitCard } from "./benefitCard";
import styles from "./benefits.module.scss";

export const Benefits: FC = () => {
  return (
    <div className={styles.benefits}>
      {BENEFITS.map((benefit, index) => (
        <BenefitCard benefit={benefit} key={index}></BenefitCard>
      ))}
    </div>
  );
};
