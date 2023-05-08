import React, { useEffect, useState } from "react";
import References from "../components/References";
import GoTop from "../components/GoTop";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { home } from "../data";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  let [over, setOver] = useState(false);
  let support_agent = "/assets/icons/support_agent.svg";
  let support_agentHover = "/assets/icons/support_agent-hover.svg";

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

      {/* cable */}

      <div className="absolute z-10 -top-0 left-[18px] min-[1920px]:inline hidden">
        <img className="" src="/assets/cable.svg" alt="" />
      </div>

      {/* section1 */}

      <section className="xl:flex pt-28 pb-72 h-full z-50 hidden container mx-auto">
        <div className="flex flex-col pr-28" data-aos="fade-left">
          <span className="font-normal text-[64px] leading-tight">
            {home[0].section1[0].title[`${lng}`]}
          </span>
          <span className="font-normal text-2xl leading-7 mt-5 text-text-grey">
            {home[0].section1[0].desc[`${lng}`]}
          </span>
          <Link className="w-max mt-10 z-50" to="/contact">
            <button
              className="z-50 w-64 h-11 rounded-md bg-berkand-orange font-semibold text-white flex justify-center items-center border-2 border-berkand-orange hover:bg-white hover:text-berkand-orange duration-500"
              onMouseOver={() => {
                setTimeout(() => setOver(true), 100);
              }}
              onMouseOut={() => {
                setTimeout(() => setOver(false), 100);
              }}
            >
              <img
                className="mr-2"
                src={over ? support_agentHover : support_agent}
                alt=""
              />
              {home[0].section1[0].button[`${lng}`]}
            </button>
          </Link>
        </div>
        <div className="w-full" data-aos="fade-right">
          <img src="/assets/630-buncher-hatti-1.png" alt="" />
        </div>
      </section>

      {/* section2 */}
      <section className="bg-black">
        <div className="w-auto h-screen relative flex  container md:mx-auto mx-7 xl:justify-normal justify-center">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50">
            <img className="xl:inline hidden" src="/assets/world.png" alt="" />
            <img className="xl:hidden" src="/assets/world-mobile.png" alt="" />
          </div>
          <div className="text-white flex flex-col xl:w-2/5 justify-center items-start xl:pr-44 w-80" data-aos="fade-up">
            <span className="font-black text-2xl">
              {home[0].section2[0].title[`${lng}`]}
            </span>
            <span className="font-semibold">
              {home[0].section2[0].subtitle[`${lng}`]}
            </span>
            <div className="font-normal xl:text-xl text-sm mt-9 flex flex-col">
              <span>{home[0].section2[0].desc1[`${lng}`]}</span>
              <span className="mt-7">
                {home[0].section2[0].desc2[`${lng}`]}
              </span>
              <span className="mt-7">
                {home[0].section2[0].desc3[`${lng}`]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* section3 */}

      <section className="w-auto relative py-52 container md:mx-auto mx-7">
        <div className="absolute left-1/2 -translate-x-1/2 z-10 top-11">
          <img className="xl:inline hidden" src="/assets/lamp.png" alt="" />
          <img className="xl:hidden" src="/assets/lamp-mobile.png" alt="" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold xl:text-4xl text-2xl" data-aos="fade-up">
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
