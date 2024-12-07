import { FC, ReactNode } from "react";
import { Header, Footer } from "@/widgets";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
