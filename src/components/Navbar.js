import React, { useState } from "react";

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

  return (
    <div className="p-6 pl-0 font-bold">
      <div className="p-3 pl-0 ml-60 flex justify-between">
        <div className="flex w-1/2 justify-between z-50">
          <span>
            <img src="/assets/logo.svg" alt="logo" />
          </span>
          <ul className="flex">
            <li className="ml-16 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              Ana Sayfa
            </li>
            <li className="ml-16 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              Hakkımızda
            </li>
            <li className="ml-16 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              Ürünlerimiz
            </li>
            <li className="ml-16 cursor-pointer hover:text-berkand-orange hover:underline duration-200">
              İletişim
            </li>
          </ul>
        </div>
        <div className="flex z-50">
          <div
            className="flex items-center mr-20 cursor-pointer hover:text-berkand-orange"
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
          >
          <a className="flex" href="/assets/catalog.pdf" download>
            <span>Katalog</span>
            <img className="ml-1" src={over ? catalogHover : catalog} alt="" />
          </a>
          </div>
          <div className="items-center mr-20 cursor-pointer">
            <div
              className="flex hover:text-berkand-orange"
              onClick={languageHandler}
              onMouseOver={() => setOver2(true)}
              onMouseOut={() => setOver2(false)}
            >
              <img
                className="mr-[2px]"
                src={over2 ? languageHover : language}
                alt=""
              />
              <span>Dil</span>
              <img
                className="ml-[2px]"
                src={over2 ? arrowDownHover : arrowDown}
                alt=""
              />
            </div>
            <ul
              className={`z-50 absolute -top-64 right-10 py-3 px-3 font-light border-[3px] rounded-lg border-black w-[185px] cursor-default ${
                open ? "top-20" : "-top-64"
              } ease-in-out duration-500`}
            >
              <li className="my-3 flex items-center justify-between" value="tr">
                <img
                  className="cursor-pointer"
                  src="/assets/icons/checked.svg"
                  alt=""
                  onClick={languageHandler}
                />
                <span>Turkish</span>
                <img src="/assets/flags/tr-flag.png" alt="" />
              </li>
              <li className="my-3 flex items-center justify-between" value="en">
                <img
                  className="cursor-pointer"
                  src="/assets/icons/check_blank.svg"
                  alt=""
                  onClick={languageHandler}
                />
                <span>English</span>
                <img src="/assets/flags/en-flag.png" alt="" />
              </li>
              <li className="my-3 flex items-center justify-between" value="ru">
                <img
                  className="cursor-pointer"
                  src="/assets/icons/check_blank.svg"
                  alt=""
                  onClick={languageHandler}
                />
                <span>Russian</span>
                <img src="/assets/flags/ru-flag.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
