import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="xl:h-auto mb-16 mx-auto select-none container w-full xl:block hidden">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            className="h-[649px] w-full object-cover mx-auto rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[649px] w-full object-cover mx-auto rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[649px] w-full object-cover mx-auto rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[649px] w-full object-cover mx-auto rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[649px] w-full object-cover mx-auto rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[649px] w-full object-cover mx-auto rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[649px] w-full object-cover mx-auto rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[649px] w-full object-cover mx-auto rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[649px] w-full object-cover mx-auto rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[649px] w-full object-cover mx-auto rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-7"
      >
        <SwiperSlide>
          <img
            className="h-16 w-24 rounded-xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 w-24 rounded-xl"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 w-24 rounded-xl"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 w-24 rounded-xl"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 w-24 rounded-xl"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 w-24 rounded-xl"
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 w-24 rounded-xl"
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 w-24 rounded-xl"
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 w-24 rounded-xl"
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 w-24 rounded-xl"
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
