import { useCallback } from "react";

export const useLockLennisScroll = () => {
  const handleLennisScroll = useCallback((isOpen: boolean) => {
    if (isOpen) {
      document.body.setAttribute("data-lenis-prevent", "");
    } else {
      document.body.removeAttribute("data-lenis-prevent");
    }
  }, []);

  return { handleLennisScroll };
};
