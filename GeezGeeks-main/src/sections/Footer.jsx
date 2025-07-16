import React from "react";
import { Link } from "react-scroll";
import LogoImg from "../assets/svg/Logo";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="w-full bg-slate-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-4">
          <Link
            to="home"
            smooth={true}
            offset={-80}
            className="flex items-center gap-3 cursor-pointer"
          >
            
            <h1 className="text-lg font-extrabold text-white">Geez Geeks</h1>
          </Link>

          <p className="text-sm text-slate-300">
            © {getCurrentYear()} -{" "}
            <span className="text-cyan-400 font-semibold">Geez Geeks</span> All
            Rights Reserved
          </p>

          <Link
            to="home"
            smooth={true}
            offset={-80}
            className="text-cyan-400 hover:text-cyan-200 text-sm font-semibold cursor-pointer transition-colors duration-200"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
