import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
