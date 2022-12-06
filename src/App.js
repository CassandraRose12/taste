import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import jpg1 from "./components/photo/jpg1.jpg"


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact />
      </Routes>
      <h1>Traveling Through Our TasteBuds</h1>
      <img src={jpg1} alt="food on table"></img>
      <h2>Elevate Your Tastebuds</h2>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
