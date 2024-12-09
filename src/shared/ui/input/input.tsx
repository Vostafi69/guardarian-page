import { forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...rest }, ref) => {
    const variants = cn(styles.input, className);

    return <input className={variants} type={type} ref={ref} {...rest} />;
  },
);

Input.displayName = "Input";
