import { RefObject, useEffect } from "react";

const isNode = (target: EventTarget | null): target is Node => {
  return target instanceof Node;
};

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (...args: any) => any,
) => {
  useEffect(() => {
    const clickEvent = (e: MouseEvent) => {
      if (ref.current && isNode(e.target) && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("click", clickEvent);

    return () => document.removeEventListener("click", clickEvent);
  }, [ref, callback]);
};
