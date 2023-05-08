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
            className="w-full h-full object-cover mx-auto"
            src="https://letsplayadrinkinggame.com/wp-content/uploads/2020/09/Regular-show-cast.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            className="w-full h-full object-cover mx-auto"
            src="https://media.wired.com/photos/59330ce9714b881cb2969b3b/191:100/w_1280,c_limit/RegShow_Thumb_Group2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            className="w-full h-full object-cover mx-auto"
            src="https://www.skwigly.co.uk/wp-content/uploads/2020/09/Regular-show-A1-poster-au-e1447099261159-1280x902-1-e1600348321444.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
