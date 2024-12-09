import { Card } from "@/shared/ui/card";
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
        <Card.Header className={styles.cardTitle}>{title}</Card.Header>
        <Card.Body className={styles.cardContent}>{content}</Card.Body>
        <Card.Footer className={styles.cardFooter}>
          <img src={img.src} alt={img.alt} />
        </Card.Footer>
      </Card.Root>
    );
  },
);

const MotionExchangeStep = motion.create(ExchangeStep);

export { ExchangeStep, MotionExchangeStep };
