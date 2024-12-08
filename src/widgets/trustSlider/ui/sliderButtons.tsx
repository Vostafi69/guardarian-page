import { FC, MutableRefObject } from "react";
import cn from "classnames";
import styles from "./trustSlider.module.scss";
import arrow from "@/assets/images/arrow.svg";
import { Swiper } from "swiper/types";

interface SliderButtonProps {
  direction: "prev" | "next";
  className?: string;
  swiperInstance: MutableRefObject<{ instance: Swiper }>;
}

export const SliderButton: FC<SliderButtonProps> = ({
  direction,
  className,
  swiperInstance,
}) => {
  return (
    <button
      className={cn(styles.sliderButton, className)}
      onClick={() =>
        direction === "next"
          ? swiperInstance.current?.instance.slideNext()
          : swiperInstance.current?.instance.slidePrev()
      }
    >
      <img
        className={styles.swiperButton}
        style={{ rotate: direction === "next" ? "180deg" : "0deg" }}
        src={arrow}
        alt="Arrow"
      />
    </button>
  );
};
