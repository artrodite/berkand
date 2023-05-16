import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-72 xl:h-[643px] lg:h-[426px] md:h-[342px] my-28 mx-auto select-none container" data-aos="fade-up">
      <Swiper
        navigation={true}
        modules={[Navigation]}
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
