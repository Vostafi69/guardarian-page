import { AnchorHTMLAttributes, forwardRef } from "react";
import cn from "classnames";
import styles from "./logo.module.scss";
import logo from "../../../assets/images/logo.svg";

interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  logoLink?: string;
}

export const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ className, logoLink = "#", ...rest }, ref) => {
    const variants = cn(styles.logo, className);

    return (
      <a className={variants} href={logoLink} ref={ref} {...rest}>
        <img src={logo} alt="Guardarian logo" />
      </a>
    );
  },
);

Logo.displayName = "Logo";
