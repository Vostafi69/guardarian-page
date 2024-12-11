import { Button } from "@/shared/ui/button";
import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { useLockLennisScroll } from "@/shared/hooks/useLockLennisScroll";
import { Label } from "@/shared/ui/label";
import { Switch } from "@/shared/ui/switch";
import { useFakeApi } from "../model/fakeApi";
import { BuyDto, getCryptoCurrenciesMock, getCurrenciesMock } from "@/entities";
import { Select } from "@/shared/ui/select";
import { Input } from "@/shared/ui/input";
import cn from "classnames";
import styles from "./buyForm.module.scss";

interface BuyFormProps {
  className?: string;
}

export const BuyForm: FC<BuyFormProps> = ({ className }) => {
  const [send, setSend] = useState<number>(300);
  const [get, setGet] = useState<number>(0.02935551);
  const [repeat, setReapeat] = useState<boolean>(false);
  const [sendTicker, setSendTicker] = useState<string>("USD");
  const [getTicker, setGetTicker] = useState<string>("GBR");
  const { handleLennisScroll } = useLockLennisScroll();
  const { transaction } = useFakeApi();
  const { data } = getCurrenciesMock();
  const { data: cryptoData } = getCryptoCurrenciesMock();

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    transaction<BuyDto>({
      get,
      send,
      repeat,
      getTicker,
      sendTicker,
    });
  };

  const handleChangeGetTicker = useCallback((e: string) => setGetTicker(e), []);
  const handleChangeTicker = useCallback((e: string) => setSendTicker(e), []);

  const variants = cn(styles.buyForm, className);

  return (
    <form className={variants}>
      <div className={styles.itemsList}>
        <div className={styles.item}>
          <div className={styles.field}>
            <Label className={styles.label} htmlFor="send">
              You send
            </Label>
            <Input
              className={styles.input}
              value={send}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSend(e.target.value as unknown as number)
              }
              type="text"
              id="send"
            />
          </div>
          <div className={styles.selectContainer}>
            <Select.Root
              className={styles.select}
              defaultValue="USD"
              onIsOpen={handleLennisScroll}
              onValueChange={handleChangeTicker}
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
        </div>
        <div className={styles.desc}>
          <div className={styles.decor}></div>
          <p className={styles.block}>
            <span className={styles.label}>Estimated rate:</span>
            <span className={styles.price}>1 BTC ~ 14.865901 EUR</span>
          </p>
          <p className={styles.block}>
            <span className={styles.label}>Total to pay:</span>
            <span className={styles.price}>300 EUR (2 EUR fees included)</span>
          </p>
        </div>
        <div className={styles.item}>
          <div className={cn(styles.field, styles.getField)}>
            <Label className={styles.label} htmlFor="get">
              You get
            </Label>
            <Input
              className={styles.input}
              value={"~" + get}
              disabled
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setGet(e.target.value as unknown as number)
              }
              type="text"
              id="get"
            />
          </div>
          <div className={styles.selectContainer}>
            <Select.Root
              className={styles.select}
              defaultValue="BTC"
              onIsOpen={handleLennisScroll}
              onValueChange={handleChangeGetTicker}
            >
              <Select.Trigger className={styles.trigger} />
              <Select.ViewPort className={styles.selectVireport}>
                <Select.OptionsList>
                  {cryptoData.map(({ img, name, ticker }, index) => (
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
        </div>
        <div className={styles.switch}>
          <Label className={styles.switchLabel}>Repeat payment</Label>
          <Switch.Root checked={repeat} onChange={(e) => setReapeat(e)}>
            <Switch.Thumb />
          </Switch.Root>
        </div>
      </div>
      <Button className={styles.button} onClick={handleSubmit} isFluid>
        Become a partner
      </Button>
    </form>
  );
};
