import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className="xl:h-auto mb-16 mx-auto select-none container w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/assets/630-buncher-hatti-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/630-buncher-hatti-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/630-buncher-hatti-1.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
