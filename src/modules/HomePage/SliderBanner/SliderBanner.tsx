import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Autoplay,
  EffectFade,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SliderBanner.css';
import { slideType } from '../../../types/slide';

export const SliderBanner = ({ slides }: { slides: slideType[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade, Scrollbar, A11y]}
      spaceBetween={50}
      effect={'fade'}
      slidesPerView={1}
      loop={true}
      navigation={true}
      // watchSlidesVisibility={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className='promoIMG'
            style={{ backgroundImage: `url(${slide.imgPath})` }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
