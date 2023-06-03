import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { products } from "../data";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import GoTop from "../components/GoTop";
import { Link, useParams } from "react-router-dom";

export default function ProductsGroup() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  const { group } = useParams();

  const productGroup = products.filter((item) => item.url === group)[0];

  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const createProducts = () => {
    let obj = [];

    productGroup.types.map((p) =>
      obj.push(
        <Link
          to={`/products/${productGroup.url}/${p.url}`}
          className="md:w-max w-full"
          data-aos="fade-up" data-aos-delay={p.index*50}
        >
          <div
            className="flex flex-col justify-center items-center text-center sm:w-80 h-full border-2 rounded-lg border-berkand-orange text-berkand-orange hover:text-white hover:bg-berkand-orange cursor-pointer duration-500"
            onMouseOver={() => {
              setTimeout(() => setHoveredProductId(p.index), 150);
            }}
            onMouseOut={() => {
              setTimeout(() => setHoveredProductId(null), 150);
            }}
          >
            {productGroup.url === "pay-off-and-take-ups" &&
            p.url !== "double-pay-off" ? (
              <img
                className="mt-9 w-12"
                src={hoveredProductId === p.index ? p.iconHover : p.icon}
                alt=""
              />
            ) : p.url === "tubular-drum" ||
              p.url === "accumulator" ||
              p.url === "double-pay-off" ||
              p.url === "buncher-twist-line-630-800" ||
              p.url === "buncher-twist-line-1000-1250" ? (
              <span class="material-symbols-outlined xl:text-7xl text-5xl mt-9 rotate-90">
                {p.icon}
              </span>
            ) : (
              <span class="material-symbols-outlined xl:text-7xl text-5xl mt-9">
                {p.icon}
              </span>
            )}
            <span className="text-2xl font-black mt-9 mb-7 md:mx-5 mx-10">
              {p.name[`${lng}`]}
            </span>
          </div>
        </Link>
      )
    );
    return obj;
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {sticky && <GoTop />}
      <Navbar group={productGroup.url} />

      <div className="w-auto sm:mx-auto mx-7 container mt-20 md:mt-16 mb-16 flex justify-center xl:justify-normal text-center">
        <span className="font-bold xl:text-6xl text-4xl">
          {productGroup.title[`${lng}`]}
        </span>
      </div>

      <div className="w-auto sm:mx-auto mx-7 container mt-20 md:mt-16 mb-24 md:mb-52">
        <div className="xl:inline flex justify-center ">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-24">
            {createProducts()}
          </div>
        </div>
      </div>
    </div>
  );
}
