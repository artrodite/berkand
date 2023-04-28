import React, { useEffect, useState } from "react";
import Swiper from "../components/Swiper";
import References from "../components/References";
import GoTop from "../components/GoTop";

export default function About() {
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

  return (
    <div>
      {sticky && <GoTop />}

      <Swiper />

      {/* section1 */}

      <section className="my-16 md:my-56 sm:mx-auto flex lg:flex-row flex-col container mx-7 w-auto">
        <div className="flex flex-col lg:w-1/2">
          <span className="font-black md:text-2xl text-base">2010</span>
          <span className="md:text-2xl text-base md:mt-8 mt-1">
            Berkand Makina 2010 yılından bu yana kablo makinaları üretmektedir.
          </span>
        </div>
        <div className="xl:ml-20 lg:ml-10 lg:mt-0 mt-5">
          <img
            className="h-3/4 lg:h-full object-cover  rounded-3xl"
            src="https://www.gannett-cdn.com/media/USATODAY/popcandy/2012/10/30/regularshow-16_9.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
            alt=""
          />
        </div>
      </section>

      {/* section2 */}

      <section className="my-16 md:my-56 sm:mx-auto flex lg:flex-row-reverse flex-col container mx-7 w-auto">
        <div className="flex flex-col lg:w-1/2">
          <span className="font-black md:text-2xl text-base">
            Gelişen sektör
          </span>
          <span className="md:text-2xl text-base md:mt-8 mt-1">
            Fabrikamız, kablo sektörüne yönelik yedek parça üretiminden,
            kapsamlı makine çözümlerine ve mühendislik alanındaki teknolojik
            geliştirmelere kadar faaliyet göstermektedir.
          </span>
        </div>
        <div className="xl:mr-20 lg:mr-10 lg:mt-0 mt-5">
          <img
            className="h-3/4 lg:h-full object-cover rounded-3xl"
            src="/assets/about2.png"
            alt=""
          />
        </div>
      </section>

      {/* section3 */}

      <section className="my-16 md:my-56 sm:mx-auto flex lg:flex-row flex-col container mx-7 w-auto">
        <div className="flex flex-col lg:w-1/2">
          <span className="font-black md:text-2xl text-base">
            Müşteri Odaklı
          </span>
          <span className="md:text-2xl text-base md:mt-8 mt-1">
            Ana hedefimiz müşterilerin gereksinimlerini en üst düzeyde
            karşılamak, stratejimiz ise yeni bilgiler keşfetmeye ve mevcut
            yöntemlerimizi geliştirmeye odaklanmaktır.
          </span>
        </div>
        <div className="xl:ml-20 lg:ml-10 lg:mt-0 mt-5">
          <img
            className="h-3/4 lg:h-full object-cover rounded-3xl"
            src="https://a.ltrbxd.com/resized/sm/upload/1o/yl/2i/c5/xHGTnvmrNaDLyysdvqOGKAcaNpQ-1200-1200-675-675-crop-000000.jpg?v=6d89778ce0"
            alt=""
          />
        </div>
      </section>

      <References />
    </div>
  );
}
