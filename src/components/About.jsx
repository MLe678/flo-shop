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
              I am not your average barber!! I don’t have awards to show. All I
              have is my word. My work ethic, Respect, Love and Loyalty drive
              me. My clients are selected few and well Respected, I have found
              love and passion for what I do!! Helping people feel good, look
              good, and be good, and loyalty has been the gift!!! Protecting my
              peace, and attracting positivity has been my mission. So if you
              get the chance to sit in my chair, you going to find out what I ‘m
              talking about !!!
              <br />
              <br /> ⚠️ It is strongly recommended to make your appointment at
              least a day ahead of time to insure a spot at your convenient time
              <br />
              <br />
              ❗️ BLOWOUTS, MOHAWKS,TAPE UPS, FADES,EYEBROWS,DESIGNS,BEARD-SKIN,
              FADES,CEASER CUTS,MiLiTARY CUTS, COMB OVERs S/O to all my clients
              that stuck with me through my lost times
              <br />
              <br />
              <br />
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
