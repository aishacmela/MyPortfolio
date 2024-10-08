import React from "react";

const Skills = () => {
  return (
    <div className="row">
      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div className="progress-wrap">
          <h3 className="skills-h3">Photoshop</h3>
          <div className="progress">
            <div
              className="progress-bar color-1"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "75%" }}
            >
              <span>75%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
        <div className="progress-wrap">
          <h3 className="skills-h3">jQuery</h3>
          <div className="progress">
            <div
              className="progress-bar color-2"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "60%" }}
            >
              <span>60%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div className="progress-wrap">
          <h3 className="skills-h3">HTML5</h3>
          <div className="progress">
            <div
              className="progress-bar color-3"
              role="progressbar"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "85%" }}
            >
              <span>85%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
        <div className="progress-wrap">
          <h3 className="skills-h3">CSS3</h3>
          <div className="progress">
            <div
              className="progress-bar color-4"
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "90%" }}
            >
              <span>90%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div className="progress-wrap">
          <h3 className="skills-h3">WordPress</h3>
          <div className="progress">
            <div
              className="progress-bar color-5"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "70%" }}
            >
              <span>70%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
        <div className="progress-wrap">
          <h3 className="skills-h3">SEO</h3>
          <div className="progress">
            <div
              className="progress-bar color-6"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "80%" }}
            >
              <span>80%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
