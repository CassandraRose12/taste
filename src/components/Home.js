import React from "react";
import jpg1 from "./photo/jpg1.jpg";
import jpg2 from "./photo/jpg2.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import VideoSection from "./photo/BackVideo";

function Home() {
  return (
    <div>
      <VideoSection />
      <div className="home">
        <h1>Our Mission:</h1>
        <div>
          <p>
            Our goal is to provide everyone with high quality recepies to insure
            enjoyment.
          </p>
        </div>
      </div>
      <div>
        <img className="Parra" src={jpg1} alt="food" />
        <br />
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
