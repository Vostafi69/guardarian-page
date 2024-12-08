import { motion } from "motion/react";
import { FC, ReactNode } from "react";

interface RevealAnimProps {
  children: ReactNode;
  delay?: number;
}

export const RevealAnim: FC<RevealAnimProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "circOut", delay }}
      variants={{
        visible: { translateY: 0, opacity: 1 },
        hidden: { translateY: 40, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
