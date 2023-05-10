import React, { useEffect, useRef, useState } from "react";
import GoTop from "../components/GoTop";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { common, contact } from "../data";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
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

  useTranslation();

  let lng = localStorage.getItem("i18nextLng");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {sticky && <GoTop />}

      <Navbar />

      <div className="w-auto container sm:mx-auto mx-7 flex flex-col xl:my-28">
        <span
          className="text-2xl xl:text-5xl font-bold"
          data-aos="fade-left"
          data-aos-delay="50"
        >
          {contact[0].title[`${lng}`]}
        </span>
        <div className="flex flex-col xl:flex-row xl:mt-12 mt-0">
          <form
            className="flex flex-col xl:w-7/12"
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="flex flex-col xl:flex-row xl:justify-between">
              <input
                className="rounded bg-form-input mt-5 xl:mt-0 h-11 py-3 px-2 2xl:w-64 outline-black"
                type="text"
                name="name"
                placeholder={contact[0].name[`${lng}`]}
                required
              />
              <input
                className="rounded bg-form-input mt-5 xl:mt-0 h-11 py-3 px-2 2xl:w-64 outline-black"
                type="email"
                name="email"
                placeholder={contact[0].email[`${lng}`]}
                required
              />
              <input
                className="rounded bg-form-input mt-5 xl:mt-0 h-11 py-3 px-2 2xl:w-64 outline-black"
                type="tel"
                name="tel"
                placeholder="+90 ( _ _ _ ) _ _ _  _ _  _ _"
                required
              />
            </div>
            <textarea
              className="rounded bg-form-input xl:mt-8 mt-5 h-64 xl:h-96 py-3 px-2 resize-none outline-black"
              type="textarea"
              name="message"
              placeholder={contact[0].message[`${lng}`]}
              required
            />
            <div className="flex items-center">
              <input
                type="submit"
                value={contact[0].send[`${lng}`]}
                className="cursor-pointer mt-8 xl:mt-5 bg-white hover:bg-berkand-orange hover:text-white duration-500 text-berkand-orange border-2 border-berkand-orange xl:text-lg text-base w-full p-3 rounded"
              />
            </div>
          </form>

          <div
            className="mt-8 xl:mt-0 xl:ml-16 xl:w-5/12"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <iframe
              className="w-full h-80 xl:h-full rounded-xl border-berkand-blue border-2"
              title="This is an unique title"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.326954185578!2d29.028566712462293!3d37.829230971854635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c76aa44bceb091%3A0x2fca4193fea905ce!2zSGFjxLFlecO8cGzDvCwgMzA3NS4gU2suIE5vOjIwIEQ6MiwgMjAwNTAgTWVya2V6ZWZlbmRpL0Rlbml6bGk!5e0!3m2!1sen!2str!4v1682525775398!5m2!1sen!2str"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-auto container mx-auto min-[1741px]:flex flex-col hidden">
        <div className="w-7/12 container xl:mt-28 xl:flex xl:flex-col hidden">
          <span
            className="font-bold xl:text-3xl"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            {common[0].contactinfo[`${lng}`]}
          </span>
          <div className="flex mt-4" data-aos="fade-up" data-aos-delay="50">
            <div className="flex flex-col mr-[150px]">
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
              <span className="mt-11" data-aos="fade-up" data-aos-delay="50">
                +90 552 295 96 11
              </span>
              <span className="mt-11" data-aos="fade-up" data-aos-delay="50">
                +90 536 630 96 11
              </span>
              <span className="mt-11" data-aos="fade-up" data-aos-delay="50">
                +90 258 251 25 82
              </span>
            </div>
            <div className="flex flex-col">
              <a
                className="flex items-center hover:text-berkand-orange duration-200 mt-11"
                href="mailto:info@berkandmakina.com.tr"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <span className="mt-3 xl:mt-0 mr-5">
                  info@berkandmakina.com.tr
                </span>
                <img src="/assets/icons/north-east-arrow.svg" alt="" />
              </a>
              <a
                className="flex items-center hover:text-berkand-orange duration-200 mt-11"
                href="mailto:sales@berkandmakina.com.tr"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <span className="mt-3 xl:mt-0 mr-5">
                  sales@berkandmakina.com.tr
                </span>
                <img src="/assets/icons/north-east-arrow.svg" alt="" />
              </a>
              <a
                className="flex items-center hover:text-berkand-orange duration-200 mt-11"
                href="mailto:info@berkandmakina.com.tr"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <span className="mt-3 xl:mt-0 mr-5">
                  info@berkandmakina.com.tr
                </span>
                <img src="/assets/icons/north-east-arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <hr
            className="w-auto border-black border my-36"
            data-aos="fade-up"
            data-aos-delay="50"
          />
        </div>
        <div className="w-7/12 container xl:flex xl:flex-col hidden">
          <div className="xl:mb-24 xl:flex">
            <span
              className="font-semibold xl:mr-48 xl:text-xl"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {common[0].socialmedia[`${lng}`]}
            </span>
            <div className="flex flex-col">
              <div data-aos="fade-up" data-aos-delay="50">
                <a
                  className="flex items-center hover:text-berkand-orange duration-200"
                  href="https://www.instagram.com/berkandmakina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mt-3 xl:mt-0 mr-5">Instagram</span>
                  <img src="/assets/icons/north-east-arrow.svg" alt="" />
                </a>
              </div>
              <div className="mt-3" data-aos="fade-up" data-aos-delay="50">
                <a
                  className="flex items-center hover:text-berkand-orange duration-200"
                  href="https://www.facebook.com/berkand.makina.37/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mr-5">Facebook</span>
                  <img src="/assets/icons/north-east-arrow.svg" alt="" />
                </a>
              </div>
              <div className="mt-3" data-aos="fade-up" data-aos-delay="50">
                <a
                  className="flex items-center hover:text-berkand-orange duration-200"
                  href="https://www.linkedin.com/company/berkand-makina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mr-5">Linkedin</span>
                  <img src="/assets/icons/north-east-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <hr
            className="w-auto border-black border my-11"
            data-aos="fade-up"
            data-aos-delay="50"
          />
          <div className="xl:flex xl:flex-row flex-col mt-24 mb-44 hidden items-center">
            <span
              className="font-semibold xl:mr-[265px] xl:text-xl"
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
              <img src="/assets/icons/north-east-arrow.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
