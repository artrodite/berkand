import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { products } from "../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useParams } from "react-router-dom";

export default function ProductSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { group, types } = useParams();

  const product = products
    .filter((item) => item.url === group)[0]
    .types.filter((item) => item.url === types)[0];

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
        {product.slide.map((p) => (
          <SwiperSlide>
            <img
              className="h-[649px] w-full object-cover mx-auto rounded-2xl"
              src={p.src}
              alt=""
            />
          </SwiperSlide>
        ))}
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
        {product.slide.map((p) => (
          <SwiperSlide>
            <img className="h-16 w-24 rounded-xl" src={p.src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
