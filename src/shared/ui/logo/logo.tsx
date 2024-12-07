import { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./logo.module.scss";
import logo from "../../../assets/images/logo.svg";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  size: "small" | "big";
}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ className, ...rest }, ref) => {
    const variants = cn(styles.logo, {
      className: !!className,
    });

    return (
      <div className={variants} ref={ref} {...rest}>
        <img src={logo} alt="Guardarian logo" />
      </div>
    );
  },
);
