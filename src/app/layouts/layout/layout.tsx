import { FC, ReactNode } from "react";
import { Header } from "@/widgets/header";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
