

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Skills from "./components/Skills";

import Aos from "aos";
import "aos/dist/aos.css"

import Contact from "./components/Contact";
import Projects from "./components/Project";


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
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