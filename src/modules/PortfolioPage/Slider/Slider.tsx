import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Slider.module.css';
import { slideType } from '../../../types/slide';

export const Slider = ({ slides }: { slides: slideType[] }) => {
  return (
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        grabCursor={true}
        loop={true}
        navigation={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        scrollbar={{ draggable: true }}
        className={styles.sliderPortfolio}
        // className='sliderPortfolio'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}  className={styles.slide}>
            <img
              className={styles.slideImg}
              src={slide.imgPath}
              alt={'portfolio image ' + slide.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};
