import cn from "classnames";
import styles from "./select.module.scss";
import {
  ButtonHTMLAttributes,
  createContext,
  Dispatch,
  FC,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import arrow from "@/assets/images/arrow-b.svg";

interface SelectContextType {
  selected: ReactNode | null;
  isOpen: boolean;
  setSelected: Dispatch<SetStateAction<ReactNode | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onChange?: (value: ReactNode) => void;
}

const SelectContext = createContext({} as SelectContextType);
const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Invalid Context");
  }

  return context;
};

interface SelectRootProps extends HTMLAttributes<HTMLDivElement> {}

const SelectRoot: FC<SelectRootProps> = ({ className, children, ...rest }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<ReactNode | null>(null);

  const variants = cn(styles.selectRoot, className);

  return (
    <SelectContext.Provider
      value={{ isOpen, selected, setIsOpen, setSelected }}
    >
      <div className={variants} {...rest}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

interface SelectTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ children, className, ...rest }, ref) => {
    const { selected, setIsOpen, isOpen } = useSelectContext();

    const handleClick = () => {
      setIsOpen((prev) => !prev);
    };

    const variants = cn(styles.selectTrigger, className);

    return (
      <button className={variants} onClick={handleClick} ref={ref} {...rest}>
        <div className={styles.selectTriggerContent}>
          {selected ? selected : children}
        </div>
        <div
          className={cn(styles.selectTriggerIcon, { [styles.open]: isOpen })}
        >
          <img
            className={styles.selectTriggerIconImg}
            src={arrow}
            alt="arrow"
          />
        </div>
      </button>
    );
  },
);

const SelectViewPort = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...rest }, ref) => {
  const { isOpen } = useSelectContext();

  const variants = cn(
    styles.selectViewPort,
    {
      [styles.show]: isOpen,
    },
    className,
  );

  return (
    <div className={variants} ref={ref} {...rest}>
      {children}
    </div>
  );
});

const SelectOptionsList = forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement>
>(({ children, className, ...rest }, ref) => {
  const variants = cn(styles.selectOptionsList, className);

  return (
    <ul className={variants} ref={ref} {...rest}>
      {children}
    </ul>
  );
});

interface SelectOptionProps {
  children: ReactNode;
  value: string;
  className?: string;
}

const SelectOption: FC<SelectOptionProps> = ({
  className,
  value,
  children,
}) => {
  const { setSelected, setIsOpen, onChange, selected } = useSelectContext();

  const variants = cn(
    styles.selectOption,
    {
      [styles.selectOPtionSelected]: selected === value,
    },
    className,
  );

  const handleClick = () => {
    if (onChange) {
      onChange(value);
    }
    setSelected(children);
    setIsOpen(false);
  };

  return (
    <li className={variants} onClick={handleClick}>
      {children}
    </li>
  );
};

export {
  SelectRoot as Root,
  SelectOption as Option,
  SelectTrigger as Trigger,
  SelectViewPort as ViewPort,
  SelectOptionsList as OptionsList,
};
