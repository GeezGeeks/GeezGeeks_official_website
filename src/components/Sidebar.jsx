import React from "react";
import { Link } from "react-scroll";
import CloseIcon from "../assets/svg/CloseIcon";
import LogoIcon from "../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <nav
      className={`fixed top-0 h-screen z-[9999] px-8 bg-white border-l border-slate-200 shadow-lg transition-all duration-300 ${
        sidebarOpen ? "right-0" : "-right-[400px]"
      } w-[400px] max-w-full`}
    >
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <LogoIcon />
        </div>
        <button
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="transition p-2 bg-transparent border-0 outline-none hover:bg-slate-100 rounded-full"
        >
          <CloseIcon />
        </button>
      </div>

      <ul className="flex flex-col items-center py-10">
        {["home", "services", "projects", "blog", "contact"].map(
          (section) => (
            <li key={section} className="font-semibold text-base pointer my-5">
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-60}
                onClick={() => toggleSidebar(!sidebarOpen)}
                activeClass="active"
                className="block px-4 py-2 text-slate-700  hover:text-[#2563EB]  transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
