const Contact = ({ classicHeader, darkTheme }) => {
  return (
    <section
      id="contact"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
            Contact
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Contact
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5 justify-content-center text-center">
          {/* contact details */}
          <div className="justify-content-center text-center">
            <p className={"mb-3 text-2 " + (darkTheme ? "text-white" : "")}>
              Located inside Salon Lofts @ Loft #15
              <br />
            </p>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <strong>
                <a href="http://maps.google.com/?q=5840 Roswell Rd, Atlanta, GA 30328">
                  5840 Roswell Rd <br />
                  Atlanta, GA 30328
                </a>
              </strong>
              <br />
            </p>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone" />
              </span>
              <a href="tel: +1 404-750-5652">
                <b>404-750-5652</b>
              </a>
              <br />
              <br />
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope" />
              </span>
              <a href="mailto:fredyflo@misterfloshop.com">
                fredyflo@misterfloshop.com
              </a>
              <br />
              <br />
            </p>
            <p></p>

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
              <li className="social-icons-facebook">
                <a
                  href="http://www.facebook.com/100048476235227"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-xl" />
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
              <li className="social-icons-salonlofts">
                <a
                  href="http://www.salonlofts.com/mister_flo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-scissors fa-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
