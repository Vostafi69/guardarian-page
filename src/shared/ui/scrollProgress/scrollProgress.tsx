import { motion, useScroll, useSpring } from "motion/react";
import { FC } from "react";
import styles from "./scrollProgress.module.scss";

export const ScrollProgress: FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={styles.scrollProgress}
      style={{ scaleX }}
    ></motion.div>
  );
};
