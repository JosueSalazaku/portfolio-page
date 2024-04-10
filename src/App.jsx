
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";

function App() {


  return (
    
    <Router>
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
      <Footer />
    </Router>


  )
}

export default App
