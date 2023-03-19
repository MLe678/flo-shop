const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section
      id="about"
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
            About
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            About
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5 justify-content-center text-center">
          {/* contact details */}
          <div className="justify-content-center text-center">
            <p className={"text-2 mb-4 " + (darkTheme ? "text-light" : "")}>
              My name is FredyFlo, and I am a barber with 20+ years of
              experience. I love using my creativity and attention to detail to
              help my clients look and feel their best. As a barber, I take
              pride in delivering quality haircuts, shaves, and grooming
              services to all of my clients. I am always looking to stay on top
              of the latest trends and techniques in the industry, and I am
              constantly learning new skills to improve my craft.
              <br />
              <br />
              When I'm not working, I enjoy documentaries, sightseeing, learning
              about herbal medicine, watching my nephew play soccer, and
              spending time with my family and friends. Thank you for your
              support and taking the time to learn more about me!
            </p>
            <div className="image-container">
              <img src="/images/profile.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
