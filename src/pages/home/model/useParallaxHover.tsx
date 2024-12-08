import { useMotionValue, useSpring } from "motion/react";
import { useRef, MouseEvent, useCallback } from "react";

export const useParallaxHover = () => {
  const ref = useRef<HTMLImageElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const r = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const stringRotate = useSpring(r, { stiffness: 100, damping: 20 });

  const handleMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const offsetX = (event.clientX - rect.left - rect.width / 2) / 35;
    const offsetY = (event.clientY - rect.top - rect.height / 2) / 35;
    const rotate = (offsetX + offsetY) / 35;

    x.set(offsetX);
    y.set(offsetY);
    r.set(rotate);
  }, []);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    r.set(0);
  }, []);

  const values = { springY, springX, stringRotate };

  return { handleMouseLeave, handleMouseMove, ref, values };
};
