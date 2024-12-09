import { forwardRef } from "react";
import { Card } from "@/shared/ui/card";
import { Title } from "@/shared/ui/title";
import { BenefitType } from "../config";
import styles from "./benefits.module.scss";
import { motion } from "motion/react";

interface BenefitCardProps {
  benefit: BenefitType;
}

const BenefitCard = forwardRef<HTMLDivElement, BenefitCardProps>(
  ({ benefit }, ref) => {
    const { content, img, title } = benefit;

    return (
      <Card.Root ref={ref}>
        <Card.Body className={styles.card}>
          <div className={styles.cardImgWrap}>
            <img className={styles.cardImg} src={img.src} alt={img.alt} />
          </div>
          <Title className={styles.cardTitle} titleType="h3">
            {title}
          </Title>
          <ul className={styles.benefitsList}>
            {content.map((text, index) => (
              <li className={styles.benefitsListItem} key={index}>
                {text}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card.Root>
    );
  },
);

const MotionBenefitCard = motion.create(BenefitCard);

export { BenefitCard, MotionBenefitCard };
