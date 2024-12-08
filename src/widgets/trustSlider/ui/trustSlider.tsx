import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SliderButton } from "./sliderButtons";
import { type Swiper as SwiperType } from "swiper/types";
import { TRUSTING } from "../config";
import styles from "./trustSlider.module.scss";
import "swiper/swiper-bundle.css";

export const TrustSlider: FC = () => {
  const ref = useRef<{ instance: SwiperType }>({ instance: {} as SwiperType });

  return (
    <div className={styles.swiper}>
      <SliderButton swiperInstance={ref} direction="prev" />
      <Swiper
        className={styles.trustSwiper}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView="auto"
        freeMode
        loop
        onSwiper={(swiper) => {
          ref.current.instance = swiper;
        }}
        breakpoints={{
          1199.8: {
            slidesPerView: 6,
          },
          767.8: {
            slidesPerView: 4,
          },
        }}
      >
        {TRUSTING.map(({ alt, src }, index) => (
          <SwiperSlide className={styles.swiperSlide} key={index}>
            <img className={styles.swiperSlideImg} src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButton
        swiperInstance={ref}
        className={styles.sliderButtonRight}
        direction="next"
      />
    </div>
  );
};
