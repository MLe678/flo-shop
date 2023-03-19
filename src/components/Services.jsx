import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "V.I.P",
      desc: "You get a haircut with a hot towel shave, moisturizer, head wash, Tea Tree shampoo conditioner, with a leave in conditioner and style.",
      icon: "fas fa-star",
    },
    {
      name: "Haircut + Color",
      desc: "Consult for booking since service time may vary. ",
      icon: "fas fa-palette",
    },
    {
      name: "Haircut + Design",
      desc: "You get a haircut with a freestyle design.",
      icon: "fas fa-scissors",
    },
    {
      name: "Haircut + Beard",
      desc: "You get a haircut and beard with hot towel.",
      icon: "fas fa-scissors",
    },
    {
      name: "Haircut + Eyebrows",
      desc: "You get a haircut with your eyebrows done.",
      icon: "fas fa-scissors",
    },
    {
      name: "Skin Fade",
      desc: "This includes high, mid, and low fades.",
      icon: "fas fa-user",
    },
    {
      name: "Regular Haircut",
      desc: "This includes temp fade, even sides and line up.",
      icon: "fas fa-scissors",
    },
    {
      name: "Kids Haircut + Design",
      desc: "This includes anywhere from a classic look to a fade.",
      icon: "fas fa-child",
    },
    {
      name: "Facial",
      desc: "You get a deep facial cleanse with extractor.",
      icon: "fas fa-droplet",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Services
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white text-2" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={
                          "mb-0 " + (darkTheme ? "text-white-50 text-2" : "")
                        }
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
