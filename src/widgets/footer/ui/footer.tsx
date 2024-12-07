import { FC } from "react";
import { Logo } from "@/shared/ui/logo";
import { Divider } from "@/shared/ui/divider";
import { SocialsList } from "./socialsList";
import styles from "./footer.module.scss";
import visa from "@/assets/images/visa.svg";
import ep from "@/assets/images/ep.svg";
import eu from "@/assets/images/eu.svg";
import { NavLinks } from "./navLinks";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.footerTop}>
        <NavLinks />
      </div>
      <div className={styles.footerBottom}>
        <Divider className={styles.footerDivider} />
        <div className={styles.footerSocials}>
          <div className={styles.footerFlags}>
            <img src={ep} alt="Estonian Police" />
            <img src={eu} alt="eu" />
          </div>
          <SocialsList />
          <img src={visa} alt="VISA" />
        </div>
        <div className={styles.footerInfo}>
          <p className={styles.footerRights}>
            © 2023, Guardarian. All rights reserved.
          </p>
          <p className={styles.footerAbout}>
            Guardarian OÜ is a company registered in Estonia, registry code:
            14320990, address Rotermanni 2-9, Tallinn 10111, Estonia and
            operating under license FVT000200 for providing a virtual currency
            exchange services.
          </p>
          <p className={styles.footerAbout}>
            FinCEN MSB Registration Number: 31000241392664
          </p>
          <p className={styles.footerAbout}>
            Please examine the terms and conditions of the service and consult
            an expert if necessary.
          </p>
        </div>
      </div>
    </footer>
  );
};
