import React from 'react'
import ImageSlider from './ImageSlider'
import "./About.css" 
const slides = [

  { url: "http://localhost:3000/Cassandra.jpg", title: "Cassandra" },
  { url: "http://localhost:3000/jpg1.jpg", title: "Patrick" },
  { url: "http://localhost:3000/jpg1.jpg", title: "Franklin" },
];
const containerStyles = {
  width: "300px",
  height: "400px",
  margin: "0 auto",
};
function About() {
  return (
    <div className='idk'>
    <div style={containerStyles} className="ImageSlider">
        <ImageSlider slides={slides} />
      </div>
        <div className='Cassandra'>
        <h1>Cassandra</h1>
        </div>
        <div className='Patrick'>
        <h1>Patrick</h1>
        </div>
        <div className='Franklin'>
        <h1>Franklin</h1>
        </div>
    </div>
  )
}

export default About