import { Button } from "@/shared/ui/button";
import {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Label } from "@/shared/ui/label";
import { Switch } from "@/shared/ui/switch";
import { useFakeApi } from "../model/fakeApi";
import { Input } from "@/shared/ui/input";
import { CurrencySelect } from "./currencySelect";
import {
  ExampleDto,
  getCryptoCurrenciesMock,
  getCurrenciesMock,
} from "@/entities";
import { inputDigitsOnly } from "@/shared/helpers/inputDigitsOnly";
import { CurrencyActionsType } from "@/entities";
import { AnimatePresence, motion } from "motion/react";
import { motionConfig } from "@/shared/libs/motionConfig";
import cn from "classnames";
import styles from "./currencyForm.module.scss";

interface BuyFormProps {
  className?: string;
  formEvent: CurrencyActionsType;
}

export const CurrencyForm: FC<BuyFormProps> = ({ className, formEvent }) => {
  const [send, setSend] = useState<number>(300);
  const [repeat, setReapeat] = useState<boolean>(false);
  const [sendTicker, setSendTicker] = useState<string>("USD");
  const [getTicker, setGetTicker] = useState<string>("GBR");
  const { transaction, fakeExchangeRatesApi } = useFakeApi();

  const { data } = useMemo(() => getCurrenciesMock(), []);
  const { data: cryptoData } = useMemo(() => getCryptoCurrenciesMock(), []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    transaction<ExampleDto>({
      send,
      repeat,
      getTicker,
      sendTicker,
      action: formEvent,
    });
  };

  const handleChangeGetTicker = useCallback((e: string) => setGetTicker(e), []);
  const handleChangeSendTicker = useCallback(
    (e: string) => setSendTicker(e),
    [],
  );

  const variants = cn(styles.currencyForm, className);

  return (
    <form className={variants} onSubmit={handleSubmit}>
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
                setSend(inputDigitsOnly(e.target.value) as unknown as number)
              }
              type="text"
              id="send"
            />
          </div>
          <AnimatePresence mode="wait">
            {formEvent !== "BUY" && (
              <motion.div key={formEvent} {...motionConfig}>
                <CurrencySelect
                  data={cryptoData}
                  defaultValue={"BTC"}
                  handleChange={handleChangeSendTicker}
                />
              </motion.div>
            )}
            {formEvent === "BUY" && (
              <motion.div key={formEvent} {...motionConfig}>
                <CurrencySelect
                  data={data}
                  defaultValue={"EUR"}
                  handleChange={handleChangeSendTicker}
                />
              </motion.div>
            )}
          </AnimatePresence>
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
              value={
                "~" +
                parseFloat(
                  fakeExchangeRatesApi(
                    sendTicker as any,
                    getTicker as any,
                    send,
                  ).toFixed(6),
                )
              }
              disabled
              type="text"
              id="get"
            />
          </div>
          <AnimatePresence mode="wait">
            {formEvent === "BUY" && (
              <motion.div key={formEvent} {...motionConfig}>
                <CurrencySelect
                  data={cryptoData}
                  defaultValue={"BTC"}
                  handleChange={handleChangeGetTicker}
                />
              </motion.div>
            )}
            {formEvent === "SELL" && (
              <motion.div key={formEvent} {...motionConfig}>
                <CurrencySelect
                  data={data}
                  defaultValue={"EUR"}
                  handleChange={handleChangeGetTicker}
                />
              </motion.div>
            )}
            {formEvent === "SWAP" && (
              <motion.div key={formEvent} {...motionConfig}>
                <CurrencySelect
                  data={cryptoData}
                  defaultValue={"XMR"}
                  handleChange={handleChangeGetTicker}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={formEvent} {...motionConfig}>
            {formEvent === "BUY" && (
              <div className={styles.switch}>
                <Label className={styles.switchLabel}>Repeat payment</Label>
                <Switch.Root checked={repeat} onChange={(e) => setReapeat(e)}>
                  <Switch.Thumb />
                </Switch.Root>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <Button type="submit" className={styles.button} isFluid>
        Become a partner
      </Button>
    </form>
  );
};
