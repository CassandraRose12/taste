import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Countries from "./components/Countries";
import National from "./components/National";


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/National" element={<National />}/>
        <Route path="/Countries" element={<Countries />}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
