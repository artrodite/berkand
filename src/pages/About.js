import React, { useEffect, useState } from "react";
import Swiper from "../components/Swiper/AboutSwiper";
import References from "../components/References";
import GoTop from "../components/GoTop";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { about } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
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

      <Swiper />

      {/* section1 */}

      <section
        className="my-16 md:my-56 sm:mx-auto flex lg:flex-row flex-col container mx-7 w-auto"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:w-1/2" data-aos="fade-left">
          <span
            className="font-black md:text-2xl text-base"
            data-aos="fade-left"
            data-aos-delay="50"
          >
            {about[0].title1[`${lng}`]}
          </span>
          <span
            className="md:text-2xl text-base md:mt-8 mt-1"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {about[0].desc1[`${lng}`]}
          </span>
        </div>
        <div
          className="xl:ml-20 lg:ml-10 lg:mt-0 mt-5"
          data-aos="fade-right"
          data-aos-delay="50"
        >
          <img
            className="h-3/4 lg:h-full object-cover  rounded-3xl"
            src="/assets/about/about1.png"
            alt=""
          />
        </div>
      </section>

      {/* section2 */}

      <section
        className="my-16 md:my-56 sm:mx-auto flex lg:flex-row-reverse flex-col container mx-7 w-auto"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:w-1/2" data-aos="fade-right">
          <span
            className="font-black md:text-2xl text-base"
            data-aos="fade-left"
            data-aos-delay="50"
          >
            {about[0].title2[`${lng}`]}
          </span>
          <span
            className="md:text-2xl text-base md:mt-8 mt-1"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {about[0].desc2[`${lng}`]}
          </span>
        </div>
        <div
          className="xl:mr-20 lg:mr-10 lg:mt-0 mt-5"
          data-aos="fade-right"
          data-aos-delay="50"
        >
          <img
            className="h-3/4 lg:h-full object-cover rounded-3xl"
            src="/assets/about/about2.png"
            alt=""
          />
        </div>
      </section>

      {/* section3 */}

      <section
        className="my-16 md:my-56 sm:mx-auto flex lg:flex-row flex-col container mx-7 w-auto"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:w-1/2" data-aos="fade-left">
          <span
            className="font-black md:text-2xl text-base"
            data-aos="fade-left"
            data-aos-delay="50"
          >
            {about[0].title3[`${lng}`]}
          </span>
          <span
            className="md:text-2xl text-base md:mt-8 mt-1"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {about[0].desc3[`${lng}`]}
          </span>
        </div>
        <div
          className="xl:ml-20 lg:ml-10 lg:mt-0 mt-5"
          data-aos="fade-right"
          data-aos-delay="50"
        >
          <img
            className="h-3/4 lg:h-full object-cover rounded-3xl"
            src="/assets/about/about3.png"
            alt=""
          />
        </div>
      </section>

      <References />
    </div>
  );
}
