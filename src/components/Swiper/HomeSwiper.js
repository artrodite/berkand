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
  const createSwiperSlide = () => {
    let obj = [];

    for (let i = 1; i < 4; i++) {
      obj.push(
        <div className="" data-aos="fade-up" key={i}>
          <SwiperSlide>
            <img src={"/assets/homeSwiper/" + i + ".png"} alt="" />
          </SwiperSlide>
          <img
            className="w-28 h-28 object-contain"
            src={"/assets/brands/" + i + ".png"}
            alt=""
          />
        </div>
      );
    }
    return obj;
  };

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
        {createSwiperSlide()}
      </Swiper>
    </div>
  );
}
