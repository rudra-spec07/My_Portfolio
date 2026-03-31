import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Make sure this is here!

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroScreen from "./components/IntroScreen";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem("introPlayed"));

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("introPlayed", "true");
      }, 8000); 
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  // The Animation Settings
  const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="bg-[#0f172a] text-white">
      <AnimatePresence>
        {showIntro && <IntroScreen key="intro" />}
      </AnimatePresence>

      <Navbar />

      <main className="overflow-x-hidden">
        {/* We use 'whileInView' to trigger the animation when the section is reached */}
        <motion.section 
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={revealVariant}
        >
          <Home />
        </motion.section>

        <motion.section 
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariant}
        >
          <About />
        </motion.section>

        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariant}
        >
          <Projects />
        </motion.section>

        <motion.section 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariant}
        >
          <Contact />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}