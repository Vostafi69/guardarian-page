import { forwardRef, HTMLAttributes, useState } from "react";
import { Card } from "@/shared/ui/card";
import { CurrencyForm } from "@/features";
import { CurrencyActionsType } from "@/entities";
import { motion } from "motion/react";
import { Tabs } from "../config/calculatorTabs";
import cn from "classnames";
import styles from "./calculator.module.scss";

interface CalculatorProps extends HTMLAttributes<HTMLDivElement> {}

export const Calculator = forwardRef<HTMLDivElement, CalculatorProps>(
  ({ className, ...rest }, ref) => {
    const [activeTab, setActiveTab] = useState<CurrencyActionsType>("BUY");

    const variants = cn(styles.calculator, className);

    return (
      <Card.Root className={variants} ref={ref} {...rest}>
        <Card.Body>
          <div className={styles.tabs}>
            {Tabs.map(({ label, value }, index) => (
              <button
                className={styles.tab}
                key={index}
                onClick={() => setActiveTab(value)}
              >
                {label}
                {activeTab === value && (
                  <motion.div
                    className={styles.underline}
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>
          <div className={styles.formContainer}>
            <CurrencyForm formEvent={activeTab} />
          </div>
        </Card.Body>
      </Card.Root>
    );
  },
);
