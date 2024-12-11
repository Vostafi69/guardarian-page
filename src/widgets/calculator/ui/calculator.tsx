import { forwardRef, HTMLAttributes, useState } from "react";
import { Card } from "@/shared/ui/card";
import cn from "classnames";
import styles from "./calculator.module.scss";
import { BuyForm } from "@/features";

interface CalculatorProps extends HTMLAttributes<HTMLDivElement> {}

export const Calculator = forwardRef<HTMLDivElement, CalculatorProps>(
  ({ className, ...rest }, ref) => {
    const [activeTab, setActiveTab] = useState<"BUY" | "SELL" | "SWAP">("BUY");

    const variants = cn(styles.calculator, className);

    return (
      <Card.Root className={variants} ref={ref} {...rest}>
        <Card.Body>
          <div className={styles.tabs}>
            <button
              onClick={() => setActiveTab("BUY")}
              className={cn(
                { [styles.active]: activeTab === "BUY" },
                styles.tab,
              )}
            >
              Buy
            </button>
            <button
              onClick={() => setActiveTab("SELL")}
              className={cn(
                { [styles.active]: activeTab === "SELL" },
                styles.tab,
              )}
            >
              Sell
            </button>
            <button
              onClick={() => setActiveTab("SWAP")}
              className={cn(
                { [styles.active]: activeTab === "SWAP" },
                styles.tab,
              )}
            >
              Swap
            </button>
          </div>
          <div className={styles.formContainer}>
            <BuyForm formEvent={activeTab} />
          </div>
        </Card.Body>
      </Card.Root>
    );
  },
);
