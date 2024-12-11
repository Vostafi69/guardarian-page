import { forwardRef, HTMLAttributes } from "react";
import { Card } from "@/shared/ui/card";
import cn from "classnames";
import styles from "./calculator.module.scss";
import { BuyForm } from "@/features";

interface CalculatorProps extends HTMLAttributes<HTMLDivElement> {}

export const Calculator = forwardRef<HTMLDivElement, CalculatorProps>(
  ({ className, ...rest }, ref) => {
    const variants = cn(styles.calculator, className);

    return (
      <Card.Root className={variants} ref={ref} {...rest}>
        <Card.Body>
          <BuyForm />
        </Card.Body>
      </Card.Root>
    );
  },
);
