import { FC } from "react";
import { Logo } from "@/shared/ui/logo";
import { Button } from "@/shared/ui/button";
import { Nav } from "./nav";
import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.content}>
        <Nav />
        <Button className={styles.button} size="small">
          Integrate Us
        </Button>
      </div>
    </header>
  );
};
