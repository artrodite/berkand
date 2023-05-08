import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { products } from "../data";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const AccordionItem = ({ title, isOpen, setIsOpen, index, product, url }) => {
  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  return (
    <div className="mb-9">
      <button
        className="w-full p-4 pb-0 text-left focus:outline-none"
        onClick={() => setIsOpen(isOpen === index ? -1 : index)}
      >
        <div className="flex items-center">
          <span>
            {isOpen === index ? (
              <img
                className="md:h-8 md:w-8"
                src="/assets/icons/arrow-up.svg"
                alt=""
              />
            ) : (
              <img
                className="md:h-8 md:w-8"
                src="/assets/icons/arrow-down.svg"
                alt=""
              />
            )}
          </span>
          <span className="ml-5 font-medium text-xl md:font-bold md:text-3xl">
            {title[`${lng}`]}
          </span>
        </div>
      </button>
      {isOpen === index && (
        <div className="p-4 pt-0">
          <ul className="">
            {product.map((p) => (
              <li className="flex ml-8 md:ml-12 mt-7 items-center w-max1">
                <Link to={`/products/${url}/${p.url}`} className="flex">
                  <img className="h-6 w-6 md:h-8 md:w-8" src={p.icon} alt="" />
                  <span className="font-normal md:font-medium ml-5">
                    {p.name[`${lng}`]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function Products() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const openIndex = queryParams.get("open") ? parseInt(queryParams.get("open"), 10) : -1;
  const [isOpen, setIsOpen] = useState(openIndex);
  
  return (
    <div>
      <Navbar />

      <div className="w-auto sm:mx-auto mx-7 container mt-20 md:mt-16 mb-24 md:mb-52">
        {products.map((p) => (
          <AccordionItem
            title={p.title}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            index={p.index}
            product={p.types}
            url={p.url}
          />
        ))}
      </div>
    </div>
  );
}