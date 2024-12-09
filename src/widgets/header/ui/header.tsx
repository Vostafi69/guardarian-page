import { FC } from "react";
import { Logo } from "@/shared/ui/logo";
import { Button } from "@/shared/ui/button";
import { Nav } from "./nav";
import { motion } from "motion/react";
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
        </div>
      </div>
    </motion.header>
  );
};
