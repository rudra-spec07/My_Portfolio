import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";

export default function Navbar(){

  const [dark,setDark]=useState(false);

  const toggleDark=()=>{
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  }

  return(

    <nav className="sticky top-0 bg-white/70 backdrop-blur-md dark:bg-gray-900/70 shadow z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-blue-600">
          Rudra.dev
        </h1>

        <ul className="flex gap-6 text-gray-700 dark:text-gray-200 font-medium">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>

        <button
          onClick={toggleDark}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700"
        >
          <FaMoon/>
        </button>

      </div>

    </nav>
  );
}
