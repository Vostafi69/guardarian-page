import { FC, ReactNode } from "react";
import { Header, Footer } from "@/widgets";
import styles from "./layout.module.scss";
import { ScrollProgress } from "@/shared/ui/scrollProgress";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ScrollProgress />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
