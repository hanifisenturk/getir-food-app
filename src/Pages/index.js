import classes from "./index.module.css";
import Carousel from "../components/Carousel/Carousel";
import SpecialOfferSection from "../components/Explore/SpecialOfferSection";
import CuisinesSection from "../components/Cuisines/CuisinesSection";
import MainContainer from "../components/MainContainer/MainContainer";

const Index = () => {
  return (
    <section className={classes.container}>
      <Carousel />
      <SpecialOfferSection />
      <CuisinesSection />
      <MainContainer />
    </section>
  );
};

export default Index;
