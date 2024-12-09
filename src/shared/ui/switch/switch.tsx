import { FC, forwardRef, ReactNode, useState } from "react";
import cn from "classnames";
import styles from "./switch.module.scss";

interface SwitchRootProps {
  className?: string;
  checked?: boolean;
  children: ReactNode;
  onChange?: (checked: boolean) => void;
}

const SwitchRoot = forwardRef<HTMLButtonElement, SwitchRootProps>(
  ({ className, children, checked = false, onChange }, ref) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const variants = cn(
      styles.switchRoot,
      {
        [styles.checked]: isChecked,
      },
      className,
    );

    const handleClick = () => {
      setIsChecked((prev) => !prev);
      if (onChange) {
        onChange(!isChecked);
      }
    };

    return (
      <button
        className={variants}
        type="button"
        aria-checked={isChecked}
        onClick={handleClick}
        role="switch"
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

SwitchRoot.displayName = "Switch";

interface SwitchThumbProps {
  className?: string;
}

const SwitchThumb: FC<SwitchThumbProps> = ({ className }) => {
  const variants = cn(styles.switchThumb, className);

  return <span className={variants}></span>;
};

SwitchThumb.displayName = "SwitchThumb";

export { SwitchRoot as Root, SwitchThumb as Thumb };
