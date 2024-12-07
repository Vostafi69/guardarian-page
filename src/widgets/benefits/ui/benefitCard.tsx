import { FC } from "react";
import { Card } from "@/shared/ui/card";
import { Title } from "@/shared/ui/title";
import { BenefitType } from "../config";
import styles from "./benefits.module.scss";

interface BenefitCardProps {
  benefit: BenefitType;
}

export const BenefitCard: FC<BenefitCardProps> = ({ benefit }) => {
  const { content, img, title } = benefit;

  return (
    <Card.Root>
      <Card.CardBody className={styles.card}>
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
      </Card.CardBody>
    </Card.Root>
  );
};
