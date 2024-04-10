
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Works from "./Pages/Works";

function App() {


  return (
    
    <Router>
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
      <Footer />
    </Router>


  )
}

export default App
