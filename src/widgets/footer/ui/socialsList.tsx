import { FC } from "react";
import { SOCIALS } from "../config";
import { SocialItem } from "./socialItem";
import styles from "./footer.module.scss";

export const SocialsList: FC = () => {
  return (
    <ul className={styles.socialsList}>
      {SOCIALS.map((social, index) => (
        <SocialItem key={index} social={social} />
      ))}
    </ul>
  );
};
