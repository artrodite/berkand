import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { home } from "../data";
import { useTranslation } from "react-i18next";
import ProductSwiper from "../components/ProductSwiper";
import GoTop from "../components/GoTop";

export default function Product() {
  let [over, setOver] = useState(false);
  let support_agent = "/assets/icons/support_agent.svg";
  let support_agentHover = "/assets/icons/support_agent-hover.svg";

  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

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

      {/* section1 */}

      <section className="flex xl:mt-24 container sm:mx-auto mx-7 w-auto justify-between xl:flex-row flex-col-reverse items-center">
        <div className="flex flex-col xl:pr-28 pr-0 xl:w-1/2 w-full">
          <span className="font-black text-5xl leading-tight xl:inline hidden">
            EKSTRUDER
          </span>
          <span className="font-medium xl:text-2xl text-xl xl:text-grey text-black xl:mt-0 mt-11">
            BERKAND Ekstruder
          </span>
          <span className="font-normal xl:text-2xl text-base leading-7 xl:mt-7 mt-4">
            Eritilmek istenen granül besleme hunisi ile kovan içerisine manuel
            veya otomatik sistemler ile aktarılır daha sonra da tellerin üzerine
            kaplanır.
          </span>
          <Link className="xl:w-max xl:mt-32 mt-11" to="/contact">
            <button
              className="z-50 xl:w-64 w-full h-11 rounded-md bg-berkand-orange font-semibold text-white flex justify-center items-center border-2 border-berkand-orange hover:bg-white hover:text-berkand-orange duration-500"
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
        <div className="w-auto">
          <img className="" src="/assets/extruder-hatti.png" alt="" />
        </div>
      </section>

      {/* section2 */}

      <section className="container sm:mx-auto mx-7 w-auto mt-20 xl:mt-80 xl:mb-64">
        <div className="xl:w-1/2 flex flex-col justify-normal">
          <span className="font-semibold xl:font-bold text-2xl xl:text-3xl">
            Kısaca Makinamız.
          </span>
          <div className="flex flex-col">
            <div className="flex flex-col mt-8">
              <span className="font-semibold xl:font-medium xl:text-2xl">
                Ne İşe Yarar.
              </span>
              <span className="mt-1 xl:mt-4 xl:text-xl">
                Eritilmek istenen granül besleme hunisi ile kovan içerisine
                manuel veya otomatik sistemler ile aktarılır daha sonra da
                tellerin üzerine kaplanır.{" "}
              </span>
            </div>
            <div className="flex flex-col mt-8">
              <span className="font-semibold  xl:font-medium xl:text-2xl">
                Ek Özellik.
              </span>
              <span className="mt-1 xl:mt-4 xl:text-xl">
                Kablolardaki renk ve çizgi işlemleri de bu makinalar tarafından
                gerçekleşmektedir.
              </span>
            </div>
            <div className="flex flex-col mt-8">
              <span className="font-semibold  xl:font-medium xl:text-2xl">
                Ne İle Çalışır.
              </span>
              <span className="mt-1 xl:mt-4 xl:text-xl">
                Ekstruder makinaları PVC, XLPE, HFFR, PE malzemeleri kullanımına
                uygundur.
              </span>
            </div>
          </div>
        </div>
      </section>

      <ProductSwiper />

      {/* section3 */}
      <section className="xl:my-[430px] my-40 container sm:mx-auto mx-7 w-auto">
        <div className="flex flex-col xl:flex-row text-center xl:text-start">
          <span className="font-semibold text-3xl xl:text-5xl">
            Siz Ve Takımınız İçin En İyi Seçenek.
          </span>
          <div className="grid grid-cols-2 gap-x-4 xl:gap-x-32 gap-y-9 xl:gap-y-28 mt-16 xl:mt-0 xl:ml-16">
            <div className="flex flex-col justify-center items-center text-center min-[380px]:pb-6 xl:pb-0">
              <img
                className="w-12 h-12 xl:w-16 xl:h-16"
                src="/assets/icons/eco.svg"
                alt=""
              />
              <span className="font-semibold text-xl xl:text-3xl">
                Tasarruflu
              </span>
              <span className="font-light mt-3 xl:text-xl">
                Yüksek teklonoji elektronikler ile enerjiden tasarrruf edin.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center pb-6">
              <img
                className="w-12 h-12 xl:w-16 xl:h-16"
                src="/assets/icons/durable.svg"
                alt=""
              />
              <span className="font-semibold text-xl xl:text-3xl">
                Dayanıklı
              </span>
              <span className="font-light mt-3 xl:text-xl">
                Kaliteli işçiliği ile uzun süren bir kullanım sağlayın.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center pb-6">
              <img
                className="w-12 h-12 xl:w-16 xl:h-16"
                src="/assets/icons/speed.svg"
                alt=""
              />
              <span className="font-semibold text-xl xl:text-3xl">Hızlı</span>
              <span className="font-light mt-3 xl:text-xl">
                Maksimum verim için hızını ihtiyacınıza göre ayarlayın.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center xl:pb-6 max-md:pb-6 max-sm:pb-0">
              <img
                className="w-12 h-12 xl:w-16 xl:h-16"
                src="/assets/icons/safe.svg"
                alt=""
              />
              <span className="font-semibold text-xl xl:text-3xl">Garanti</span>
              <span className="font-light mt-3 xl:text-xl">
                2 yıl boyunca mekanik, 1 yıl boyunca ise elektronik aksamları
                garanti altında.*
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <img
                className="w-12 h-12 xl:w-16 xl:h-16"
                src="/assets/icons/easy.svg"
                alt=""
              />
              <span className="font-semibold text-xl xl:text-3xl">Basit</span>
              <span className="font-light mt-3 xl:text-xl">
                Kullanımı ve bakımı basit, tek tuşta işinizi halledin.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
