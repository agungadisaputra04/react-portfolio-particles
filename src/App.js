import React from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Journey from "./containers/resume";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import NavBar from "./components/navbar/";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleOptions from "./utils/particlesConfig";

function App() {
  const location = useLocation();

  // Render particles hanya di halaman Home (path "/")
  const renderParticlesInHomePage = location.pathname === "/";

  const handleInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {/* Particles */}
      {renderParticlesInHomePage && (
        <Particles id="particles" init={handleInit} options={particleOptions} />
      )}

      {/* Navbar */}
      <NavBar />

      {/* Main pages content */}
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
