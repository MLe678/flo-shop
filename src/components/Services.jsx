import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "V.I.P",
      desc: "Hair cut, shampoo, conditioner , hot towel with moisturizing facial cleanse",
      icon: "fas fa-star",
    },
    {
      name: "Haircut + Color",
      desc: "Description text",
      icon: "fas fa-palette",
    },
    {
      name: "Haircut + Design",
      desc: "Hot Towel , Deep Cleanse (facial)",
      icon: "fas fa-scissors",
    },
    {
      name: "Haircut + Beard + Eyebrows",
      desc: "Hot Towel , Deep Cleanse (facial)",
      icon: "fas fa-bolt",
    },
    {
      name: "Haircut + Beard",
      desc: "Hot Towel , Deep Cleanse (facial)",
      icon: "fas fa-bolt",
    },
    {
      name: "Skin Fade",
      desc: "High fade , Med fade , Low fade",
      icon: "fas fa-user",
    },
    {
      name: "Regular Haircut",
      desc: "Temp fade, Even sides , Line up",
      icon: "fas fa-scissors",
    },
    {
      name: "Kids Haircut + Design",
      desc: "Description text",
      icon: "fas fa-child",
    },
    {
      name: "Facial",
      desc: "Deep Facial Cleanse with Extractor",
      icon: "fas fa-bolt",
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
                      <h3 className={darkTheme ? "text-white" : ""}>
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
