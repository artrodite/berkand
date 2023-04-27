import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="px-14 max-[1741px]:hidden">
        <div className="h-72 py-16 border-t-[1px] border-b-[1px] border-black flex">
          <div className="flex items-center mr-52">
            <img src="/assets/logoFooter.png" alt="" />
          </div>
          <div className="mr-24">
            <span className="font-semibold">Site</span>
            <ul>
              <li className="mt-4 underline hover:text-berkand-orange duration-200"><Link to="/">Ana Sayfa</Link></li>
              <li className="mt-2 underline hover:text-berkand-orange duration-200"><Link to="/product">Ürünlerimiz</Link></li>
              <li className="mt-2 underline hover:text-berkand-orange duration-200"><Link to="/about">Hakkımızda</Link></li>
              <li className="mt-2 underline hover:text-berkand-orange duration-200"><Link to="/contact">İletişim</Link></li>
            </ul>
          </div>
          <div className="mr-24">
            <span className="font-semibold">Sosyal Medya</span>
            <ul>
              <li className="mt-2">Instagram</li>
              <li className="mt-2">Facebook</li>
              <li className="mt-2">LinkedIn</li>
            </ul>
          </div>
          <div className="flex flex-col mr-24 w-60">
            <span className="font-semibold">Adres</span>
            <span className="mt-4 font-normal">
              Hacıeyüplü Mahallesi 3075 Sokak No:20/2 Merkezefendi DENİZLİ
            </span>
          </div>
          <div>
            <span className="font-semibold">İletişim Bilgilerimiz</span>
            <div className="flex mt-4">
              <div className="flex flex-col mr-16">
                <span>CEO Ramazan Yılmaz</span>
                <span className="mt-2">Pazarlama</span>
                <span className="mt-2">Sabit Hat</span>
              </div>
              <div className="flex flex-col mr-16">
                <span>+90 552 295 96 11</span>
                <span className="mt-2">+90 536 630 96 11</span>
                <span className="mt-2">+90 258 251 25 82</span>
              </div>
              <div className="flex flex-col">
                <span>sales@berkandmakina.com.tr</span>
                <span className="mt-2">info@berkandmakina.com.tr</span>
                <span className="mt-2">info@berkandmakina.com.tr</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start my-12">
          <span className="font-normal font-[Catamaran]">
            © {new Date().getFullYear()} Berkand Makina, Tüm Hakları Saklıdır
          </span>
          <a href="https://artrodite.com/" target="_blank" rel="noreferrer">
            <img
              className="absolute left-1/2 -translate-x-1/2"
              src="/assets/artrodite.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="min-[1741px]:hidden flex flex-col justify-start mt-12 container mx-auto w-auto">
        <div className="sm:w-full w-auto container sm:mx-auto mx-7">
          <div className="flex xl:flex-row flex-col">
            <span className="font-semibold xl:mr-[265px] xl:text-xl">
              Adres
            </span>
            <span className="mt-3 xl:mt-0">
              Hacıeyüplü Mahallesi 3075 Sokak No:20/2 Merkezefendi DENİZLİ
            </span>
          </div>
          <hr className="w-auto border-black border my-11" />
          <span className="font-bold xl:text-xl">İletişim Bilgilerimiz</span>
          <div>
            <div className="mt-11 xl:mt-24 flex flex-col xl:flex-row">
              <span className="font-semibold xl:text-xl xl:mr-[123px]">
                CEO Ramazan Yılmaz{" "}
              </span>
              <span className="mt-3 xl:mt-0 xl:mr-40">+90 536 630 96 11</span>
              <span className="mt-3 xl:mt-0">info@berkandmakina.com.tr</span>
            </div>
            <div className="mt-11 flex flex-col xl:flex-row">
              <span className="font-semibold xl:text-xl xl:mr-[222px]">
                Pazarlama
              </span>
              <span className="mt-3 xl:mt-0 xl:mr-40">+90 552 295 96 11</span>
              <span className="mt-3 xl:mt-0">sales@berkandmakina.com.tr</span>
            </div>
            <div className="mt-11 xl:mb-24 flex flex-col xl:flex-row">
              <span className="font-semibold xl:text-xl xl:mr-[235px]">
                Sabit Hat
              </span>
              <span className="mt-3 xl:mt-0 xl:mr-40">+90 258 251 25 82</span>
              <span className="mt-3 xl:mt-0">info@berkandmakina.com.tr</span>
            </div>
            <hr className="w-auto border-black border my-11" />
          </div>
          <div className="">
            <div className="xl:my-24 xl:flex">
              <span className="font-semibold xl:mr-48 xl:text-xl">
                Sosyal Medya
              </span>
              <div className="flex flex-col">
                <span className="mt-3 xl:mt-0">Instagram /</span>
                <span className="mt-3">Facebook /</span>
                <span className="mt-3">Linkedin /</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between mt-20 mb-[100px]">
            <span className="font-normal font-[Catamaran] text-xs">
              © {new Date().getFullYear()} Berkand Makina, Tüm Hakları Saklıdır
            </span>
            <a href="https://artrodite.com/" target="_blank" rel="noreferrer">
              <img className="mt-10" src="/assets/artrodite.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
