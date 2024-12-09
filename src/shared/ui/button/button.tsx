import { ButtonHTMLAttributes, forwardRef } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "big";
  isFluid?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, size = "medium", isFluid = false, ...rest }, ref) => {
    const variants = cn(styles.button, className, {
      [styles.small]: size === "small",
      [styles.medium]: size === "medium",
      [styles.big]: size === "big",
      [styles.fluid]: isFluid,
    });

    return (
      <button className={variants} ref={ref} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
