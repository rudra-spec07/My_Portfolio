import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  const backgrounds = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop"  
  ];

  useEffect(() => {
    // Wait 2.5 seconds before showing the 2nd text & image
    const timer1 = setTimeout(() => setCurrentStep(1), 2500);
    // Wait 5 seconds total before showing the 3rd text & image
    const timer2 = setTimeout(() => setCurrentStep(2), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f172a] overflow-hidden"
    >
      {/* ================= BACKGROUND IMAGES ================= */}
      {/* FIXED: Removed mode="wait" so the images crossfade smoothly over each other */}
      <AnimatePresence>
        <motion.img
          key={currentStep}
          src={backgrounds[currentStep]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.85, scale: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent z-0 pointer-events-none"></div>

      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse pointer-events-none z-0"></div>

      {/* ================= TEXT CONTENT ================= */}
      <div className="h-24 flex items-center justify-center z-10">
        {/* We KEEP mode="wait" here because we want the text to swap sequentially */}
        <AnimatePresence mode="wait">
          
          {currentStep === 0 && (
            <motion.h1
              key="step-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black text-white tracking-wide text-center drop-shadow-2xl"
            >
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Rudra.dev</span>
            </motion.h1>
          )}

          {currentStep === 1 && (
            <motion.h2
              key="step-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-3xl md:text-5xl font-bold text-slate-200 text-center tracking-widest drop-shadow-2xl"
            >
              Specialist in Web Coding
            </motion.h2>
          )}

          {currentStep === 2 && (
            <motion.h2
              key="step-3"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 text-center tracking-tight pb-2 drop-shadow-2xl"
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
          transition={{ duration: 7.5, ease: "easeInOut" }}
          className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500"
        ></motion.div>
      </div>
    </motion.div>
  );
}