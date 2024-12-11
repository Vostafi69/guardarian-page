import { FC } from "react";
import { Logo } from "@/shared/ui/logo";
import { Button } from "@/shared/ui/button";
import { Nav } from "./nav";
import { motion } from "motion/react";
import profile from "@/assets/images/profile.png";
import { useHeaderAnim } from "./useHeaderAnim";
import styles from "./header.module.scss";

export const Header: FC = () => {
  const { isHidden } = useHeaderAnim();

  return (
    <motion.header
      className={styles.header}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className={styles.headerInner}>
        <Logo />
        <div className={styles.content}>
          <Nav />
          <Button className={styles.button} size="small">
            Integrate Us
          </Button>
          <div className={styles.profile}>
            <img className={styles.profileImg} src={profile} alt="Profile" />
          </div>
        </div>
        <button className={styles.burgerMenu}>
          <div className={styles.burgerMenuInner}>
            <span className={styles.burgerMenuSpan}></span>
          </div>
        </button>
      </div>
    </motion.header>
  );
};
