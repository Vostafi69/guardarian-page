import { forwardRef, HtmlHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./title.module.scss";

interface TitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  titleType: "h1" | "h2" | "h3";
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, titleType, children, ...rest }, ref) => {
    const Slot = titleType;

    const variants = cn(
      styles.base,
      {
        [styles.h1]: titleType === "h1",
        [styles.h2]: titleType === "h2",
        [styles.h3]: titleType === "h3",
      },
      className,
    );

    return (
      <Slot className={variants} ref={ref} {...rest}>
        {children}
      </Slot>
    );
  },
);

Title.displayName = "Title";
