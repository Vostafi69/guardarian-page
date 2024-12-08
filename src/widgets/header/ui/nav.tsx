import { FC } from "react";
import { NavItem } from "./navItem";
import { NAV_LIST } from "../config";
import styles from "./header.module.scss";

export const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {NAV_LIST.map((navItem, index) => (
          <NavItem key={index} link={navItem.link}>
            {navItem.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};
