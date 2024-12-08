import { forwardRef } from "react";
import styles from "./calculator.module.scss";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

interface CalculatorProps {
  test?: string;
}

export const Calculator = forwardRef<HTMLDivElement, CalculatorProps>(
  ({ test }, ref) => {
    if (test) {
      console.log(test);
    }

    return (
      <Card.Root ref={ref} className={styles.calculator}>
        <Card.CardBody>
          <Button isFluid>Become a partner</Button>
        </Card.CardBody>
      </Card.Root>
    );
  },
);
