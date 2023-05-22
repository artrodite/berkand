import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { common } from "../data";

export default function Footer() {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div>
      <div className="w-auto container mx-auto min-[1741px]:flex flex-col hidden">
        <div className="w-full container xl:mt-28 xl:flex xl:flex-col hidden">
          <span
            className="font-bold xl:text-3xl"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            {common[0].contactinfo[`${lng}`]}
          </span>
          <div className="flex mt-4" data-aos="fade-up" data-aos-delay="50">
            <div className="flex flex-col min-w-[200px] xl:mr-[200px]">
              <span
                className="font-semibold xl:text-xl mt-11"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {common[0].manager[`${lng}`]}
              </span>
              <span
                className="font-semibold xl:text-xl mt-11"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {common[0].marketing[`${lng}`]}
              </span>
              <span
                className="font-semibold xl:text-xl mt-11"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {common[0].office[`${lng}`]}
              </span>
            </div>
            <div className="flex flex-col mr-[150px]">
              <a
                href="tel:+905522959611"
                className="mt-11 flex items-center hover:text-berkand-orange"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <span className="mr-5">+90 552 295 96 11</span>
                <span class="material-symbols-outlined rotate-45">
                  arrow_upward
                </span>
              </a>
              <a
                href="tel:+905366309611"
                className="mt-11 flex items-center hover:text-berkand-orange"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <span className="mr-5">+90 536 630 96 11</span>
                <span class="material-symbols-outlined rotate-45">
                  arrow_upward
                </span>
              </a>
              <a
                href="tel:+902582512582"
                className="mt-11 flex items-center hover:text-berkand-orange"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <span className="mr-5">+90 258 251 25 82</span>
                <span class="material-symbols-outlined rotate-45">
                  arrow_upward
                </span>
              </a>
            </div>
            <div className="flex flex-col">
              <a
                className="flex items-center hover:text-berkand-orange duration-200 mt-11"
                href="mailto:info@berkandmakina.com.tr"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <span className="mt-3 xl:mt-0 min-w-[210px] mr-5">
                  info@berkandmakina.com.tr
                </span>
                <span class="material-symbols-outlined rotate-45">
                  arrow_upward
                </span>
              </a>
              <a
                className="flex items-center hover:text-berkand-orange duration-200 mt-11"
                href="mailto:sales@berkandmakina.com.tr"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <span className="mt-3 xl:mt-0 min-w-[210px] mr-5">
                  sales@berkandmakina.com.tr
                </span>
                <span class="material-symbols-outlined rotate-45">
                  arrow_upward
                </span>
              </a>
              <a
                className="flex items-center hover:text-berkand-orange duration-200 mt-11"
                href="mailto:info@berkandmakina.com.tr"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <span className="mt-3 xl:mt-0 min-w-[210px] mr-5">
                  info@berkandmakina.com.tr
                </span>
                <span class="material-symbols-outlined rotate-45">
                  arrow_upward
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:flex-row flex-col mt-24 mb-24 hidden items-center">
          <span
            className="font-semibold min-w-[200px] xl:mr-[200px] xl:text-xl"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            {common[0].address[`${lng}`]}
          </span>
          <a
            className="flex items-center hover:text-berkand-orange duration-200"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Hac%C4%B1ey%C3%BCpl%C3%BC,+3075.+Sk.+No:20+D:2,+20050+Merkezefendi%2FDenizli/@37.829231,29.031147,16z/data=!4m5!3m4!1s0x14c76aa44bceb091:0x2fca4193fea905ce!8m2!3d37.829231!4d29.031147?hl=en"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <span
              className="mt-3 xl:mt-0 mr-5"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Hacıeyüplü Mahallesi 3075 Sokak No:20/2 Merkezefendi DENİZLİ
            </span>
            <span class="material-symbols-outlined rotate-45">
              arrow_upward
            </span>
          </a>
        </div>
        <div className="w-full container xl:flex xl:flex-col hidden">
          <div className="xl:mb-24 xl:flex">
            <span
              className="font-semibold min-w-[200px] xl:mr-[200px] xl:text-xl"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {common[0].socialmedia[`${lng}`]}
            </span>
            <div className="flex">
              <div data-aos="fade-up" data-aos-delay="50">
                <a
                  className="flex items-center hover:text-berkand-orange duration-200"
                  href="https://www.instagram.com/berkandmakina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mt-3 xl:mt-0 mr-5">Instagram</span>
                  <span class="material-symbols-outlined rotate-45">
                    arrow_upward
                  </span>
                </a>
              </div>
              <div className="ml-14" data-aos="fade-up" data-aos-delay="50">
                <a
                  className="flex items-center hover:text-berkand-orange duration-200"
                  href="https://www.facebook.com/berkand.makina.37/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mr-5">Facebook</span>
                  <span class="material-symbols-outlined rotate-45">
                    arrow_upward
                  </span>
                </a>
              </div>
              <div className="ml-14" data-aos="fade-up" data-aos-delay="50">
                <a
                  className="flex items-center hover:text-berkand-orange duration-200"
                  href="https://www.linkedin.com/company/berkand-makina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mr-5">Linkedin</span>
                  <span class="material-symbols-outlined rotate-45">
                    arrow_upward
                  </span>
                </a>
              </div>
              <div className="ml-14" data-aos="fade-up" data-aos-delay="50">
                <a
                  className="flex items-center hover:text-berkand-orange duration-200"
                  href="https://www.youtube.com/@berkandmakina1134/featured"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mr-5">Youtube</span>
                  <span class="material-symbols-outlined rotate-45">
                    arrow_upward
                  </span>
                </a>
              </div>
            </div>
          </div>
          <hr
            className="w-auto border-black border my-11"
            data-aos="fade-up"
            data-aos-delay="50"
          />
          <div className="xl:mt-11 mb-10 xl:flex">
            <span
              className="font-semibold min-w-[200px] xl:mr-[200px] xl:text-xl"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {common[0].site[`${lng}`]}
            </span>
            <div className="flex">
              <ul className="flex">
                <li
                  className="underline hover:text-berkand-orange duration-200 w-max"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <Link to="/">{common[0].home[`${lng}`]}</Link>
                </li>
                <li
                  className="ml-20 underline hover:text-berkand-orange duration-200 w-max"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <Link to="/products">{common[0].products[`${lng}`]}</Link>
                </li>
                <li
                  className="ml-20 underline hover:text-berkand-orange duration-200 w-max"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <Link to="/about">{common[0].about[`${lng}`]}</Link>
                </li>
                <li
                  className="ml-20 underline hover:text-berkand-orange duration-200 w-max"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <Link to="/contact">{common[0].contact[`${lng}`]}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          className="w-auto border-black border my-11"
          data-aos="fade-up"
          data-aos-delay="50"
        />
        <div className="flex justify-between relative mb-14 items-center">
          <img src="/assets/footer-logo.svg" alt="" />
          <a href="https://artrodite.com/" target="_blank" rel="noreferrer">
            <img
              className="absolute left-1/2 -translate-x-1/2 top-0 w-11 h-11"
              src="/assets/artrodite.svg"
              alt=""
            />
          </a>
          <span className="font-normal font-[Catamaran]">
            © {new Date().getFullYear()} {common[0].rights[`${lng}`]}
          </span>
        </div>
      </div>
      <div className="min-[1741px]:hidden flex flex-col justify-start mt-12 container mx-auto w-auto">
        <div className="sm:w-full w-auto container sm:mx-auto mx-7">
          <div className="flex xl:flex-row flex-col">
            <span className="font-semibold min-w-[200px] xl:mr-[200px] xl:text-xl">
              {common[0].address[`${lng}`]}
            </span>
            <span className="mt-3 xl:mt-0">
              <a
                className="hover:text-berkand-orange duration-200 w-max"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Hac%C4%B1ey%C3%BCpl%C3%BC,+3075.+Sk.+No:20+D:2,+20050+Merkezefendi%2FDenizli/@37.829231,29.031147,16z/data=!4m5!3m4!1s0x14c76aa44bceb091:0x2fca4193fea905ce!8m2!3d37.829231!4d29.031147?hl=en"
              >
                <div className="flex items-center">
                  <span className="xl:mr-5 mr-1">
                    Hacıeyüplü Mahallesi 3075 Sokak No:20/2 Merkezefendi DENİZLİ
                  </span>
                  <span class="material-symbols-outlined rotate-45">
                    arrow_upward
                  </span>
                </div>
              </a>
            </span>
          </div>
          <hr className="w-auto border-black border my-11" />
          <span className="font-bold xl:text-xl">
            {common[0].contactinfo[`${lng}`]}
          </span>
          <div>
            <div className="mt-11 xl:mt-24 flex flex-col xl:flex-row">
              <span className="font-semibold xl:text-xl min-w-[200px] xl:mr-[200px]">
                {common[0].manager[`${lng}`]}
              </span>
              <a
                className="mt-3 xl:mt-0 xl:mr-40 w-max flex items-center"
                href="tel:+905366309611"
              >
                <span className="xl:mr-5 mr-1">+90 536 630 96 11</span>
                <span class="material-symbols-outlined rotate-45">
                  arrow_upward
                </span>
              </a>
              <span className="mt-3 xl:mt-0">
                <a
                  className="hover:text-berkand-orange duration-200 w-max flex items-center"
                  href="mailto:info@berkandmakina.com.tr"
                >
                  <span className="xl:mr-5 mr-1 min-w-[210px]">
                    info@berkandmakina.com.tr
                  </span>
                  <span class="material-symbols-outlined rotate-45">
                    arrow_upward
                  </span>
                </a>
              </span>
            </div>
            <div className="mt-11 flex flex-col xl:flex-row">
              <span className="font-semibold xl:text-xl min-w-[200px] xl:mr-[200px]">
                {common[0].marketing[`${lng}`]}
              </span>
              <a
                className="mt-3 xl:mt-0 xl:mr-40 w-max flex items-center"
                href="tel:+905522959611"
              >
                <span className="xl:mr-5 mr-1">+90 552 295 96 11</span>
                <span class="material-symbols-outlined rotate-45">
                  arrow_upward
                </span>
              </a>
              <span className="mt-3 xl:mt-0">
                <a
                  className="hover:text-berkand-orange duration-200 w-max flex xl:items-center"
                  href="mailto:sales@berkandmakina.com.tr"
                >
                  <span className="xl:mr-5 mr-1 min-w-[210px]">
                    sales@berkandmakina.com.tr
                  </span>
                  <span class="material-symbols-outlined rotate-45">
                    arrow_upward
                  </span>
                </a>
              </span>
            </div>
            <div className="mt-11 xl:mb-24 flex flex-col xl:flex-row xl:items-center">
              <span className="font-semibold xl:text-xl min-w-[200px] xl:mr-[200px]">
                {common[0].office[`${lng}`]}
              </span>
              <a
                className="mt-3 xl:mt-0 xl:mr-40 w-max flex items-center"
                href="tel:+902582512582"
              >
                <span className="xl:mr-5 mr-1">+90 258 251 25 82</span>
                <span class="material-symbols-outlined rotate-45">
                  arrow_upward
                </span>
              </a>
              <span className="mt-3 xl:mt-0">
                <a
                  className="hover:text-berkand-orange duration-200 w-max flex xl:items-center"
                  href="mailto:info@berkandmakina.com.tr"
                >
                  <span className="xl:mr-5 mr-1 min-w-[210px]">
                    info@berkandmakina.com.tr
                  </span>
                  <span class="material-symbols-outlined rotate-45">
                    arrow_upward
                  </span>
                </a>
              </span>
            </div>
            <hr className="w-auto border-black border my-11" />
          </div>
          <div className="">
            <div className="xl:my-24 xl:flex">
              <span className="font-semibold xl:text-xl min-w-[200px] xl:mr-[200px]">
                {common[0].socialmedia[`${lng}`]}
              </span>
              <div className="flex flex-col">
                <span className="mt-3 xl:mt-0">
                  <a
                    className="flex items-center"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/berkandmakina/"
                  >
                    <span className="xl:mr-5 mr-1 min-w-[70px]">Instagram</span>
                    <span class="material-symbols-outlined rotate-45">
                      arrow_upward
                    </span>
                  </a>
                </span>
                <span className="mt-3">
                  <a
                    className="flex items-center"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/berkand.makina.37/"
                  >
                    <span className="xl:mr-5 mr-1 min-w-[70px]">Facebook</span>
                    <span class="material-symbols-outlined rotate-45">
                      arrow_upward
                    </span>
                  </a>
                </span>
                <span className="mt-3">
                  <a
                    className="flex items-center"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/berkand-makina/"
                  >
                    <span className="xl:mr-5 mr-1 min-w-[70px]">LinkedIn</span>
                    <span class="material-symbols-outlined rotate-45">
                      arrow_upward
                    </span>
                  </a>
                </span>
                <span className="mt-3">
                  <a
                    className="flex items-center"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/@berkandmakina1134/featured"
                  >
                    <span className="xl:mr-5 mr-1 min-w-[70px]">Youtube</span>
                    <span class="material-symbols-outlined rotate-45">
                      arrow_upward
                    </span>
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
