import { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./card.module.scss";

const Root = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => {
    const variants = cn(styles.root, className);

    return <div className={variants} ref={ref} {...rest}></div>;
  },
);

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

export { Root, CardHeader, CardBody, CardFooter };
