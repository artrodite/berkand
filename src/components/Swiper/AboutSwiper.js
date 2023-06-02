import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";

import "./aboutSwiper.css"

export default function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-72 xl:h-[643px] lg:h-[426px] md:h-[342px] sm:my-28 mb-20 mt-16 mx-auto select-none container" data-aos="fade-up">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="h-full w-auto"
      >
        <SwiperSlide className="flex">
          <img
            className="w-full h-full object-contain mx-auto"
            src="/assets/about/swiper/swiper1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            className="w-full h-full object-contain mx-auto"
            src="/assets/about/swiper/swiper2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            className="w-full h-full object-contain mx-auto"
            src="/assets/about/swiper/swiper3.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
