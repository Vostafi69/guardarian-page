import { FC } from "react";
import styles from "./header.module.scss";
import { NavItem } from "./navItem";

const NAV_LIST: { name: string; link: string }[] = [
  { link: "#", name: "Currencies" },
  { link: "#", name: "Products" },
  { link: "#", name: "For Partners" },
  { link: "#", name: "Support" },
];

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
