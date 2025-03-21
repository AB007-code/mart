import React from "react";
import "../index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SliderData,
  discoutProducts,
  newArrival,
  bestSale,
  products,
} from "../Product1";
import HeroImg from "../Images/hero-img.png";
import PhoneImg from "../Images/phone-08.png";
import WirelessImg from "../Images/wireless-01.png";
import WatchImg from "../Images/watch-07.png";
import { FaCarRear } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../redux/ActionCreator";

var settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
};
const Home = () => {
  const dispatch = useDispatch();

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

      {/* Big Discount section */}
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
              <div
                className="col productId"
                style={{ height: "380px" }}
                key={ele.id}
              >
                <div className="border h-100 rounded bg-white d-flex flex-column justify-content-evenly">
                  <div
                    className="border rounded-pill text-center ms-2 text-white py-1"
                    style={{ width: "32%", backgroundColor: "#0B3362" }}
                  >
                    {ele.discount}% Off
                  </div>
                  <div
                    className="text-center"
                    style={{ height: "150px", width: "100%" }}
                  >
                    <Link to={`/product/${ele.id}`}>
                      <img
                        src={`${ele.imgUrl}`}
                        className="w-75 h-100 object-fit-contain"
                      />
                    </Link>
                  </div>
                  <div
                    className=" w-75 fw-semibold ms-4 mt-2 d-flex flex-wrap align-content-center"
                    style={{ fontSize: "1.1em", height: "50px" }}
                  >
                    {ele.productName}
                  </div>
                  <div className=" text-warning ms-4 mb-3">
                    <FaStar />
                    <FaStar className="mx-1" />
                    <FaStar />
                    <FaStar className="mx-1" />
                    <FaStar />
                  </div>
                  <div
                    className="d-flex  justify-content-between ms-4 me-4"
                    style={{ height: "35px" }}
                  >
                    <div className="fs-4 fw-semibold ">${ele.price}</div>
                    <button
                      className="addBtn rounded-circle border btn  fs-3 pt-1 h-100 d-flex flex-wrap justify-content-center align-content-center"
                      onClick={() => dispatch(add_to_cart(ele))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Arrival section */}
      <div style={{ height: "1800px" }} className="mt-4">
        <div
          className="d-flex flex-wrap align-content-end justify-content-center fs-1 fw-semibold"
          style={{ height: "120px" }}
        >
          New Arrival
        </div>
        <div className="container d-flex justify-content-center mt-4">
          <div className="row row-cols-3 g-4  w-75 justify-content-center">
            {newArrival.map((ele) => (
              <div className="col" style={{ height: "380px" }} key={ele.id}>
                <div className="border h-100 rounded bg-white d-flex flex-column justify-content-evenly">
                  <div
                    className="text-center"
                    style={{ height: "150px", width: "100%" }}
                  >
                    <Link to={`/product/${ele.id}`}>
                      <img
                        src={`${ele.imgUrl}`}
                        className="w-75 h-100 object-fit-contain"
                      />
                    </Link>
                  </div>
                  <div
                    className=" w-75 fw-semibold ms-4 mt-2 d-flex flex-wrap align-content-center"
                    style={{ fontSize: "1.1em", height: "50px" }}
                  >
                    {ele.productName}
                  </div>
                  <div className=" text-warning ms-4 mb-3">
                    <FaStar />
                    <FaStar className="mx-1" />
                    <FaStar />
                    <FaStar className="mx-1" />
                    <FaStar />
                  </div>
                  <div
                    className="d-flex  justify-content-between ms-4 me-4"
                    style={{ height: "35px" }}
                  >
                    <div className="fs-4 fw-semibold ">${ele.price}</div>
                    <button
                      className="addBtn rounded-circle border btn  fs-3 pt-1 h-100 d-flex flex-wrap justify-content-center align-content-center"
                      onClick={() => dispatch(add_to_cart(ele))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Best Sales Section*/}
      <div
        style={{ backgroundColor: "#F5F8FD", height: "1400px" }}
        className="mt-4"
      >
        <div
          className="d-flex flex-wrap align-content-end justify-content-center fs-1 fw-semibold"
          style={{ height: "120px" }}
        >
          Best Sales
        </div>
        <div className="container d-flex justify-content-center mt-4">
          <div className="row row-cols-3 g-4  w-75 justify-content-center">
            {bestSale.map((ele) => (
              <div className="col" style={{ height: "380px" }} key={ele.id}>
                <div className="border h-100 rounded bg-white d-flex flex-column justify-content-evenly">
                  <div
                    className="text-center"
                    style={{ height: "150px", width: "100%" }}
                  >
                    <Link to={`/product/${ele.id}`}>
                      <img
                        src={`${ele.imgUrl}`}
                        className="w-75 h-100 object-fit-contain"
                      />
                    </Link>
                  </div>
                  <div
                    className=" w-75 fw-semibold ms-4 mt-2 d-flex flex-wrap align-content-center"
                    style={{ fontSize: "1.1em", height: "50px" }}
                  >
                    {ele.productName}
                  </div>
                  <div className=" text-warning ms-4 mb-3">
                    <FaStar />
                    <FaStar className="mx-1" />
                    <FaStar />
                    <FaStar className="mx-1" />
                    <FaStar />
                  </div>
                  <div
                    className="d-flex  justify-content-between ms-4 me-4"
                    style={{ height: "35px" }}
                  >
                    <div className="fs-4 fw-semibold ">${ele.price}</div>
                    <button
                      className="addBtn rounded-circle border btn  fs-3 pt-1 h-100 d-flex flex-wrap justify-content-center align-content-center"
                      onClick={() => dispatch(add_to_cart(ele))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Footer Section*/}
      <div
        className="d-flex flex-column justify-content-center"
        style={{ height: "400px", backgroundColor: "#0F3460" }}
      >
        <div className="container">
          <div className="row row-cols-4">
            <div>
              <h3 className="text-white fw-bold d-flex flex-wrap align-content-center p-2">
                <span className="d-flex flex-wrap align-content-center">
                  {<AiFillShopping />}
                </span>
                Mart
              </h3>
              <p
                style={{ color: "#7395BA", lineHeight: "28px" }}
                className="fw-semibold px-2"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                rutrum elementum diam, sed rhoncus lorem malesuada vitae.
                Vestibulum vitae nulla massa. Cras vitae quam quam. Duis porta,
                diam in.
              </p>
            </div>

            <div>
              <h4 className="text-white p-2">About Us</h4>
              <ul
                style={{
                  listStyle: "none",
                  color: "#7395BA",
                  lineHeight: "40px",
                }}
                className="px-2 fs-5 fw-semibold"
              >
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white p-2">Customer Care</h4>
              <ul
                style={{
                  listStyle: "none",
                  color: "#7395BA",
                  lineHeight: "40px",
                }}
                className="px-2 fs-5 fw-semibold"
              >
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Track Your Order</li>
                <li>Corporate & Bulk Purchasing</li>
                <li>Returns & Refunds</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white p-2">Contact Us</h4>
              <ul
                style={{
                  listStyle: "none",
                  color: "#7395BA",
                  lineHeight: "35px",
                  fontSize: "0.98em",
                }}
                className="px-2 fw-semibold"
              >
                <li>
                  70 Washington Square South, New York, NY 10012, United States
                </li>
                <li>Email: abhilash.vc888@gmail.com</li>
                <li>Phone: +919538450441</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
