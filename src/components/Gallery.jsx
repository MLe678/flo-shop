import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../sass/stylesheet.scss";

// import required modules
import { EffectCards } from "swiper";

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
              effect={"cards"}
              grabCursor={true}
              loop={true}
              style={{ height: 350, width: 250 }}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="images/gallery/cut01.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut02.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut03.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut04.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut05.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut06.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut08.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut09.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut10.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut11.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut12.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut17.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut18.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut19.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut20.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut21.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut22.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut23.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut24.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut25.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut26.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut27.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut28.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut29.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut30.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut31.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut32.jpg" alt="Cut" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/gallery/cut33.jpg" alt="Cut" />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
}
