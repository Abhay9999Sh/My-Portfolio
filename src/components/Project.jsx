import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import houstrip from "../assets/projects/Housetrip.png";
import printify from "../assets/projects/printify.png";
import weatherapp from "../assets/projects/WeatherApp.png";


const Projects = () => {
  const project = [
    {
      id: 1,
      title: "HouseTrip",
      imageSrc: houstrip, 
      description:
        "A full-stack vacation rental platform where users can search rentals, list properties, and leave reviews. Integrated user authentication and features for editing/deleting listings using Passport.js and MongoDB Atlas.",
      demo: "https://housetrip.onrender.com/", 
      source: "https://github.com/Abhay9999Sh/HouseTrip", 
      technologies: ["Node.js", "Express", "MongoDB", "Leaflet.js", "Cloudinary"],
    },
    {
      id: 2,
      title: "Weather App",
      imageSrc: printify, 
      description:
        "Developed a React web application providing real-time weather data, including temperature and humidity, using the OpenWeatherMap API. Integrated an interactive map with Leaflet.js for location-based weather info.",
      demo: "https://react-weather-app-five-gamma.vercel.app/", 
      source: "https://github.com/Abhay9999Sh/React-Weather-App", 
      technologies: ["React", "OpenWeatherMap API", "Leaflet.js", "Bootstrap"],
    },
    {
      id: 3,
      title: "Printify Pro",
      imageSrc: weatherapp, 
      description:
        "Created a fully responsive homepage for Printify Pro using React and Tailwind CSS. The adaptive layout enhances user experience across devices and is designed for easy maintenance and scalability.",
      demo: "https://printify-pro.vercel.app/", 
      source: "https://github.com/Abhay9999Sh/printify-homepage", 
      technologies: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <div className="container projects my-3" id="projects">
      <h1>PROJECTS</h1>
      <div className="row d-flex mr-4 justify-content-center align-content-center">
        {project.map((data) => (
          <div
            key={data.id}
            className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
          >
            <div
              className="card bg-dark mr-4 text-light"
              style={{
                width: "18rem",
                height: "100%", 
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                  style={{
                    width: "250px",
                    height: "200px",
                    border: "2px solid yellow",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h3 className="card-title mb-4" style={{ color: "lightgreen" }}>
                  {data.title}
                </h3>
                <p className="card-text">{data.description}</p>
                <p className="card-text">
                  <strong style={{ color: "lightgoldenrodyellow" }}>Technologies:</strong>{" "}
                  {data.technologies.join(", ")}
                </p>
                <div className="d-flex justify-content-center">
                  <a href={data.demo} className="btn btn-primary mx-2">
                    <FontAwesomeIcon icon={faLink} className="mr-1" />
                    &nbsp; Demo
                  </a>
                  <a href={data.source} className="btn btn-warning mx-2">
                    <FontAwesomeIcon icon={faGithub} className="mr-1" />
                     &nbsp; Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
