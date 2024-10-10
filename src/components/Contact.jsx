import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="container contact mt-5" id="contact">
      <h1>CONTACT ME</h1>
      <div
        className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a href="https://linkedin.com/in/abhay-sharma-151912286" target="_blank" rel="noopener noreferrer" className="items">
          <FontAwesomeIcon icon={faLinkedin} className="icons" />
        </a>
        <a href="https://github.com/Abhay9999Sh" target="_blank" rel="noopener noreferrer" className="items">
          <FontAwesomeIcon icon={faGithubSquare} className="icons" />
        </a>
        <a href="mailto:abhay987123sh@gmail.com" className="items">
          <FontAwesomeIcon icon={faEnvelope} className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
