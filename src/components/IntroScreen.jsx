import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Wait 2 seconds before showing the 2nd text
    const timer1 = setTimeout(() => setCurrentStep(1), 2000);
    // Wait 4 seconds total before showing the 3rd text
    const timer2 = setTimeout(() => setCurrentStep(2), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f172a]"
    >
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse pointer-events-none"></div>

      {/* Container to keep text centered without jumping */}
      <div className="h-24 flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          
          {/* TEXT 1: Zoom In & Out */}
          {currentStep === 0 && (
            <motion.h1
              key="step-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black text-white tracking-wide text-center"
            >
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Rudra.dev</span>
            </motion.h1>
          )}

          {/* TEXT 2: Slide from Left, Exit to Right */}
          {currentStep === 1 && (
            <motion.h2
              key="step-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-3xl md:text-5xl font-bold text-slate-300 text-center tracking-widest"
            >
              Specialist in Web Coding
            </motion.h2>
          )}

          {/* TEXT 3: Blur Reveal & Float Up */}
          {currentStep === 2 && (
            <motion.h2
              key="step-3"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              // FIXED: Added pb-2 at the end of this className to prevent the bottom from clipping
              className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center tracking-tight pb-2"
            >
              Born to explore everything.
            </motion.h2>
          )}
          
        </AnimatePresence>
      </div>

      {/* Sleek Loading Line */}
      <div className="absolute bottom-1/3 w-64 h-[2px] bg-slate-800 rounded-full overflow-hidden z-10">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 6, ease: "easeInOut" }}
          className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500"
        ></motion.div>
      </div>
    </motion.div>
  );
}