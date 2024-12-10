import { forwardRef, HTMLAttributes, useCallback } from "react";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Switch } from "@/shared/ui/switch";
import { Select } from "@/shared/ui/select";
import { getCurrenciesMock } from "@/entities";
import cn from "classnames";
import styles from "./calculator.module.scss";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

interface CalculatorProps extends HTMLAttributes<HTMLDivElement> {}

export const Calculator = forwardRef<HTMLDivElement, CalculatorProps>(
  ({ className, ...rest }, ref) => {
    const { data } = getCurrenciesMock();

    const variants = cn(styles.calculator, className);

    const handleLennisScroll = useCallback((isOpen: boolean) => {
      if (isOpen) {
        document.body.setAttribute("data-lenis-prevent", "");
      } else {
        document.body.removeAttribute("data-lenis-prevent");
      }
    }, []);

    return (
      <Card.Root className={variants} ref={ref} {...rest}>
        <Card.Body>
          <Switch.Root>
            <Switch.Thumb />
          </Switch.Root>
          <Select.Root onIsOpen={handleLennisScroll}>
            <Select.Trigger className={styles.calculatorTrigger}>
              Выбрать
            </Select.Trigger>
            <Select.ViewPort>
              <Select.OptionsList>
                {data.map(({ img, name, ticker }, index) => (
                  <Select.Option value={ticker} key={index}>
                    <div className={styles.currency}>
                      <img
                        className={styles.currencyImg}
                        src={img.src}
                        alt={img.alt}
                      />
                      <span className={styles.currencyTicker}>{ticker}</span>
                      <p className={styles.currencyName}>{name}</p>
                    </div>
                  </Select.Option>
                ))}
              </Select.OptionsList>
            </Select.ViewPort>
          </Select.Root>
          <Label htmlFor="send">You send</Label>
          <Input id="send" />
          <Button isFluid>Become a partner</Button>
        </Card.Body>
      </Card.Root>
    );
  },
);
