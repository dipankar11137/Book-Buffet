import React from "react";
import Carousel from "./Carousel";
import Card from "./Card";

const Banner = () => {
  return (
    <div className="mt-10 mx-32">
      <div className="grid grid-cols-2">
        <div>
          <Carousel />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Banner;
