import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
