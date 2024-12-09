import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const useExchangeStepsAnim = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const rotateLeft = useTransform(scrollYProgress, [0, 0.8], [-24, 0]);
  const rotateMiddle = useTransform(scrollYProgress, [0, 0.8], [-6, 0]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.8], [16, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.8], [120, 0]);
  const rotates = [rotateLeft, rotateMiddle, rotateRight];

  return { translateY, rotates, ref };
};
