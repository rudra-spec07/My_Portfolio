import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <FaReact className="text-[#61dafb]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
  ];

  return (
    <PageWrapper>
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#0f172a] text-slate-200 px-6 py-20 md:px-12 lg:px-24">
        
        {/* Ambient Glows */}
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="flex flex-col items-start text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            >
              About Me
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-lg text-slate-400 leading-relaxed"
            >
              <p>
                I am a passionate Frontend Developer who enjoys creating modern UI experiences. My journey in web development is driven by a deep curiosity for how things work and a desire to build intuitive, user-centric applications.
              </p>
              <p>
                Currently, I'm gaining hands-on industry experience as an Intern at <span className="text-blue-400 font-semibold">Jasiq Labs</span>, where I refine my skills in React, modern CSS frameworks, and scalable frontend architecture.
              </p>
            </motion.div>

            {/* Skills Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">My Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm font-medium text-slate-300 hover:border-blue-500 hover:bg-slate-800 transition-all cursor-default">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Circular Image */}
          <div className="relative flex justify-center items-center">
            {/* Subtle glow specifically behind the image */}
            <div className="absolute w-[280px] h-[280px] bg-purple-500 rounded-full blur-[60px] opacity-30"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10"
            >
              <img 
                src="/image2.jpeg" // Replace with your image
                alt="Rudra Kumar Choubey" 
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}