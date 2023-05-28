import React, { useEffect, useState } from "react";
import References from "../components/References";
import GoTop from "../components/GoTop";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { home } from "../data";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeSwiper from "../components/Swiper/HomeSwiper";

export default function Home() {
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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {sticky && <GoTop />}

      <Navbar />

      {/* section1 */}

      <section className="flex xl:pt-28 pt-20 xl:pb-72 pb-6 h-full container mx-auto xl:px-0 px-5">
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
            className="xl:hidden w-auto xl:mt-0 mt-4"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <HomeSwiper />
          </div>
          <div className="flex xl:flex-row flex-col xl:mt-10 mt-0">
            <Link className="xl:w-64 w-full h-11 xl:mr-12 rounded-md bg-berkand-blue font-semibold text-white flex justify-center items-center border-2 border-berkand-blue hover:bg-white hover:text-berkand-blue transition-all duration-500" to="/products">
              <div className=" flex items-center">
                <span class="material-symbols-outlined mr-2">search</span>
                {home[0].section1[0].productsButton[`${lng}`]}
              </div>
            </Link>
            <Link
              className="xl:w-64 w-full h-11 flex justify-center items-center xl:mt-0 mt-6 rounded-md bg-berkand-orange font-semibold text-white  border-2 border-berkand-orange hover:bg-white hover:text-berkand-orange duration-500"
              to="/contact"
            >
              <div className="flex items-center">
                <span class="material-symbols-outlined mr-2">support_agent</span>
                {home[0].section1[0].contactButton[`${lng}`]}
              </div>
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 max-[515px]:w-screen w-auto">
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
            <div className="font-normal xl:text-xl text-sm mt-9 mb-20 flex flex-col">
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
