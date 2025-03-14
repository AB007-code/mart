import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "../Product1";
import HeroImg from "../Images/hero-img.png";
import PhoneImg from "../Images/phone-08.png";
import WirelessImg from "../Images/wireless-01.png";
import WatchImg from "../Images/watch-07.png";
import { FaCarRear } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
console.log(SliderData);
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
      <div className="container text-center" style={{ height: "500px" }}>
        <Slider {...settings} style={{ backgroundColor: "#F5F8FD" }}>
          <div className="d-flex">
            <div
              className="w-50 text-start ms-5 mb-5 d-flex flex-wrap align-content-end"
              style={{ height: "500px" }}
            >
              <h1 style={{ fontSize: "2.8em" }}>{SliderData[0].title}</h1>
              <p style={{ fontSize: "1.1em" }}>{SliderData[0].desc}</p>
              <div classNameName="fw-semibold">Visit Collections</div>
            </div>
            <div
              className="w-50  d-flex justify-content-center flex-wrap align-content-end mb-5"
              style={{ height: "500px" }}
            >
              <div className="h-50 w-100">
                <img
                  className="h-100 w-100 object-fit-contain"
                  src={`${HeroImg}`}
                  alt="img2"
                />
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div
              className="w-50 text-start ms-5 mb-5 d-flex flex-wrap align-content-end"
              style={{ height: "500px" }}
            >
              <h1 style={{ fontSize: "2.8em" }}>{SliderData[1].title}</h1>
              <p style={{ fontSize: "1.1em" }}>{SliderData[1].desc}</p>
              <div className="fw-semibold">Visit Collections</div>
            </div>
            <div
              className="w-50  d-flex justify-content-center flex-wrap align-content-end mb-5"
              style={{ height: "500px" }}
            >
              <div className="h-50 w-100">
                <img
                  className="h-100 w-100 object-fit-contain"
                  src={`${PhoneImg}`}
                  alt="img2"
                />
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div
              className="w-50 text-start ms-5 mb-5 d-flex flex-wrap align-content-end"
              style={{ height: "500px" }}
            >
              <h1 style={{ fontSize: "2.8em" }}>{SliderData[2].title}</h1>
              <p style={{ fontSize: "1.1em" }}>{SliderData[2].desc}</p>
              <div className="fw-semibold">Visit Collections</div>
            </div>
            <div
              className="w-50  d-flex justify-content-center flex-wrap align-content-end mb-5"
              style={{ height: "500px" }}
            >
              <div className="h-50 w-100">
                <img
                  className="h-100 w-100 object-fit-contain"
                  src={`${WirelessImg}`}
                  alt="img3"
                />
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div
              className="w-50 text-start ms-5 mb-5 d-flex flex-wrap align-content-end"
              style={{ height: "500px" }}
            >
              <h1 style={{ fontSize: "2.8em" }}>{SliderData[3].title}</h1>
              <p style={{ fontSize: "1.1em" }}>{SliderData[3].desc}</p>
              <div className="fw-semibold">Visit Collections</div>
            </div>
            <div
              className="w-50 d-flex justify-content-center flex-wrap align-content-end mb-5"
              style={{ height: "500px" }}
            >
              <div className="h-50 w-100">
                <img
                  className="h-100 w-100 object-fit-contain"
                  src={`${WatchImg}`}
                  alt="img4"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="container mt-5" style={{ height: "300px" }}>
        <div className="row row-cols-4 g-4 p-4 h-100">
          <div className="col h-100 px-2 py-4">
            <div
              className="border h-100 text-center d-flex  flex-column  justify-content-evenly"
              style={{ backgroundColor: "#FDEFE6" }}
            >
              <div>
                <FaCarRear className="bg-white p-2 fs-1 rounded-circle" />
              </div>

              <div className="fw-semibold fs-5">Free Shipping</div>
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
          </div>

          <div className="col h-100 px-2 py-4">
            <div
              className="border h-100 text-center d-flex  flex-column  justify-content-evenly"
              style={{ backgroundColor: "#CEEBE9" }}
            >
              <div>
                <IoCard className="bg-white p-2 fs-1 rounded-circle" />
              </div>

              <div className="fw-semibold fs-5">Free Shipping</div>
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
          </div>

          <div className="col h-100 px-2 py-4">
            <div
              className="border h-100 text-center d-flex  flex-column  justify-content-evenly"
              style={{ backgroundColor: "#E4F2B4" }}
            >
              <div>
                <FaShieldAlt className="bg-white p-2 fs-1 rounded-circle" />
              </div>

              <div className="fw-semibold fs-5">Free Shipping</div>
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
          </div>

          <div className="col h-100 px-2 py-4">
            <div
              className="border h-100 text-center d-flex  flex-column  justify-content-evenly"
              style={{ backgroundColor: "#D6E5FC" }}
            >
              <div>
                <IoHeadset className="bg-white p-2 fs-1 rounded-circle" />
              </div>

              <div className="fw-semibold fs-5">Free Shipping</div>
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
