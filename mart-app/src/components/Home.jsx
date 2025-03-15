import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData, discoutProducts } from "../Product1";
import HeroImg from "../Images/hero-img.png";
import PhoneImg from "../Images/phone-08.png";
import WirelessImg from "../Images/wireless-01.png";
import WatchImg from "../Images/watch-07.png";
import { FaCarRear } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
console.log(discoutProducts);
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
      <div style={{ backgroundColor: "#F5F8FD" }}>
        <div className="container text-center" style={{ height: "500px" }}>
          <Slider {...settings}>
            <div className="d-flex">
              <div
                className="w-50 text-start ms-5  d-flex flex-wrap align-content-center"
                style={{ height: "500px" }}
              >
                <h1 style={{ fontSize: "2.8em" }}>{SliderData[0].title}</h1>
                <p style={{ fontSize: "1.1em" }}>{SliderData[0].desc}</p>
                <div className="fw-semibold">Visit Collections</div>
              </div>
              <div
                className="w-50  d-flex justify-content-center flex-wrap align-content-center"
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
                className="w-50 text-start ms-5  d-flex flex-wrap align-content-center"
                style={{ height: "500px" }}
              >
                <h1 style={{ fontSize: "2.8em" }}>{SliderData[1].title}</h1>
                <p style={{ fontSize: "1.1em" }}>{SliderData[1].desc}</p>
                <div className="fw-semibold">Visit Collections</div>
              </div>
              <div
                className="w-50  d-flex justify-content-center flex-wrap align-content-center"
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
                className="w-50 text-start ms-5  d-flex flex-wrap align-content-center"
                style={{ height: "500px" }}
              >
                <h1 style={{ fontSize: "2.8em" }}>{SliderData[2].title}</h1>
                <p style={{ fontSize: "1.1em" }}>{SliderData[2].desc}</p>
                <div className="fw-semibold">Visit Collections</div>
              </div>
              <div
                className="w-50  d-flex justify-content-center flex-wrap align-content-center "
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
                className="w-50 text-start ms-5 d-flex flex-wrap align-content-center"
                style={{ height: "500px" }}
              >
                <h1 style={{ fontSize: "2.8em" }}>{SliderData[3].title}</h1>
                <p style={{ fontSize: "1.1em" }}>{SliderData[3].desc}</p>
                <div className="fw-semibold">Visit Collections</div>
              </div>
              <div
                className="w-50 d-flex justify-content-center flex-wrap align-content-center"
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
      </div>

      <div className="container" style={{ height: "300px" }}>
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

      <div
        style={{ backgroundColor: "#F5F8FD", height: "1000px" }}
        className="mt-4"
      >
        <div
          className="d-flex flex-wrap align-content-end justify-content-center fs-1 fw-semibold"
          style={{ height: "120px" }}
        >
          Big Discount
        </div>
        <div className="container d-flex justify-content-center mt-4">
          <div className="row row-cols-3 g-4  w-75">
            {discoutProducts.map((ele) => (
              <div className="col" style={{ height: "380px" }}>
                <div className="border h-100 rounded bg-white d-flex flex-column justify-content-evenly">
                  <div
                    className="border rounded-pill text-center ms-2 text-white py-1"
                    style={{ width: "32%", backgroundColor: "#0B3362" }}
                  >
                    {ele.discount}% Off
                  </div>
                  <div
                    className="border text-center"
                    style={{ height: "150px", width: "100%" }}
                  >
                    <img
                      src={`${ele.imgUrl}`}
                      className="w-75 h-100 object-fit-contain"
                    />
                  </div>
                  <div
                    className="border w-75 fw-semibold ms-4"
                    style={{ fontSize: "1.1em", height: "50px" }}
                  >
                    {ele.productName}
                  </div>
                  <div className="border text-warning ms-4">
                    <FaStar />
                    <FaStar className="mx-1" />
                    <FaStar />
                    <FaStar className="mx-1" />
                    <FaStar />
                  </div>
                  <div className="d-flex  justify-content-between border ms-4 me-4">
                    <div className="fs-4 fw-semibold ">${ele.price}</div>
                    <button className="rounded-circle border fs-3  w-25 text-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
