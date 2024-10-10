
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to toggle the side menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Function to scroll to a specified section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu(); // Close menu after navigating
    }
  };

  // Function to scroll to the hero section
  const scrollToTop = () => {
    const heroSection = document.getElementById("home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll event to show/hide the scroll-to-top button
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowScrollToTop(scrollY > 300); // Show button after scrolling down 300px
  };

  // Add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_items" onClick={() => scrollToSection("home")}>
            Home
          </a>
          <a href="#skills" className="nav_items" onClick={() => scrollToSection("skills")}>
            Skills
          </a>
          <a href="#projects" className="nav_items" onClick={() => scrollToSection("projects")}>
            Projects
          </a>
          <a href="#contact" className="nav_items" onClick={() => scrollToSection("contact")}>
            Contact
          </a>
        </div>
        <button className="nav-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} /> 
        </button>
      </div>

      {isOpen && (
        <div className="side-menu">
          <button className="close-menu" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} /> 
          </button>
          <a onClick={() => scrollToSection("home")} className="nav_items">Home</a>
          <a onClick={() => scrollToSection("skills")} className="nav_items">Skills</a>
          <a onClick={() => scrollToSection("projects")} className="nav_items">Projects</a>
          <a onClick={() => scrollToSection("contact")} className="nav_items">Contact</a>
        </div>
      )}
      
      <button className={`scroll-to-top ${showScrollToTop ? "show" : ""}`} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} /> 
      </button>
    </>
  );
};

export default Navbar;
