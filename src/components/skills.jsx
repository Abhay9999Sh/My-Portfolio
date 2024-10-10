import React from "react";
import htmlImage from "../assets/skills/html.png";
import cssImage from "../assets/skills/css.png"; 
import javascriptImage from "../assets/skills/javascript.png"; 
import reactImage from "../assets/skills/react.png"; 
import tailwindCssImage from "../assets/skills/tailwindcss.png"; 
import nodeImage from "../assets/skills/nodejs.png"; 
import mongodbImage from "../assets/skills/mongodb.png"; 

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      imageSrc: htmlImage 
    },
    {
      title: "CSS",
      imageSrc: cssImage 
    },
    {
      title: "JavaScript",
      imageSrc: javascriptImage 
    },
    {
      title: "React",
      imageSrc: reactImage 
    },
    {
      title: "Tailwind CSS",
      imageSrc: tailwindCssImage 
    },
    {
      title: "Node",
      imageSrc: nodeImage 
    },
    {
      title: "MongoDB",
      imageSrc: mongodbImage
    },
  ];

  return (
    <div className="container skills" id="skills">
      <h1>SKILLS</h1>
      <div className="items">
        {skills.map((data) => (
          <div
            className="item"
            key={data.title} 
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={data.imageSrc} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
