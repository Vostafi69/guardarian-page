import { Card } from "@/shared/ui/card";
import { CardBody, CardFooter } from "@/shared/ui/card/card";
import { forwardRef } from "react";
import { StepType } from "../config";
import { motion } from "motion/react";
import styles from "./exchangeSteps.module.scss";

interface ExchangeStepProps {
  step: StepType;
}

const ExchangeStep = forwardRef<HTMLDivElement, ExchangeStepProps>(
  ({ step }, ref) => {
    const { content, img, title } = step;

    return (
      <Card.Root ref={ref} className={styles.card}>
        <Card.CardHeader className={styles.cardTitle}>{title}</Card.CardHeader>
        <CardBody className={styles.cardContent}>{content}</CardBody>
        <CardFooter className={styles.cardFooter}>
          <img src={img.src} alt={img.alt} />
        </CardFooter>
      </Card.Root>
    );
  },
);

const MotionExchangeStep = motion.create(ExchangeStep);

export { ExchangeStep, MotionExchangeStep };
