import React from "react";
import CarouselSlide from "./Carousel";
import CategoryImage from "./CategoryImage";
import CatImageMobile from "./CatImageMobile";

const Body = () => {
  return (
    <div>
      <CarouselSlide />
      <CatImageMobile />
      <CategoryImage />
    </div>
  );
};

export default Body;
