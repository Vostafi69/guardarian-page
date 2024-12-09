import { FC, useRef } from "react";
import { STEPS } from "../config";
import { MotionExchangeStep } from "./exchangeStep";
import { useExchangeStepsAnim } from "./useExchangeStepsAnim";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./exchangeSteps.module.scss";
import "swiper/swiper-bundle.css";

export const ExchangeSteps: FC = () => {
  const { ref, rotates, translateY } = useExchangeStepsAnim();
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.exchangeSteps} ref={ref}>
      <Swiper
        modules={[Pagination]}
        className={styles.stepsSlider}
        pagination={{
          clickable: true,
          bulletActiveClass: styles.bulletActive,
          bulletClass: styles.bullet,
        }}
        slidesPerView={1}
        spaceBetween={24}
        freeMode
        breakpoints={{
          767.8: {
            slidesPerView: 3,
          },
        }}
      >
        {STEPS.map((step, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <MotionExchangeStep
              step={step}
              style={{
                rotate: rotates[index],
                translateY: translateY,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperPagination} ref={paginationRef}></div>
    </div>
  );
};
