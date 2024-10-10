

import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resume 1.pdf";
import hero from "../assets/image.png";  
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my portfolio!",
      "I'm Abhay Sharma, a passionate Front-End Developer.",
      "Creating beautiful, responsive web applications is my specialty.",
      "Let's build something amazing together!",
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;