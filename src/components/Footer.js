import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { common } from "../data";

export default function Footer() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div>
      <div className="px-14 max-[1741px]:hidden">
        <div className="h-72 py-16 border-t-[1px] border-b-[1px] border-black flex">
          <div className="flex items-center mr-52">
            <img src="/assets/logoFooter.png" alt="" />
          </div>
          <div className="mr-24">
            <span className="font-semibold">{common[0].site[`${lng}`]}</span>
            <ul>
              <li className="mt-4 underline hover:text-berkand-orange duration-200 w-max">
                <Link to="/">{common[0].home[`${lng}`]}</Link>
              </li>
              <li className="mt-2 underline hover:text-berkand-orange duration-200 w-max">
                <Link to="/products">{common[0].products[`${lng}`]}</Link>
              </li>
              <li className="mt-2 underline hover:text-berkand-orange duration-200 w-max">
                <Link to="/about">{common[0].about[`${lng}`]}</Link>
              </li>
              <li className="mt-2 underline hover:text-berkand-orange duration-200 w-max">
                <Link to="/contact">{common[0].contact[`${lng}`]}</Link>
              </li>
            </ul>
          </div>
          <div className="mr-24">
            <span className="font-semibold">
              {common[0].socialmedia[`${lng}`]}
            </span>
            <ul>
              <li className="mt-2 hover:text-berkand-orange duration-200 w-max">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/berkandmakina/"
                >
                  Instagram
                </a>
              </li>
              <li className="mt-2 hover:text-berkand-orange duration-200 w-max">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/berkand.makina.37/"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 hover:text-berkand-orange duration-200 w-max">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/berkand-makina/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mr-24 w-60">
            <span className="font-semibold">{common[0].address[`${lng}`]}</span>
            <span className="mt-4 font-normal">
              <a
                className="hover:text-berkand-orange duration-200 w-max"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Hac%C4%B1ey%C3%BCpl%C3%BC,+3075.+Sk.+No:20+D:2,+20050+Merkezefendi%2FDenizli/@37.829231,29.031147,16z/data=!4m5!3m4!1s0x14c76aa44bceb091:0x2fca4193fea905ce!8m2!3d37.829231!4d29.031147?hl=en"
              >
                Hacıeyüplü Mahallesi 3075 Sokak No:20/2 Merkezefendi DENİZLİ
              </a>
            </span>
          </div>
          <div>
            <span className="font-semibold">
              {common[0].contactinfo[`${lng}`]}
            </span>
            <div className="flex mt-4">
              <div className="flex flex-col mr-16">
                <span>{common[0].manager[`${lng}`]}</span>
                <span className="mt-2">{common[0].marketing[`${lng}`]}</span>
                <span className="mt-2">{common[0].office[`${lng}`]}</span>
              </div>
              <div className="flex flex-col mr-16">
                <span>+90 552 295 96 11</span>
                <span className="mt-2">+90 536 630 96 11</span>
                <span className="mt-2">+90 258 251 25 82</span>
              </div>
              <div className="flex flex-col">
                <a
                  className="hover:text-berkand-orange duration-200 w-max"
                  href="mailto:info@berkandmakina.com.tr"
                >
                  <span>info@berkandmakina.com.tr</span>
                </a>
                <a
                  className="mt-2 hover:text-berkand-orange duration-200 w-max"
                  href="mailto:sales@berkandmakina.com.tr"
                >
                  <span>sales@berkandmakina.com.tr</span>
                </a>
                <a
                  className="mt-2 hover:text-berkand-orange duration-200 w-max"
                  href="mailto:info@berkandmakina.com.tr"
                >
                  <span>info@berkandmakina.com.tr</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start my-12 relative">
          <span className="font-normal font-[Catamaran]">
            © {new Date().getFullYear()} {common[0].rights[`${lng}`]}
          </span>
          <a href="https://artrodite.com/" target="_blank" rel="noreferrer">
            <img
              className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-11 h-11"
              src="/assets/artrodite.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="min-[1741px]:hidden flex flex-col justify-start mt-12 container mx-auto w-auto">
        <div className="sm:w-full w-auto container sm:mx-auto mx-7">
          <div className="flex xl:flex-row flex-col">
            <span className="font-semibold xl:mr-[265px] xl:text-xl">
              {common[0].address[`${lng}`]}
            </span>
            <span className="mt-3 xl:mt-0">
              <a
                className="hover:text-berkand-orange duration-200 w-max"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Hac%C4%B1ey%C3%BCpl%C3%BC,+3075.+Sk.+No:20+D:2,+20050+Merkezefendi%2FDenizli/@37.829231,29.031147,16z/data=!4m5!3m4!1s0x14c76aa44bceb091:0x2fca4193fea905ce!8m2!3d37.829231!4d29.031147?hl=en"
              >
                Hacıeyüplü Mahallesi 3075 Sokak No:20/2 Merkezefendi DENİZLİ
              </a>
            </span>
          </div>
          <hr className="w-auto border-black border my-11" />
          <span className="font-bold xl:text-xl">
            {common[0].contactinfo[`${lng}`]}
          </span>
          <div>
            <div className="mt-11 xl:mt-24 flex flex-col xl:flex-row">
              <span className="font-semibold xl:text-xl xl:mr-[123px]">
                {common[0].manager[`${lng}`]}
              </span>
              <span className="mt-3 xl:mt-0 xl:mr-40">+90 536 630 96 11</span>
              <span className="mt-3 xl:mt-0">
                <a
                  className="hover:text-berkand-orange duration-200 w-max"
                  href="mailto:info@berkandmakina.com.tr"
                >
                  <span>info@berkandmakina.com.tr</span>
                </a>
              </span>
            </div>
            <div className="mt-11 flex flex-col xl:flex-row">
              <span className="font-semibold xl:text-xl xl:mr-[222px]">
                {common[0].marketing[`${lng}`]}
              </span>
              <span className="mt-3 xl:mt-0 xl:mr-40">+90 552 295 96 11</span>
              <span className="mt-3 xl:mt-0">
                <a
                  className="mt-2 hover:text-berkand-orange duration-200 w-max"
                  href="mailto:sales@berkandmakina.com.tr"
                >
                  <span>sales@berkandmakina.com.tr</span>
                </a>
              </span>
            </div>
            <div className="mt-11 xl:mb-24 flex flex-col xl:flex-row">
              <span className="font-semibold xl:text-xl xl:mr-[235px]">
                {common[0].office[`${lng}`]}
              </span>
              <span className="mt-3 xl:mt-0 xl:mr-40">+90 258 251 25 82</span>
              <span className="mt-3 xl:mt-0">
                <a
                  className="mt-2 hover:text-berkand-orange duration-200 w-max"
                  href="mailto:info@berkandmakina.com.tr"
                >
                  <span>info@berkandmakina.com.tr</span>
                </a>
              </span>
            </div>
            <hr className="w-auto border-black border my-11" />
          </div>
          <div className="">
            <div className="xl:my-24 xl:flex">
              <span className="font-semibold xl:mr-48 xl:text-xl">
                {common[0].socialmedia[`${lng}`]}
              </span>
              <div className="flex flex-col">
                <span className="mt-3 xl:mt-0">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/berkandmakina/"
                  >
                    Instagram
                  </a>
                </span>
                <span className="mt-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/berkand.makina.37/"
                  >
                    Facebook
                  </a>
                </span>
                <span className="mt-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/berkand-makina/"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between mt-20 mb-[100px]">
            <span className="font-normal font-[Catamaran] text-xs">
              © {new Date().getFullYear()} {common[0].rights[`${lng}`]}
            </span>
            <a
              className="mt-10"
              href="https://artrodite.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-10 h-10" src="/assets/artrodite.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
