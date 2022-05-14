import classes from "./Carousel.module.css";
import Dominos from "../../assets/banners/dominos_banner.jpg";
import Iftar from "../../assets/banners/iftarda_gelsin.png";
import Kizilay from "../../assets/banners/kizilay_ramazan.jpg";
import LittleCaesars from "../../assets/banners/little_caesars.jpg";
import Whooper from "../../assets/banners/whooper.jpg";
import Ramazan from "../../assets/banners/ramazan_her_siparis.jpg";
import Mudavim from "../../assets/banners/müdavim_3+1.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import NextSlideButton from "./NextSlideButton";
import PrevSlideButton from "./PrevSlideButton";

const Carousel = () => {
  return (
    <div className={classes["carousel-container"]}>
      <Swiper
        speed={500}
        spaceBetween={16}
        slidesPerView={3}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img
            className={classes.banner}
            src={Dominos}
            alt="Dominos Ramadan Campaign"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.banner}
            src={Iftar}
            alt="Dominos Ramadan Campaign"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.banner}
            src={LittleCaesars}
            alt="Dominos Ramadan Campaign"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.banner}
            src={Whooper}
            alt="Dominos Ramadan Campaign"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.banner}
            src={Kizilay}
            alt="Dominos Ramadan Campaign"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.banner}
            src={Ramazan}
            alt="Dominos Ramadan Campaign"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className={classes.banner}
            src={Mudavim}
            alt="Dominos Ramadan Campaign"
          />
        </SwiperSlide>
        <NextSlideButton />
        <PrevSlideButton />
      </Swiper>
    </div>
  );
};

export default Carousel;
