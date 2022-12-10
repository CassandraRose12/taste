import React from 'react'
import ImageSlider from './ImageSlider'

const slides = [

  { url: "http://localhost:3000/jpg1.jpg", title: "italy" },
  { url: "http://localhost:3000/jpg2.jpg", title: "italy" },
  { url: "http://localhost:3000/jpg1.jpg", title: "italy" },
  { url: "http://localhost:3000/jpg1.jpg", title: "italy" },
  { url: "http://localhost:3000/jpg1.jpg", title: "italy" },
];
const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
};
function About() {
  return (
    <div style={containerStyles} className="ImageSlider">
        <ImageSlider slides={slides} />
      </div>
  )
}

export default About