import React from "react";
import jpg1 from "./photo/jpg1.jpg";
import jpg2 from "./photo/jpg2.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import VideoSection from "./photo/BackVideo";
import {
  FirstImage,
  ImageBg,
  ImgContent,
  ImgH1,
  ImgP1,
} from "./photo/BackVideo/Elements";
import { ImgBg } from "./photo/BackVideo/Elements";

function Home() {
  return (
    <div>
      <VideoSection />
      <div className="home">
        <h1>Our Mission:</h1>
        <p>
          Our goal is to provide everyone with high quality recepies to insure
          enjoyment.
        </p>
      </div>
      <div>
        {/* <FirstImage>
          <ImgBg>
            <ImageBg src={jpg1} type="image.jpg" />
          </ImgBg>
          <ImgContent>
            <ImgH1>
              Travel Around The World <br></br> For Food
            </ImgH1>
            <ImgP1>
              Elevate Your TasteBuds{" "}
              <Link to="/Countries">
                <b>Here</b>
              </Link>
            </ImgP1>
          </ImgContent>
        </FirstImage> */}
        <div className="image-container">
          <img src={jpg1} alt="food" />
          <div className="hover-text">
            <h1 className="text">
              Travel Around The World <br></br> For Food
            </h1>
            {/* <p>
              Elevate Your TasteBuds
              <Link to="/Countries">
                <b> Here</b>
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
