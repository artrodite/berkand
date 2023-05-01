import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Navbar() {
  let [open, setOpen] = useState(false);
  let [over, setOver] = useState(false);
  let [over2, setOver2] = useState(false);

  let catalog = "/assets/icons/catalog.svg";
  let catalogHover = "/assets/icons/catalog-hover.svg";
  let language = "/assets/icons/language.svg";
  let languageHover = "/assets/icons/language-hover.svg";
  let arrowDown = "/assets/icons/arrowDown.svg";
  let arrowDownHover = "/assets/icons/arrowDown-hover.svg";

  const languageHandler = () => {
    setOpen(!open);
  };

  const path = useLocation().pathname;

  const { t, i18n } = useTranslation(["common"]);

  useEffect((e) => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("tr");
    }
  }, []);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setOpen(false);
  };

  return (
    <div className="xl:py-6 pr-0 pl-0 font-bold container mx-auto">
      <div className="p-3 pl-0 flex xl:justify-between justify-end">
        <div className="flex w-auto md:justify-between z-50 xl:static xl:left-0 xl:-translate-x-0 absolute top-5 left-1/2 -translate-x-1/2">
          <Link to="/">
            <span>
              <img
                className="xl:inline hidden"
                src="/assets/logo.svg"
                alt="logo"
              />
              {path === "/" && (
                <img
                  className="xl:hidden"
                  src="/assets/logo-mobile.svg"
                  alt="logo"
                />
              )}
            </span>
          </Link>
          <ul className="xl:flex md:justify-center bg-white xl:w-auto w-full hidden">
            <li className="ml-16 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              <Link to="/">{t("home")}</Link>
            </li>
            <li className="ml-16 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              <Link to="/about">{t("about")}</Link>
            </li>
            <li className="ml-16 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              <Link to="/products">{t("products")}</Link>
            </li>
            <li className="ml-16 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              <Link to="/contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>
        <div className="flex z-50">
          <div
            className="items-center mr-20 cursor-pointer hover:text-berkand-orange xl:inline hidden"
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
          >
            <a className="flex" href="/assets/catalog.pdf" download>
              <span>{t("catalog")}</span>
              <img
                className="ml-1"
                src={over ? catalogHover : catalog}
                alt=""
              />
            </a>
          </div>
          <div className="items-center cursor-pointer">
            <div
              className="flex hover:text-berkand-orange"
              onClick={languageHandler}
              onMouseOver={() => setOver2(true)}
              onMouseOut={() => setOver2(false)}
            >
              <img
                className="mr-[2px] xl:inline hidden"
                src={over2 ? languageHover : language}
                alt=""
              />
              <span className="xl:inline hidden">{t("lang")}</span>
              <img
                className="ml-[2px] xl:inline hidden"
                src={over2 ? arrowDownHover : arrowDown}
                alt=""
              />

              {/* mobile */}

              {path === "/" && (
                <img
                  className="xl:hidden inline"
                  src="/assets/icons/language-mobile.svg"
                  alt=""
                />
              )}
            </div>
            <div className="relative">
              <ul
                className={`bg-white z-50 absolute -top-64 right-0 py-3 px-3 font-light border-[3px] rounded-lg border-black w-[185px] cursor-default ${
                  open ? "top-5" : "-top-64"
                } ease-in-out duration-500`}
              >
                <li className="my-3 flex items-center justify-between">
                  <img
                    className="cursor-pointer"
                    src={
                      localStorage.getItem("i18nextLng") === "tr"
                        ? "/assets/icons/checked.svg"
                        : "/assets/icons/check_blank.svg"
                    }
                    alt=""
                    onClick={() => handleLanguageChange("tr")}
                  />
                  <span>Turkish</span>
                  <img src="/assets/flags/tr-flag.png" alt="" />
                </li>
                <li className="my-3 flex items-center justify-between">
                  <img
                    className="cursor-pointer"
                    src={
                      localStorage.getItem("i18nextLng") === "en"
                        ? "/assets/icons/checked.svg"
                        : "/assets/icons/check_blank.svg"
                    }
                    alt=""
                    onClick={() => handleLanguageChange("en")}
                  />
                  <span>English</span>
                  <img src="/assets/flags/en-flag.png" alt="" />
                </li>
                <li className="my-3 flex items-center justify-between">
                  <img
                    className="cursor-pointer"
                    src={
                      localStorage.getItem("i18nextLng") === "ru"
                        ? "/assets/icons/checked.svg"
                        : "/assets/icons/check_blank.svg"
                    }
                    alt=""
                    onClick={() => handleLanguageChange("ru")}
                  />
                  <span>Russian</span>
                  <img src="/assets/flags/ru-flag.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {path === "/" && (
        <div className="bg-white flex flex-col justify-center xl:hidden mb-5">
          <div className="mx-auto mt-10 flex flex-col items-center">
            <span className="text-4xl font-normal">{t("welcome")}</span>
            <ul className="md:justify-center mt-4 bg-white xl:w-auto flex flex-col justify-center items-center">
              <li className="mt-10 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
                <Link to="/about">{t("about")}</Link>
              </li>
              <li className="mt-14 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
                <Link to="/products">{t("products")}</Link>
              </li>
              <li className="mt-14 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
                <a className="flex" href="/assets/catalog.pdf" download>
                  <span>{t("catalog")}</span>
                </a>
              </li>
              <li className="mt-14 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
                <Link to="/contact">{t("contact")}</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {path === "/about" && (
        <div className="flex justify-between items-center my-10 mx-8 xl:hidden">
          <Link to="/">
            <img src="/assets/icons/home.svg" alt="" />
          </Link>
          <span className="font-bold text-berkand-blue">{t("about")}</span>
          <img src="/assets/icons/logo-mobil-navbar.svg" alt="" />
        </div>
      )}
      {path === "/products" && (
        <div className="flex justify-between items-center my-10 mx-8 xl:hidden">
          <Link to="/">
            <img src="/assets/icons/home.svg" alt="" />
          </Link>
          <span className="font-bold text-berkand-blue">{t("products")}</span>
          <img src="/assets/icons/logo-mobil-navbar.svg" alt="" />
        </div>
      )}
      {path === "/contact" && (
        <div className="flex justify-between items-center mt-10 mb-16 mx-8 xl:hidden">
          <Link to="/">
            <img src="/assets/icons/home.svg" alt="" />
          </Link>
          <span className="font-bold text-berkand-blue">{t("contact")}</span>
          <img src="/assets/icons/logo-mobil-navbar.svg" alt="" />
        </div>
      )}
      {path === "/product" && (
        <div className="flex justify-between items-center mt-10 mb-16 mx-8 xl:hidden">
          <Link to="/products">
            <img src="/assets/icons/arrow-back.svg" alt="" />
          </Link>
          <span className="font-bold text-berkand-blue">EKSTRUDER</span>
          <img src="/assets/icons/logo-mobil-navbar.svg" alt="" />
        </div>
      )}
    </div>
  );
}
