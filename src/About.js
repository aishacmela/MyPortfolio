import React from "react";
import "./About.css";
import ayisha from "./Images/ayisha.jpg";
import Skills from "./Skills";
import Resume from "./resume";

const About = () => {
  return (
    <div className="content-container container">
      <div className="row">
        <div className="col-lg-6">
          <img src={ayisha} className="img-fluid mt-5" alt="Ayisha" />
          <Skills />
        </div>
        <div className="col-lg-6">
          <div className="content">
            <h1 className="mb-4">Hi, I am Ayisha Seimela</h1>
            <h2 className="mb-4">Frontend Developer Based in Polokwane</h2>
            <p className="mb-5">
              I am a frontend developer with a strong skill set in HTML, CSS,
              JavaScript, API integration, GitHub, web hosting, responsive web
              design, Figma, and SEO optimization. I have a passion for creating
              appealing and user-friendly interfaces, and I am constantly
              learning and adapting to stay up to date with the latest web
              development trends. I'm a critical thinker, pay attention to
              detail, and I'm good at solving complex problems, and I am excited
              to showcase my work and contribute to innovative and impactful
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
