import React from "react";
import "./Testimonial.css";
import gym from "../../img/webGym.png";
import portofolio from "../../img/portofolio.png";
import dashboard from "../../img/dashboard.png";
import socialMedia from "../../img/socialMedia.png";
import multiuser from "../../img/multiUser.png";
import crud from "../../img/crud.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: gym,
      review1: "Website Gym",
      review2:
        "An interactive Gym website with lots of animations displayed, as well as an elegant and responsive design...",
      button1: (
        <a
          href="https://fitclubzan.pages.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <button>Demo</button>
        </a>
      ),
      button2: (
        <a
          href="https://github.com/ahmadabuya/webGym"
          target="_blank"
          rel="noreferrer"
        >
          <button>Github</button>
        </a>
      ),
    },
    {
      img: portofolio,
      review1: "Website Portofolio",
      review2:
        "An interactive portfolio website with lots of animation displayed, as well as an elegant and responsive design...",
      button1: (
        <a href="#1" target="_blank" rel="noreferrer">
          <button>Demo</button>
        </a>
      ),
      button2: (
        <a
          href="https://github.com/ahmadabuya/portofolio_abuya"
          target="_blank"
          rel="noreferrer"
        >
          <button>Github</button>
        </a>
      ),
    },
    {
      img: dashboard,
      review1: "Website Dashboard",
      review2:
        "admin dashboard website which is useful for monitoring incoming and outgoing data via graphs, elegant design, available calendar and todo-list features, etc...",
      button1: (
        <a href="#3" target="_blank" rel="noreferrer">
          <button>Demo</button>
        </a>
      ),
      button2: (
        <a
          href="https://github.com/ahmadabuya/Dashboard"
          target="_blank"
          rel="noreferrer"
        >
          <button>Github</button>
        </a>
      ),
    },
    {
      img: socialMedia,
      review1: "Web Social Media",
      review2:
        "website social media seperti hal nya instagram disertai fitur login, update profile dan upload foto dengan design yang memanjakan mata...",
      button1: (
        <a href="#5" target="_blank" rel="noreferrer">
          <button>Demo</button>
        </a>
      ),
      button2: (
        <a
          href="https://github.com/ahmadabuya/social_media3"
          target="_blank"
          rel="noreferrer"
        >
          <button>Github</button>
        </a>
      ),
    },
    {
      img: multiuser,
      review1: "Login Multi User",
      review2:
        "Multi user login which is used to limit access to certain users...",
      button1: (
        <a href="#7" target="_blank" rel="noreferrer">
          <button>Demo</button>
        </a>
      ),
      button2: (
        <a
          href="https://github.com/ahmadabuya/MultiUser"
          target="_blank"
          rel="noreferrer"
        >
          <button>Github</button>
        </a>
      ),
    },
    {
      img: crud,
      review1: "CRUD",
      review2:
        "Learn web CRUD (create update and delete) which is useful for building a website with a connection to a database...",
      button1: (
        <a href="#9" target="_blank" rel="noreferrer">
          <button>Demo</button>
        </a>
      ),
      button2: (
        <a
          href="https://github.com/ahmadabuya/CRUD"
          target="_blank"
          rel="noreferrer"
        >
          <button>Github</button>
        </a>
      ),
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Recent Projects </span>
        <span>Portofolio </span>
        {/* <span>from me...</span> */}
        <div
          className="blur t-blur1"
          style={{
            background: "var(--purple)",
          }}
        ></div>
        <div
          className="blur t-blur2"
          style={{
            background: "var(--skyblue)",
          }}
        ></div>
      </div>
      {/* slider */}

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span className="text1">{client.review1}</span>
                <span className="text2">{client.review2}</span>
                <div className="btn">
                  <span>{client.button1}</span>
                  <span>{client.button2}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
