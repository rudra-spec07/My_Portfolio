import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Added these for the mobile menu!

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controls the mobile menu

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  // Helper function to close the mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    // Used slate-900 to perfectly match the dark background of your Home page
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md dark:bg-slate-900/80 shadow z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400 z-50">
          <Link to="/" onClick={closeMenu}>Rudra.dev</Link>
        </h1>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-8 text-slate-700 dark:text-slate-200 font-medium items-center">
          <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4 z-50">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            <FaMoon />
          </button>

          {/* Mobile Hamburger Menu Button (Hidden on Desktop) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-slate-200"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* This only shows up if isOpen is true AND we are on a small screen */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-6 text-slate-700 dark:text-slate-200 font-medium text-lg">
          <li><Link to="/" onClick={closeMenu} className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link></li>
          <li><Link to="/projects" onClick={closeMenu} className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}