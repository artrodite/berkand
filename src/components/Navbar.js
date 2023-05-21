import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import LanguageSelect from "./LanguageSelect";

export default function Navbar({ group, types, product }) {
  let [over, setOver] = useState(false);
  let [open, setOpen] = useState(false);

  let catalog = "/assets/icons/catalog.svg";
  let catalogHover = "/assets/icons/catalog-hover.svg";

  const path = useLocation().pathname;

  const { t, i18n } = useTranslation(["common"]);

  useEffect((e) => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("tr");
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const menuHandler = () => {
    setOpen(!open);
  };

  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="xl:py-6 pr-0 pl-0 font-bold container mx-auto">
      <div className="p-3 pl-0 flex xl:justify-between justify-end items-center">
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
        <div className="flex z-50 items-center">
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
          <div className="xl:inline hidden">
            <LanguageSelect changeLanguage={changeLanguage} lang={t("lang")} />
          </div>

          {/* mobile */}

          {path === "/" && (
            <div className="xl:hidden text-4xl">
              <ion-icon
                name={open ? "close-outline" : "menu-outline"}
                onClick={menuHandler}
              ></ion-icon>
            </div>
          )}
        </div>
      </div>
      <div
        className={`bg-white flex flex-col justify-center xl:hidden mb-5 z-50 w-full container absolute opacity-0 -top-96 duration-300  ${
          open ? "opacity-100 top-20" : "opacity-0 -top-96"
        }`}
      >
        <div className="mx-auto flex flex-col items-center">
          {/* <span className="text-4xl font-normal">{t("welcome")}</span> */}
          <ul className="md:justify-center mb-10 bg-white xl:w-auto flex flex-col justify-center items-center">
            <li className="mt-10 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              <Link to="/">{t("home")}</Link>
            </li>
            <li className="mt-10 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              <Link to="/about">{t("about")}</Link>
            </li>
            <li className="mt-10 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              <Link to="/products">{t("products")}</Link>
            </li>
            <li className="mt-10 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              <a className="flex" href="/assets/catalog.pdf" download>
                <span>{t("catalog")}</span>
              </a>
            </li>
            <li className="mt-10 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              <Link to="/contact">{t("contact")}</Link>
            </li>
            <li className="mt-10">
              <LanguageSelect
                changeLanguage={changeLanguage}
                lang={t("lang")}
              />
            </li>
          </ul>
        </div>
      </div>
      {path === "/about" && (
        <div className="flex justify-between items-center mb-10 mt-0 mx-8 xl:hidden">
          <Link to="/">
            <img src="/assets/logo-mobile-navbar.svg" alt="" />
          </Link>
          <span className="font-bold text-black">{t("about")}</span>
          <div className="xl:hidden text-4xl">
            <ion-icon
              name={open ? "close-outline" : "menu-outline"}
              onClick={menuHandler}
            ></ion-icon>
          </div>
        </div>
      )}
      {path === "/products" && (
        <div className="flex justify-between items-center mb-10 mt-0 mx-8 xl:hidden">
          <Link to="/">
            <img src="/assets/logo-mobile-navbar.svg" alt="" />
          </Link>
          <span className="font-bold text-black">{t("products")}</span>
          <div className="xl:hidden text-4xl">
            <ion-icon
              name={open ? "close-outline" : "menu-outline"}
              onClick={menuHandler}
            ></ion-icon>
          </div>
        </div>
      )}
      {path === "/contact" && (
        <div className="flex justify-between items-center mt-0 mb-16 mx-8 xl:hidden">
          <Link to="/">
            <img src="/assets/logo-mobile-navbar.svg" alt="" />
          </Link>
          <span className="font-bold text-black">{t("contact")}</span>
          <div className="xl:hidden text-4xl">
            <ion-icon
              name={open ? "close-outline" : "menu-outline"}
              onClick={menuHandler}
            ></ion-icon>
          </div>
        </div>
      )}
      {path === `/products/${group}/${types}` && (
        <div className="flex justify-between items-center mt-0 mb-16 mx-8 xl:hidden text-center">
          <Link to="/">
            <img src="/assets/logo-mobile-navbar.svg" alt="" />
          </Link>
          <span className="font-bold text-black uppercase mx-5">
            {product[`${lng}`]}
          </span>
          <div className="xl:hidden text-4xl">
            <ion-icon
              name={open ? "close-outline" : "menu-outline"}
              onClick={menuHandler}
            ></ion-icon>
          </div>
        </div>
      )}
    </div>
  );
}
