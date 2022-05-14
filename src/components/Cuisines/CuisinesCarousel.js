import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cuisine from "./Cuisine";

const CuisinesCarousel = () => {
  return (
    <Swiper loop={true} speed={500} spaceBetween={16} slidesPerView={8}>
      <SwiperSlide>
        <Cuisine />
      </SwiperSlide>

      <SwiperSlide>
        <Cuisine />
      </SwiperSlide>

      <SwiperSlide>
        <Cuisine />
      </SwiperSlide>

      <SwiperSlide>
        <Cuisine />
      </SwiperSlide>

      <SwiperSlide>
        <Cuisine />
      </SwiperSlide>

      <SwiperSlide>
        <Cuisine />
      </SwiperSlide>

      <SwiperSlide>
        <Cuisine />
      </SwiperSlide>

      <SwiperSlide>
        <Cuisine />
      </SwiperSlide>

      <SwiperSlide>
        <Cuisine />
      </SwiperSlide>
    </Swiper>
  );
};

export default CuisinesCarousel;
