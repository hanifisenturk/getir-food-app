import { useSwiper } from "swiper/react";

const NextSlideButton = () => {
  const swiper = useSwiper();
  return (
    <div onClick={() => swiper.slideNext()} className="slide-button--container">
      <svg
        data-testid="icon"
        color="#5d3ebc"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        className="slide-button slide-button--right"
        width="14"
        height="14"
      >
        <path d="M3.293 13.707a0.996 0.996 0 0 0 1.411 0l6.002 -6.002a0.996 0.996 0 0 0 0 -1.411L4.704 0.293c-0.39 -0.39 -1.02 -0.39 -1.411 0s-0.39 1.02 0 1.411l5.292 5.292L3.293 12.287a1.008 1.008 0 0 0 0 1.421z" />
      </svg>
    </div>
  );
};

export default NextSlideButton;
