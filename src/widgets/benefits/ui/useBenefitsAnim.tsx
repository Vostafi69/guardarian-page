import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const useBenefitsAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });
  const scaleTopLeft = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const scaleTopRight = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const scaleBottomLeft = useTransform(scrollYProgress, [0.5, 1], [-200, 0]);
  const scaleBottomRight = useTransform(scrollYProgress, [0.5, 1], [200, 0]);
  const opacityTop = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const opacityBottom = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const cardsScales = [
    scaleTopLeft,
    scaleTopRight,
    scaleBottomLeft,
    scaleBottomRight,
  ];

  return { ref, opacityTop, opacityBottom, cardsScales };
};
