import React, { useEffect, useState } from "react";
import References from "../components/References";
import GoTop from "../components/GoTop";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { home } from "../data";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeSwiper from "../components/HomeSwiper";

export default function Home() {
  let [over, setOver] = useState(false);
  let [over2, setOver2] = useState(false);
  let support_agent = "/assets/icons/support_agent.svg";
  let support_agentHover = "/assets/icons/support_agent-hover.svg";
  let search = "/assets/icons/search.svg";
  let search_hover = "/assets/icons/search-hover.svg";

  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {sticky && <GoTop />}

      <Navbar />

      {/* section1 */}

      <section className="flex xl:pt-28 pt-20 pb-72 h-full container mx-auto xl:px-0 px-5">
        <div
          className="flex flex-col xl:pr-28 w-full xl:text-start text-center"
          data-aos="fade-left"
        >
          <span
            className="xl:font-normal font-bold text-4xl xl:text-[64px] leading-tight"
            data-aos="fade-left"
            data-aos-delay="50"
          >
            {home[0].section1[0].title[`${lng}`]}
          </span>
          <span
            className="font-normal xl:text-2xl text-xl leading-7 xl:mt-5 mt-6 text-text-grey"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {home[0].section1[0].desc[`${lng}`]}
          </span>
          <div
            className="xl:hidden w-auto"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <HomeSwiper />
          </div>
          <div className="flex xl:flex-row flex-col mt-10">
            <Link className="xl:w-max w-full xl:mr-12" to="/products">
              <button
                className="xl:w-64 w-full h-11 rounded-md bg-berkand-blue font-semibold text-white flex justify-center items-center border-2 border-berkand-blue hover:bg-white hover:text-berkand-blue duration-500"
                onMouseOver={() => {
                  setTimeout(() => setOver(true), 100);
                }}
                onMouseOut={() => {
                  setTimeout(() => setOver(false), 100);
                }}
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <img
                  className="mr-2"
                  src={over ? search_hover : search}
                  alt=""
                />
                {home[0].section1[0].productsButton[`${lng}`]}
              </button>
            </Link>
            <Link className="xl:w-max w-full xl:mt-0 mt-6" to="/contact">
              <button
                className="xl:w-64 w-full h-11 rounded-md bg-berkand-orange font-semibold text-white flex justify-center items-center border-2 border-berkand-orange hover:bg-white hover:text-berkand-orange duration-500"
                onMouseOver={() => {
                  setTimeout(() => setOver2(true), 100);
                }}
                onMouseOut={() => {
                  setTimeout(() => setOver2(false), 100);
                }}
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <img
                  className="mr-2"
                  src={over2 ? support_agentHover : support_agent}
                  alt=""
                />
                {home[0].section1[0].contactButton[`${lng}`]}
              </button>
            </Link>
          </div>
        </div>
        <div
          className="xl:inline hidden w-1/2"
          data-aos="fade-right"
          data-aos-delay="50"
        >
          <HomeSwiper />
        </div>
      </section>

      {/* section2 */}
      <section className="bg-black">
        <div className="w-auto h-screen relative flex  container md:mx-auto mx-7 xl:justify-normal justify-center">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 max-sm:w-screen w-auto">
            <img
              src="/assets/world.png"
              alt=""
              data-aos="fade-up"
              data-aos-delay="280"
            />
          </div>
          <div className="text-white flex flex-col xl:w-2/5 justify-center items-start xl:pr-44 w-80">
            <span
              className="font-black text-2xl"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {home[0].section2[0].title[`${lng}`]}
            </span>
            <span
              className="font-semibold"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {home[0].section2[0].subtitle[`${lng}`]}
            </span>
            <div className="font-normal xl:text-xl text-sm mt-9 mb-11 flex flex-col">
              <span data-aos="fade-up" data-aos-delay="150">
                {home[0].section2[0].desc1[`${lng}`]}
              </span>
              <span className="mt-7" data-aos="fade-up" data-aos-delay="200">
                {home[0].section2[0].desc2[`${lng}`]}
              </span>
              <span className="mt-7" data-aos="fade-up" data-aos-delay="250">
                {home[0].section2[0].desc3[`${lng}`]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* section3 */}

      <section className="w-auto relative py-52 container md:mx-auto mx-7">
        <div className="flex flex-col">
          <span
            className="font-semibold xl:text-4xl text-2xl"
            data-aos="fade-up"
          >
            {home[0].section3[0].title[`${lng}`]}
          </span>
          <div className="flex flex-col mt-16" data-aos="fade-up">
            <span className="font-semibold text-xl">
              {home[0].section3[1].subtitle[`${lng}`]}
            </span>
            <span className="font-normal xl:text-xl text-sm mt-6">
              {home[0].section3[1].desc[`${lng}`]}
            </span>
          </div>
          <div className="flex flex-col mt-16" data-aos="fade-up">
            <span className="font-semibold text-xl">
              {home[0].section3[2].subtitle[`${lng}`]}
            </span>
            <span className="font-normal xl:text-xl text-sm mt-6">
              {home[0].section3[2].desc[`${lng}`]}
            </span>
          </div>
          <div className="flex flex-col mt-16" data-aos="fade-up">
            <span className="font-semibold text-xl">
              {home[0].section3[3].subtitle[`${lng}`]}
            </span>
            <span className="font-normal xl:text-xl text-sm mt-6">
              {home[0].section3[3].desc[`${lng}`]}
            </span>
          </div>
          <div className="flex flex-col mt-16" data-aos="fade-up">
            <span className="font-semibold text-xl">
              {home[0].section3[4].subtitle[`${lng}`]}
            </span>
            <span className="font-normal xl:text-xl text-sm mt-6">
              {home[0].section3[4].desc[`${lng}`]}
            </span>
          </div>
        </div>
      </section>

      <References />
    </div>
  );
}
