import { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./card.module.scss";

const CardRoot = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => {
    const variants = cn(styles.root, className);

    return <div className={variants} ref={ref} {...rest}></div>;
  },
);

CardRoot.displayName = "CardRoot";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => {
    const variants = cn(styles.header, className);

    return (
      <div className={variants} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

CardHeader.displayName = "CardHeader";

const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => {
    const variants = cn(styles.body, className);

    return (
      <div className={variants} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

CardBody.displayName = "CardBody";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => {
    const variants = cn(styles.footer, className);

    return (
      <div className={variants} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

CardFooter.displayName = "CardFooter";

export {
  CardRoot as Root,
  CardHeader as Header,
  CardBody as Body,
  CardFooter as Footer,
};
