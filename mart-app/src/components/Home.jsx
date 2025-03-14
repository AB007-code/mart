import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "../Product1";
import HeroImg from "../Images/hero-img.png";
console.log(SliderData);
let styleing = {
  sytle1: {
    height: "600px",
  },
};
var settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
};
const Home = () => {
  return (
    <>
      <div class="container text-center">
        <Slider {...settings}>
          <div class="border d-flex flex-wrap align-content-center">
            <div class="w-50 border">
              <h1>{SliderData[0].title}</h1>
              <p>{SliderData[0].desc}</p>
              <div>Visit Collections</div>
            </div>
            <div class="w-50 border d-flex justify-content-center">
              <img src={`${HeroImg}`} width="50%" />
            </div>
          </div>
          <div class="border">
            <h3 style={{ height: "500px" }}>2</h3>
          </div>
          <div class="border">
            <h3 style={{ height: "500px" }}>3</h3>
          </div>
          <div class="border">
            <h3 style={{ height: "500px" }}>4</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Home;
