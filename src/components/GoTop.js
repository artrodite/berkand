import React from "react";

export default function GoTop() {
  
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="z-50 bg-white text-4xl rounded-full md:w-14 w-12 md:h-14 h-12 fixed md:bottom-20 bottom-9 md:right-12 right-4 flex justify-center items-center cursor-pointer"
      onClick={scrollToTop}
    >
      <img src="/assets/icons/go-top.svg" alt=""/>
    </div>
  );
}
