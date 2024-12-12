import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const OFFSET = 80;

export const useHeaderAnim = () => {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() || 0;
    if (current > prev && current > OFFSET) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return { isHidden };
};
