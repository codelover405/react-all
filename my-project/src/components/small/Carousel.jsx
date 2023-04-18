import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { one, two, three } from "../../assets/index";

const Carousels = () => {
  return (
    <div>
      <Carousel
        autoPlay
        centerMode={true}
        dynamicHeight={true}
        showArrows={false}
      >
        <div className="">
          <img src={one} alt="1" className="h-96 object-cover" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={two} alt="2" className="h-96 object-cover" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={three} alt="3" className="h-96 object-cover" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
