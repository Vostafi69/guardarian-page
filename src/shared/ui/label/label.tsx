import { forwardRef, LabelHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./label.module.scss";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...rest }, ref) => {
    const variants = cn(styles.label, className);

    return <label className={variants} ref={ref} {...rest} />;
  },
);

Label.displayName = "Label";
