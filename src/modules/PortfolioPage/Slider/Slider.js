import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Slider.css';

export const Slider = ({ slides }) => {
  return (
    <div className="swipWrap">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        grabCursor={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        hiddenClass='swiper-button-next'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
              <img className={styles.slideImg} src={slide.photo} alt='photo'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
    
  )

}