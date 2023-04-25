import React, { useState } from "react";
import References from "../components/References";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";

export default function Home() {
  let [over, setOver] = useState(false);
  let support_agent = "/assets/icons/support_agent.svg";
  let support_agentHover = "/assets/icons/support_agent-hover.svg";

  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
    
      {sticky && <GoTop />}

      {/* cable */}

      <div className="absolute z-10 -top-12 left-[10px]">
        <img className="" src="/assets/cable.svg" alt="" />
      </div>

      {/* section1 */}

      <section className="flex pl-60 pr-36 pt-28 pb-72 h-full z-50">
        <div className="flex flex-col pr-28">
          <span className="font-normal text-[64px] leading-tight">
            Parlak Bir Gelecek için Çalışıyoruz.
          </span>
          <span className="font-normal text-2xl leading-7 mt-5 text-text-grey">
            Hedefimiz, fabrikanızda en düşük maliyet ile en kaliteli bir ürünü
            elde etmeniz.
          </span>
          <button
            className="z-50 w-64 h-11 mt-10 rounded-md bg-berkand-orange font-semibold text-white flex justify-center items-center border-2 border-berkand-orange hover:bg-white hover:text-berkand-orange duration-500"
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
            İletişim
          </button>
        </div>
        <div className="w-full">
          <img src="/assets/dram-hatti-311.png" alt="" />
        </div>
      </section>

      {/* section2 */}

      <section className="bg-black w-full h-screen relative flex pl-60">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50">
          <img src="/assets/world.png" alt="" />
        </div>
        <div className="text-white flex flex-col w-2/5 justify-center pr-44">
          <span className="font-black text-2xl">BERKAND MAKİNA</span>
          <span className="font-semibold">Kablo Makinaları Üreticisi.</span>
          <div className="font-normal text-xl mt-9 flex flex-col">
            <span>
              Berkand Makina 2010 yılından bu yana kablo makinaları
              üretmektedir.
            </span>
            <span className="mt-7">
              Fabrikamız, kablo sektörüne yönelik yedek parça üretiminden,
              kapsamlı makine çözümlerine ve mühendislik alanındaki teknolojik
              geliştirmelere kadar faaliyet göstermektedir.
            </span>
            <span className="mt-7">
              Ana hedefimiz müşterilerin gereksinimlerini en üst düzeyde
              karşılamak, stratejimiz ise yeni bilgiler keşfetmeye ve mevcut
              yöntemlerimizi geliştirmeye odaklanmaktır.
            </span>
          </div>
        </div>
      </section>

      {/* section3 */}

      <section className="relative px-60 py-52">
        <div className="absolute left-1/2 -translate-x-1/2 z-10 top-11">
          <img src="/assets/lamp.svg" alt="" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-4xl">
            Dünyayı Aydınlatıyoruz.
          </span>
          <div className="flex flex-col mt-16">
            <span className="font-semibold text-xl">EN YENİ TEKLONOJİ.</span>
            <span className="font-normal text-xl mt-6">
              Üretim süreçlerimizin tamamında, yeni teknolojilerden tam
              anlamıyla yararlanmak için gerekli araştırma ve geliştirmenin
              çalışmalarını sürdürüyor, yenilikçi süreçleri takip ediyoruz.
            </span>
          </div>
          <div className="flex flex-col mt-16">
            <span className="font-semibold text-xl">Çözüm Üretiyoruz.</span>
            <span className="font-normal text-xl mt-6">
              Tecrübeli ekibimiz makinelerimizi kapasitenize ve ihtiyaçlarınıza
              göre en verimli şekilde kullanabilmeniz için tasarlıyor.
              Hedefimiz, fabrikanızda en düşük maliyet ile en kaliteli bir ürünü
              elde etmeniz!
            </span>
          </div>
          <div className="flex flex-col mt-16">
            <span className="font-semibold text-xl">ONARIM & YENİLEME.</span>
            <span className="font-normal text-xl mt-6">
              Kablo ekipmanlarının bakımında yerli ve yabancı müşterilerimizin
              tüm marka ve modelleri ile ilgili kapsamlı bir çalışma yapıyor,
              onarım ve bakım işlemlerini gerçekleştiriyoruz.
            </span>
          </div>
          <div className="flex flex-col mt-16">
            <span className="font-semibold text-xl">DİNAMİK GELİŞME.</span>
            <span className="font-normal text-xl mt-6">
              Uluslararası pazardaki aktif faaliyetlerimiz sayesinde son
              yıllardaki üretim ciromuz %35 artış gösterdi.
            </span>
          </div>
        </div>
      </section>

      <References />
      <Footer />
    </div>
  );
}
