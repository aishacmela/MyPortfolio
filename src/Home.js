import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <p>👋Hello, I am</p>
      <h1>Ayisha Seimela</h1>
      <h2 className="mb-3">Frontend Developer, based in South Africa</h2>
      <div>
        <a
          href="/contact.html"
          title="contact Ayisha"
          className="btn btn-branding"
        >
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Home;
