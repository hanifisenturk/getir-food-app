import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
// import classes from "./SpecialOfferCarousel.module.css";
import SpecialOffer from "./SpecialOffer";
import PizzaLazza from "../../assets/restorant-banners/pizza_lazza.jpeg";

const SpecialOfferCarousel = () => {
  return (
    <Swiper spaceBetween={16} slidesPerView={2} modules={[Autoplay]} loop>
      <SwiperSlide>
        <SpecialOffer offer={PizzaLazza} />
      </SwiperSlide>
      <SwiperSlide>
        <SpecialOffer offer={PizzaLazza} />
      </SwiperSlide>

      <SwiperSlide>
        <SpecialOffer offer={PizzaLazza} />
      </SwiperSlide>

      <SwiperSlide>
        <SpecialOffer offer={PizzaLazza} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SpecialOfferCarousel;
