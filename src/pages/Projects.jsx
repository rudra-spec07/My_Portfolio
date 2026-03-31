import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Projects() {
  const projectList = [
    {
      title: "E-Commerce Store",
      description: "A fully responsive modern e-commerce store built with React, featuring a dynamic shopping cart and product filtering.",
      tech: [<FaReact key="react"/>, <SiTailwindcss key="tailwind"/>],
      codeLink: "https://github.com/rudra-spec07/E-Commerce.git",
      liveLink: "https://e-commerce-w27m.onrender.com"
    },
    {
      title: "Expense Tracker",
      description: "A simple and intuitive expense management application to track daily spending and visualize financial data.",
      tech: [<FaReact key="react"/>, <SiTailwindcss key="tailwind"/>],
      codeLink: "https://github.com/rudra-spec07/Expense-Tracker.git",
      liveLink: "https://rudra-spec07.github.io/Expense-Tracker/"
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard pulling live data from external APIs to display market trends.",
      tech: [<FaReact key="react"/>, <SiTailwindcss key="tailwind"/>],
      codeLink: "https://github.com/rudra-spec07/Crypto--Dashboard.git",
      liveLink: "https://rudra-spec07.github.io/Crypto--Dashboard/"
    }
  ];

  return (
    <PageWrapper>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#0f172a] text-slate-200 px-6 py-20 md:px-12 lg:px-24">
        
        {/* Ambient Glows */}
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A collection of my recent work, showcasing my skills in frontend development and UI design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projectList.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#1e293b]/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 flex flex-col h-full hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                {/* Tech Icons */}
                <div className="flex gap-3 mb-4 text-blue-400 text-xl">
                  {project.tech}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons Container */}
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg font-medium transition-all"
                  >
                    <FiGithub size={18} /> View Code
                  </a>
                  
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-blue-400 hover:text-blue-300 font-medium transition-all"
                  >
                    Live Demo <FiExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}