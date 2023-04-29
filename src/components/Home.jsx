import React from "react";
import Videobg from "../videos/home.mp4";

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        // <div className="hero-mask opacity-8 bg-dark" />
        <div className="player hero-bg parallax">
          <video
            src={Videobg}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></video>
        </div>
        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">
                  Mister Flo Shop
                </p>
                <p className="text-5 text-light mb-4">
                  <p
                    className={"text-2 mb-1 " + (darkTheme ? "text-light" : "")}
                  >
                    Located inside Salon Lofts @ Loft #15
                    <br />
                  </p>
                  <p
                    className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}
                  >
                    <a href="http://maps.google.com/?q=5840 Roswell Rd, Atlanta, GA 30328">
                      <b>
                        5840 Roswell Rd <br />
                        Atlanta, GA 30328
                      </b>
                    </a>
                    <br />
                  </p>
                  <p
                    className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}
                  >
                    <span className="text-primary text-4 me-2">
                      <i className="fas fa-phone" />
                    </span>
                    <a href="tel: +1 404-750-5652">
                      <b>404-750-5652</b>
                    </a>
                    <br />
                    <br />
                    <ul
                      className={
                        "social-icons justify-content-center justify-content-md " +
                        (darkTheme ? "social-icons-muted" : "")
                      }
                    >
                      <li className="social-icons-instagram">
                        <a
                          href="http://www.instagram.com/fredyfloatl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram fa-xl" />
                        </a>
                      </li>
                      <li className="social-icons-tiktok">
                        <a
                          href="https://www.tiktok.com/@fredyfloatl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-tiktok fa-xl" />
                        </a>
                      </li>
                    </ul>
                  </p>
                </p>
                <a
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  href="https://misterflos.setmore.com/"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  <b>Book Now</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
