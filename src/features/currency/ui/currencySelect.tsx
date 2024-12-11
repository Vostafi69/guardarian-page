import { memo } from "react";
import { Select } from "@/shared/ui/select";
import { CurrencyModel } from "@/entities";
import { useLockLennisScroll } from "@/shared/hooks/useLockLennisScroll";
import styles from "./currencyForm.module.scss";

interface CurrencySelectProps {
  handleChange: (value: string) => void;
  data: CurrencyModel[];
  defaultValue: string;
}

export const CurrencySelect = memo<CurrencySelectProps>(
  ({ data, defaultValue, handleChange }) => {
    const { handleLennisScroll } = useLockLennisScroll();

    return (
      <div className={styles.selectContainer}>
        <Select.Root
          className={styles.select}
          defaultValue={defaultValue}
          onIsOpen={handleLennisScroll}
          onValueChange={handleChange}
        >
          <Select.Trigger className={styles.trigger} />
          <Select.ViewPort className={styles.selectVireport}>
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
      </div>
    );
  },
);
