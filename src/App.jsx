import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import '../src/index.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <main className={darkMode ? "h-screen bg-neutral-900 text-white scroll-smooth transition-all duration-500 " : "h-screen text-gray-900 scroll-smooth transition-all duration-500"}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;


