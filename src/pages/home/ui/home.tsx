import { FC } from "react";
import { PaymentsList } from "./paymentList";
import { Button } from "@/shared/ui/button";
import { Title } from "@/shared/ui/title";
import { Benefits } from "@/widgets/benefits";
import bg from "@/assets/images/bg.png";
import styles from "./home.module.scss";
import { ExchangeSteps } from "@/widgets/exchangeSteps";

export const Home: FC = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.intro}>
            <Title titleType="h1">
              {"Crypto<>Fiat"}
              <br />
              <span className={styles.blue}>
                exchanges
                <br />
                for your business
              </span>
            </Title>
            <p className={styles.text}>
              Cash out your crypto profits or invest into crypto with the lowest
              fees on the market.
            </p>
            <PaymentsList />
          </div>
          <div className={styles.widget}></div>
        </div>
        <img className={styles.background} src={bg} alt="Background image" />
      </section>
      <section className={styles.benefits}>
        <Title titleType="h2">
          Our <span className={styles.blue}>benefits</span>
        </Title>
        <Benefits />
        <Button className={styles.benefitsButton}>Exchange</Button>
      </section>
      <section className={styles.exchange}>
        <Title className={styles.exchangeTitle} titleType="h2">
          How to exchange BTC to EUR{" "}
          <span className={styles.blue}>for business</span>
        </Title>
        <ExchangeSteps />
        <Button isFluid>Start making exchanges</Button>
      </section>
      <section className={styles.trust}>
        <div className={styles.trustInner}>
          <div className={styles.trustHeading}>
            <Title titleType="h2">
              Trusted by <span className={styles.blue}>the best</span>
            </Title>
            <p className={styles.trustSubHeading}>
              Guardarian powers the leading projects in Web3 industry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
