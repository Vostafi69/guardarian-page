import { FC } from "react";
import { PaymentsList } from "./paymentList";
import { Button } from "@/shared/ui/button";
import { Title } from "@/shared/ui/title";
import { Benefits, Calculator, ExchangeSteps, TrustSlider } from "@/widgets";
import bg from "@/assets/images/bg.png";
import styles from "./home.module.scss";
import { RevealAnim } from "@/shared/ui/revealAnim";
import { motion } from "motion/react";
import { useParallaxHover } from "./useParallaxHover";

export const Home: FC = () => {
  const { handleMouseLeave, handleMouseMove, ref, values } = useParallaxHover();
  const { springX, springY, stringRotate } = values;

  return (
    <main className={styles.main}>
      <section
        className={styles.hero}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.heroInner}>
          <div className={styles.intro}>
            <RevealAnim>
              <Title titleType="h1">
                {"Crypto<>Fiat"}
                <br />
                <span className={styles.blue}>
                  exchanges
                  <br />
                  for your business
                </span>
              </Title>
            </RevealAnim>
            <RevealAnim delay={0.3}>
              <p className={styles.text}>
                Cash out your crypto profits or invest into crypto with the
                lowest fees on the market.
              </p>
            </RevealAnim>
            <RevealAnim delay={0.6}>
              <PaymentsList />
            </RevealAnim>
          </div>
          <Calculator />
        </div>
        <div className={styles.backgroundContainer}>
          <motion.img
            ref={ref}
            style={{
              x: springX,
              y: springY,
              rotate: stringRotate,
            }}
            className={styles.background}
            src={bg}
            alt="Background image"
          />
        </div>
      </section>
      <section className={styles.benefits}>
        <RevealAnim>
          <Title titleType="h2">
            Our <span className={styles.blue}>benefits</span>
          </Title>
        </RevealAnim>
        <Benefits />
        <Button className={styles.benefitsButton}>Exchange</Button>
      </section>
      <section className={styles.exchange}>
        <RevealAnim>
          <Title className={styles.exchangeTitle} titleType="h2">
            How to exchange BTC to EUR{" "}
            <span className={styles.blue}>for business</span>
          </Title>
        </RevealAnim>
        <ExchangeSteps />
        <Button size="big" isFluid>
          Start making exchanges
        </Button>
      </section>
      <section className={styles.trust}>
        <div className={styles.trustInner}>
          <div className={styles.trustHeading}>
            <RevealAnim>
              <Title titleType="h2">
                Trusted by <span className={styles.blue}>the best</span>
              </Title>
            </RevealAnim>
            <RevealAnim delay={0.3}>
              <p className={styles.trustSubHeading}>
                Guardarian powers the leading projects in Web3 industry.
              </p>
            </RevealAnim>
          </div>
          <TrustSlider />
          <Button className={styles.trustButton}>
            Join our partner family
          </Button>
        </div>
      </section>
    </main>
  );
};
