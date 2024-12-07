import { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./divider.module.scss";

interface DividerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  orientation?: "horizontal" | "vertical";
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", ...rest }, ref) => {
    const variants = cn(styles.divider, className, styles[orientation]);

    return <div className={variants} ref={ref} {...rest} />;
  },
);
