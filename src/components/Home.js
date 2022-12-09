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
import {
  SecondImage,
  Image2Bg,
  Img2Content,
  Img2H1,
  Img2P1,
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
      {/* <div>
        <img className="Parra" src={jpg1} alt="food" />
        <div className="text-on-image">
          <h1>
            Traveling Throughout <pre></pre>The World
          </h1>
          <p className="explore">
            Elevate Your TasteBuds{" "}
            <Link to="/Countries">
              <b>Here</b>
            </Link>
          </p>
        </div>
        <img className="jp2" src={jpg2} alt="h" />
      </div> */}
      <div>
        <FirstImage>
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
        </FirstImage>
        <SecondImage>
          <Image2Bg src={jpg2} type="image.jpg" />
          <Img2Content>
          </Img2Content>
        </SecondImage>
      </div>
    </div>

    // <div className="head-text">
    //   <div className="head-image">
    //     <div className="images">
    //   <img className="Parra" src={jpg1} alt="food" />
    //   <br></br>
    //   <img className="jp2" src={jpg2} alt="h" />
    //     </div>
    //   <div className="text-on-image">
    //     <h1>Traveling Throughout <pre></pre>The World</h1>
    //      <p className="explore">Elevate Your TasteBuds <Link to="/Countries"><b>Here</b></Link></p>
    //   </div>
    //   </div>
    //   <div className="home">
    //   <h1>Traveling Through Our TasteBuds</h1>
    //   <h2>Elevate Your Tastebuds</h2>
    //   </div>

    //   {/* <div style={{ backgroundImage: `url(${jpg2})` }}>
    //   </div> */}
    // </div>
  );
}

export default Home;
