import { useSwiper } from "swiper/react";
const PrevSlideButton = () => {
  const swiper = useSwiper();
  return (
    <div onClick={() => swiper.slidePrev()} className="slide-button--container">
      <svg
        data-testid="icon"
        color="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="slide-button slide-button--left"
      >
        <path d="M24.472.669a2.277 2.277 0 0 0-3.224 0L7.529 14.388a2.277 2.277 0 0 0 0 3.224l13.719 13.719c.892.892 2.332.892 3.224 0s.892-2.332 0-3.224L12.376 16.011 24.472 3.915a2.304 2.304 0 0 0 0-3.247z" />
      </svg>
    </div>
  );
};

export default PrevSlideButton;
