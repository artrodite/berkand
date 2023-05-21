import React, { useEffect, useRef, useState } from "react";
import GoTop from "../components/GoTop";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { contact } from "../data";
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

  const [topic, setTopic] = useState("");

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

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
              <div className="flex items-center border-form-placeholder rounded-md border h-12 xl:mt-0 mt-5">
                <span class="material-symbols-outlined text-form-placeholder m-3">
                  badge
                </span>
                <input
                  className="rounded bg-transparent xl:mt-0 h-11 py-3 px-2 outline-none placeholder:text-form-placeholder"
                  type="text"
                  name="name"
                  placeholder={contact[0].name[`${lng}`]}
                  required
                />
              </div>
              <div className="flex border-form-placeholder rounded-md border h-12 xl:mt-0 mt-5">
                <span class="material-symbols-outlined text-form-placeholder m-3">
                  mail
                </span>
                <input
                  className="rounded bg-transparent xl:mt-0 h-11 py-3 px-2 outline-none placeholder:text-form-placeholder"
                  type="email"
                  name="email"
                  placeholder={contact[0].email[`${lng}`]}
                  required
                />
              </div>
              <div className="flex border-form-placeholder rounded-md border h-12 xl:mt-0 mt-5">
                <span class="material-symbols-outlined text-form-placeholder m-3">
                  phone_iphone
                </span>
                <input
                  className="rounded bg-transparent xl:mt-0 h-11 py-3 px-2 outline-none placeholder:text-form-placeholder"
                  type="tel"
                  name="tel"
                  placeholder={contact[0].tel[`${lng}`]}
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex sm:flex-row flex-col">
              <div className="flex w-full h-12 items-center bg-form-input rounded-md hover:bg-form-input-dark duration-100">
                <span class="material-symbols-outlined text-form-placeholder m-3">
                  history_edu
                </span>
                <select
                  className="w-full h-full outline-none bg-transparent text-form-placeholder ml-2 mr-3 cursor-pointer"
                  id="topic"
                  name="topic"
                  value={topic}
                  onChange={handleTopicChange}
                  required
                >
                  <option value="">{contact[0].topic[`${lng}`]}</option>
                  {contact[0].subjects.map((p) => (
                    <option value={p[`${lng}`]}>{p[`${lng}`]}</option>
                  ))}
                </select>
              </div>
              <div className="sm:ml-12 ml-0 sm:mt-0 mt-5 w-full h-12 flex items-center justify-center bg-form-input hover:bg-form-input-dark duration-100 rounded-md">
                <label
                  for="file"
                  className="flex items-center h-full w-full cursor-pointer"
                >
                <div className="flex items-center mx-auto">

                  <span class="material-symbols-outlined text-form-placeholder">attach_file</span>
                  <span className="ml-5 text-form-placeholder">
                    {contact[0].file[`${lng}`]}
                  </span>
                </div>
                </label>
                <input type="file" id="file" name="file" className="hidden" />
              </div>
            </div>
            <div className="py-2 pr-3 flex items-start rounded-md border-form-placeholder border mt-4">
            <span class="material-symbols-outlined text-form-placeholder m-3">chat_bubble</span>
              <textarea
                className="rounded bg-transparent h-full min-h-[255px] w-full xl:h-96 py-2 px-2 resize-none outline-none placeholder:text-form-placeholder"
                type="textarea"
                name="message"
                placeholder={contact[0].message[`${lng}`]}
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="submit"
                value={contact[0].send[`${lng}`]}
                className="cursor-pointer mt-8 xl:mt-5 bg-berkand-orange hover:bg-white hover:text-berkand-orange duration-500 text-white border-2 border-berkand-orange xl:text-lg text-base w-full p-3 rounded"
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
    </div>
  );
}
