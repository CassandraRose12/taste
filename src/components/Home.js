import React from "react";
import jpg1 from "./photo/jpg1.jpg";
// import jpg2 from "./photo/jpg2.jpg";
import "./Home.css"
import {Link} from 'react-router-dom'

function Home() {

  return (
    <div className="head-text">
      <div className="head-image">
      <img className="Parra" src={jpg1} alt="food" />
      </div>
      <div className="text-on-image">
        <h1>Traveling Throughout <pre></pre>The World</h1>
         <p className="explore">Elevate Your TasteBuds <Link to="/Countries"><b>Here</b></Link></p>
      </div>
      <div className="home">
      <h1>Traveling Through Our TasteBuds</h1>
      <h2>Elevate Your Tastebuds</h2>
      </div>

      {/* <div style={{ backgroundImage: `url(${jpg2})` }}>  
      </div> */}
    </div>
  );
}

// add button that leads to countries
export default Home;
