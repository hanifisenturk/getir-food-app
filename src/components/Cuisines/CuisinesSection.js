import ContainerHeader from "../../UI/ContainerHeader";
import SliderButton from "../../UI/SliderButton";
import CuisinesCarousel from "./CuisinesCarousel";
import classes from "./CuisinesSection.module.css";
const CuisinesSection = () => {
  return (
    <section className={classes["cuisines-section--container"]}>
      <ContainerHeader>
        <h5>Mutfaklar</h5>

        <div className={classes["cuisines-section--actions"]}>
          <button className={classes["cuisines-section--all"]}>
            Tümünü Gör (10)
          </button>

          <div className={classes["cuisines-section--slider_container"]}>
            <SliderButton />

            {/* <div className={classes["cuisines-section--slider_button"]}>
              <svg
                data-testid="icon"
                color="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M24.472.669a2.277 2.277 0 0 0-3.224 0L7.529 14.388a2.277 2.277 0 0 0 0 3.224l13.719 13.719c.892.892 2.332.892 3.224 0s.892-2.332 0-3.224L12.376 16.011 24.472 3.915a2.304 2.304 0 0 0 0-3.247z" />
              </svg>
            </div>

            <div className={classes["cuisines-section--slider_button"]}>
              <svg
                data-testid="icon"
                color="#5d3ebc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M3.293 13.707a0.996 0.996 0 0 0 1.411 0l6.002 -6.002a0.996 0.996 0 0 0 0 -1.411L4.704 0.293c-0.39 -0.39 -1.02 -0.39 -1.411 0s-0.39 1.02 0 1.411l5.292 5.292L3.293 12.287a1.008 1.008 0 0 0 0 1.421z" />
              </svg>
            </div> */}
          </div>
        </div>
      </ContainerHeader>
      <CuisinesCarousel />
    </section>
  );
};

export default CuisinesSection;
