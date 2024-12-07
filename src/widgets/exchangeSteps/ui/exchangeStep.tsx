import { Card } from "@/shared/ui/card";
import { CardBody, CardFooter } from "@/shared/ui/card/card";
import { FC } from "react";
import { StepType } from "../config";
import styles from "./exchangeSteps.module.scss";

interface ExchangeStepProps {
  step: StepType;
}

export const ExchangeStep: FC<ExchangeStepProps> = ({ step }) => {
  const { content, img, title } = step;

  return (
    <Card.Root className={styles.card}>
      <Card.CardHeader className={styles.cardTitle}>{title}</Card.CardHeader>
      <CardBody className={styles.cardContent}>{content}</CardBody>
      <CardFooter className={styles.cardFooter}>
        <img src={img.src} alt={img.alt} />
      </CardFooter>
    </Card.Root>
  );
};
