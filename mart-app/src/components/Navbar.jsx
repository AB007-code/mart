import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { BsFillCartCheckFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <div class="container-fluid border p-2">
        <div class="d-flex justify-content-around flex-wrap align-content-center">
          <div>
            <div class=" d-flex">
              <span class="d-flex flex-column justify-content-center fs-3">
                {<AiFillShopping />}
              </span>
              <div class="d-flex flex-wrap align-content-center">
                <span class="fw-bold fs-3">Mart</span>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex justify-content-center">
              <Link
                class="nav-link active fw-semibold px-2 py-1 fs-5"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>

              <Link
                class="nav-link active fw-semibold px-2 py-1 fs-5 mx-4"
                to="/shop"
              >
                Shop
              </Link>
              <Link
                class="nav-link active fw-semibold px-2 py-1 fs-5"
                to="/cart"
              >
                Cart
              </Link>
            </div>
          </div>
          <div>
            <div class="p-1">
              <button class="me-3 btn btn-dark px-2 py-1">
                {<RiContactsFill />}
              </button>
              <button class="btn btn-dark  px-2 py-1">
                {<BsFillCartCheckFill />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
