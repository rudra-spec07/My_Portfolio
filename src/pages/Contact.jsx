import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageWrapper from "../components/PageWrapper";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiTwitter, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; // Using FontAwesome for the specific WhatsApp brand icon

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  // Replace these with your actual IDs from EmailJS.com
  const SERVICE_ID = "service_ns3fa9m"; 
  const TEMPLATE_ID = "template_27kozt8";
  const PUBLIC_KEY = "hA3HLoHbUvM16esY2";

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
          setIsSending(false);
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
          setIsSending(false);
      });
  };

  return (
    <PageWrapper>
      <section id="contact" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#0f172a] text-slate-200 px-6 py-20 md:px-12 lg:px-24">
        
        {/* --- AMBIENT BACKGROUND GLOWS --- */}
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ================= LEFT SIDE: CONTACT INFO ================= */}
          <div className="flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-md leading-relaxed">
                I'm always open to collaborating on projects, discussing new ideas, or just talking about tech.
              </p>
            </motion.div>

            {/* Direct Contact Methods */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 mb-10"
            >
              {/* GMAIL UPGRADE: Now direct link */}
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Email Me At</p>
                  <a href="mailto:rudrachoubey70@gmail.com" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
                    rudrachoubey70@gmail.com
                  </a>
                </div>
              </div>

              {/* WHATSAPP UPGRADE: New section with direct link */}
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 text-green-400 group-hover:bg-green-500/10 group-hover:border-green-500/50 transition-all">
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">WhatsApp Me</p>
                  <a 
                    href="https://wa.me/916299147762" // REPLACE WITH YOUR NUMBER
                    target="_blank" 
                    rel="noreferrer"
                    className="text-lg font-bold text-white hover:text-green-400 transition-colors"
                  >
                    +91 6299147762
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-all">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Location</p>
                  <p className="text-lg font-bold text-white">India</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              {[
                { icon: <FiGithub size={22} />, link: "https://github.com/rudra-spec07" },
                { icon: <FiLinkedin size={22} />, link: "https://linkedin.com" },
                { icon: <FiTwitter size={22} />, link: "https://twitter.com" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#1e293b] border border-slate-700 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.2)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE: FORM ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            
            <form 
              ref={form}
              onSubmit={sendEmail}
              className="relative bg-[#1e293b]/60 backdrop-blur-md border border-slate-700/50 p-8 rounded-2xl shadow-2xl flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">Your Name</label>
                  <input 
                    name="user_name" // Required for EmailJS
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#0f172a]/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">Your Email</label>
                  <input 
                    name="user_email" // Required for EmailJS
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#0f172a]/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-300">Message</label>
                <textarea 
                  name="message" // Required for EmailJS
                  rows="5"
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-[#0f172a]/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <motion.button 
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-bold text-lg shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Send Message"} <FiSend size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
}