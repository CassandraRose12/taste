import React from "react";
import jpg1 from "./photo/jpg1.jpg";
import jpg2 from "./photo/jpg2.jpg";
import "./Home.css"

function Home() {
  return (
    <div>
      <img className="Parra" src={jpg1} alt="hi"></img>
      <div className="home">
      <h1>Traveling Through Our TasteBuds</h1>
      <h2>Elevate Your Tastebuds</h2>
      </div>

      {/* <div style={{ backgroundImage: `url(${jpg2})` }}>  
      </div> */}
    </div>
  );
}
{/* <div className="home" style={{ backgroundImage: `url(${jpg1})` }}> */}
// add button that leads to countries
export default Home;
