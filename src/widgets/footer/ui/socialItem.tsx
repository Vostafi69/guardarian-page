import { FC } from "react";
import { SocialType } from "../config";
import styles from "./footer.module.scss";

interface SocialItemProps {
  social: SocialType;
}

export const SocialItem: FC<SocialItemProps> = ({ social }) => {
  const { img, link } = social;

  return (
    <a className={styles.socialLink} href={link} target="_blank">
      <img className={styles.socialImg} src={img.src} alt={img.alt} />
    </a>
  );
};
