import { forwardRef } from "react";
import styles from "./calculator.module.scss";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Switch } from "@/shared/ui/switch";

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
        <Card.Body>
          <Switch.Root>
            <Switch.Thumb />
          </Switch.Root>
          <Button isFluid>Become a partner</Button>
        </Card.Body>
      </Card.Root>
    );
  },
);
