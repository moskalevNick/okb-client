import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SliderBanner.css';

export const SliderBanner = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade, Scrollbar, A11y]}
      spaceBetween={50}
      effect={'fade'}
      slidesPerView={1}
      loop={true}
      navigation={true}
      watchSlidesVisibility={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          {/* <div className="promoRectangle"><div className="promoIMG" style={{backgroundImage: `url(${slide.photo})`}}></div></div> */}
          <div className="promoIMG" style={{backgroundImage: `url(${slide.photo})`}}></div>
          {/* <div><img className={styles.slideImg} src={slide.photo} alt='photo'/></div> */}
        </SwiperSlide>
      ))}
      {/* </div> */}
    </Swiper>
  )

}