import { FC, ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface ProvidersProps {
  children: ReactNode;
}

export const LenisProvider: FC<ProvidersProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
};
