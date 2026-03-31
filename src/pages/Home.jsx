import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Home() {
  const baseDelay = sessionStorage.getItem("introPlayed") ? 0 : 8.2; 

  return (
    <PageWrapper>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a] text-slate-200 px-6 md:px-12 lg:px-24">
        
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20 lg:pt-0">
          
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: baseDelay }} className="mb-6">
              <span className="px-4 py-1.5 text-sm font-semibold text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20 backdrop-blur-sm shadow-lg">
                Intern at Jasiq Labs
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: baseDelay + 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Hi, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Rudra Kumar Choubey
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: baseDelay + 0.3 }} className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Frontend Developer specialized in React, Tailwind, and building intuitive web applications that deliver exceptional user experiences.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: baseDelay + 0.5 }} className="flex flex-wrap items-center gap-4">
              
              {/* BUTTON 1: Projects */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#projects" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all inline-block">
                  View My Work
                </a>
              </motion.div>

              {/* BUTTON 2: About */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#about" className="px-8 py-3.5 bg-transparent border-2 border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 text-slate-300 hover:text-white rounded-lg font-bold transition-all inline-block">
                  About Me
                </a>
              </motion.div>

              {/* NEW BUTTON 3: Contact */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#contact" className="px-8 py-3.5 bg-transparent border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-900/30 text-purple-300 hover:text-white rounded-lg font-bold transition-all inline-block">
                  Contact Me
                </a>
              </motion.div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 ml-2 mt-4 lg:mt-0">
                <motion.a whileHover={{ y: -4, color: "#fff" }} href="https://github.com/rudra-spec07" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700/80 border border-slate-700 rounded-lg text-slate-400 transition-all backdrop-blur-sm">
                  <FiGithub size={22} />
                </motion.a>
                <motion.a whileHover={{ y: -4, color: "#fff" }} href="https://www.linkedin.com/in/rudra-kumar-choubey-09b553318/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700/80 border border-slate-700 rounded-lg text-slate-400 transition-all backdrop-blur-sm">
                  <FiLinkedin size={22} />
                </motion.a>
                <motion.a whileHover={{ y: -4, color: "#fff" }} href="mailto:your.email@example.com" className="p-3 bg-slate-800/50 hover:bg-slate-700/80 border border-slate-700 rounded-lg text-slate-400 transition-all backdrop-blur-sm">
                  <FiMail size={22} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="relative w-full flex justify-center items-center order-1 lg:order-2 mt-10 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[80px] opacity-40"></div>
            <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: baseDelay + 0.2 }} className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl z-10">
              <img src="/image3.jpeg" alt="Rudra Kumar Choubey" className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60 pointer-events-none"></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: [0, -15, 0] }} transition={{ opacity: { duration: 0.5, delay: baseDelay + 0.5 }, y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: baseDelay + 0.5 } }} className="absolute -top-6 right-10 lg:right-auto lg:-left-6 bg-[#1e293b]/80 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl z-20">
              <FaReact className="text-4xl text-[#61dafb]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: [0, 15, 0] }} transition={{ opacity: { duration: 0.5, delay: baseDelay + 0.8 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: baseDelay + 1.8 } }} className="absolute -bottom-8 left-10 lg:left-auto lg:-right-6 bg-[#1e293b]/80 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl z-20">
              <SiTailwindcss className="text-4xl text-[#38bdf8]" />
            </motion.div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}