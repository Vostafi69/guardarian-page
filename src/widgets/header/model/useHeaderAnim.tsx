import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export const useHeaderAnim = () => {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() || 0;
    if (current > prev && current > 80) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return { isHidden };
};
