import { FC, ReactNode } from "react";
import styles from "./header.module.scss";

interface NavItemProps {
  link: string;
  children: ReactNode;
}

export const NavItem: FC<NavItemProps> = ({ link, children }) => {
  return (
    <li className={styles.mavItem}>
      <a className={styles.navLink} href={link}>
        {children}
      </a>
    </li>
  );
};
