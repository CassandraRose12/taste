import React from "react";
import ImageSlider from "./ImageSlider";
import "./About.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
const slides = [
  { url: "http://localhost:3000/Cassandra.jpg", title: "Cassandra" },
  { url: "http://localhost:3000/Patrick.jpg", title: "Patrick" },
  { url: "http://localhost:3000/jpg1.jpg", title: "Franklin" },
];
const containerStyles = {
  width: "300px",
  height: "400px",
  margin: "0 auto",
};
function About() {
  return (
    <div className="idk">
      <h1 className="title">Meet The People Behind TATW</h1>
      <div style={containerStyles} className="ImageSlider">
        <ImageSlider slides={slides} />
      </div>
      <div>
        <div class="row">
          <div class="column">
            <h2>Cassandra</h2>
            <p>Some text..</p>
            <a href="http://google.com"  rel="noreferrer" target="_blank">
              {" "}
              <LinkedInIcon />{" "}
            </a>
            <a href="http://google.com"  rel="noreferrer" target="_blank">
              {" "}
              <GithubIcon />{" "}
            </a>
          </div>
          <div class="column">
            <h2>Patrick</h2>
            <p>Some text..</p>
            <a
              href="https://www.linkedin.com/in/patrick-hachicho-9b0396236/"
              rel="noreferrer" target="_blank"
            >
              {" "}
              <LinkedInIcon />{" "}
            </a>
            <a href="https://github.com/pchachicho"  rel="noreferrer" target="_blank">
              {" "}
              <GithubIcon />{" "}
            </a>
          </div>
          <div class="column">
            <h2>Franklin</h2>
            <p>Some text..</p>
            <a href="http://google.com"  rel="noreferrer" target="_blank">
              {" "}
              <LinkedInIcon />{" "}
            </a>
            <a href="http://google.com"  rel="noreferrer" target="_blank">
              {" "}
              <GithubIcon />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
