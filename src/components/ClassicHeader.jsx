import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

const ClassicHeader = ({ handleNavClick }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu");

    if (header) {
      if (
        document.body.scrollTop > 180 ||
        document.documentElement.scrollTop > 180
      ) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <header id="header" className="sticky-top-slide">
      {/* Navbar */}
      <nav
        className={
          "primary-menu navbar navbar-expand-lg navbar-dark bg-transparent border-bottom-0 sticky-top " +
          (stickyHeader ? "sticky-on" : "")
        }
      >
        <div className="container-fluid position-relative g-lg-4">
          <div className="col-auto col-lg-2">
            {/* Logo */}
            <Link
              smooth
              duration={500}
              style={{ cursor: "pointer" }}
              className="logo"
              to="home"
              title="Logo"
              onClick={(e) => {
                e.preventDefault();
                setIsNavModalClose(true);
              }}
            >
              <img src="images/logo50x50.png" alt="Flo" />
            </Link>
            {/* Logo End */}
          </div>
          <div className="col col-lg-8 navbar-accordion">
            <button
              onClick={(e) => {
                setIsNavModalClose(!isNavModalClose);
              }}
              className={
                isNavModalClose
                  ? "navbar-toggler ms-auto"
                  : "navbar-toggler ms-auto show"
              }
              id="navbar-toggler"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              id="header-nav"
              className={
                isNavModalClose
                  ? "collapse navbar-collapse justify-content-center "
                  : "show navbar-collapse justify-content-center"
              }
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="home"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="about"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="services"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="gallery"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Gallery
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={
              "text-1 text-white col-auto col-lg-2 d-flex  justify-content-end align-self-center"
            }
          >
            <div className="header-right">
              <div className="header-btn">
                <a
                  className="theme-btn"
                  href="https://misterflos.setmore.com/"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  <b>💈 Book Now</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default ClassicHeader;
