import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import "../sass/stylesheet.scss";

// import required modules
import { Navigation, Keyboard, FreeMode } from "swiper";

export default function Gallery({ classicHeader, darkTheme }) {
  return (
    <section
      id="gallery"
      className={"section " + (darkTheme ? "bg-dark-1" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Gallery
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Gallery
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5 justify-content-center text-center ">
          {/* contact details */}
          <>
            <Swiper
              keyboard={true}
              navigation={true}
              //effect={"cards"}
              grabCursor={true}
              loop={true}
              freeMode={true}
              style={{
                height: 300,
                width: 300,
                "--swiper-navigation-color": "#fff",
              }}
              modules={[Navigation, Keyboard, FreeMode]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="images/galleryhq/cut00.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut01.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut02.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut03.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut04.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut05.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut06.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut07.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut08.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut09.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut10.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut11.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut12.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut17.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut18.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut19.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut20.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut21.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut22.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut23.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut24.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut25.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut26.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut27.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut28.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut30.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut31.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut32.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut33.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/galleryhq/cut34.jpg" alt="Cut" />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
}
