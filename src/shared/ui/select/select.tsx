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
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from "react";
import arrow from "@/assets/images/arrow-b.svg";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

interface SelectContextType {
  selected: ReactNode | null;
  isOpen: boolean;
  currentValue: string | undefined;
  setCurrentValue: Dispatch<SetStateAction<string | undefined>>;
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

interface SelectRootProps extends HTMLAttributes<HTMLDivElement> {
  onIsOpen?: (isOpen: boolean) => void;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

const SelectRoot: FC<SelectRootProps> = ({
  className,
  children,
  onIsOpen,
  onValueChange,
  defaultValue,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<ReactNode | null>(null);
  const [currentValue, setCurrentValue] = useState<string | undefined>(
    defaultValue,
  );
  const rootRef = useRef<HTMLDivElement>(null);
  useClickOutside<HTMLDivElement>(rootRef, () => setIsOpen(false));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    if (onIsOpen) {
      onIsOpen(isOpen);
    }

    if (onValueChange) {
      onValueChange(currentValue || "");
    }
  }, [isOpen, onIsOpen, onValueChange, currentValue]);

  const variants = cn(styles.selectRoot, className);

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        selected,
        setIsOpen,
        setSelected,
        currentValue,
        setCurrentValue,
      }}
    >
      <div className={variants} ref={rootRef} {...rest}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};
interface SelectTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ children, className, ...rest }, ref) => {
    const { selected, setIsOpen, isOpen } = useSelectContext();

    const handleClick = (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
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
  const {
    setSelected,
    selected,
    setCurrentValue,
    setIsOpen,
    onChange,
    currentValue,
  } = useSelectContext();

  useEffect(() => {
    if (selected !== children && currentValue === value) {
      setSelected(children);
    }
  }, [setSelected, selected, currentValue, value, children]);

  const variants = cn(
    styles.selectOption,
    {
      [styles.selectOPtionSelected]: currentValue === value,
    },
    className,
  );

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (onChange) {
      onChange(value);
    }
    setCurrentValue(value);
    setSelected(children);
    setIsOpen(false);
  };

  return (
    <li className={variants} onClick={handleClick}>
      {children}
    </li>
  );
};

SelectRoot.displayName = "SelectRoot";
SelectOption.displayName = "SelectOption";
SelectOptionsList.displayName = "SelectOptionsList";
SelectTrigger.displayName = "SelectTrigger";
SelectViewPort.displayName = "SelectViewPort";

export {
  SelectRoot as Root,
  SelectOption as Option,
  SelectTrigger as Trigger,
  SelectViewPort as ViewPort,
  SelectOptionsList as OptionsList,
};
