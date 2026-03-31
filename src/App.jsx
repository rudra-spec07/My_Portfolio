import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroScreen from "./components/IntroScreen";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  // 1. Check if the user has already seen the intro this session
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("introPlayed");
  });

  useEffect(() => {
    // 2. If they haven't seen it, set a timer to hide it and mark it as played
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("introPlayed", "true"); // Save to browser memory
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  return (
    <div className={showIntro ? "h-screen overflow-hidden" : ""}>
      <BrowserRouter>
        
        <AnimatePresence>
          {showIntro && <IntroScreen key="intro" />}
        </AnimatePresence>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        
      </BrowserRouter>
    </div>
  );
}