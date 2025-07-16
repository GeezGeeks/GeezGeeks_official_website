import React from "react";
import { Link } from "react-scroll";
import CloseIcon from "../assets/svg/CloseIcon";
import LogoIcon from "../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <nav className={`fixed top-0 h-screen z-[9999] px-[30px] darkBg animate transition-all duration-300 ${sidebarOpen ? "right-0" : "-right-[400px]"} w-[400px] max-w-full`}>
      <div className="flexSpaceCenter py-[20px]">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font20 ml-[15px]">fanatic</h1>
        </div>
        <button onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer p-[10px] bg-transparent border-0 outline-none">
          <CloseIcon />
        </button>
      </div>

      <ul className="flexNullCenter flexColumn py-[40px]">
        {["home", "services", "projects", "blog", "pricing", "contact"].map((section) => (
          <li key={section} className="semiBold font15 pointer my-[20px]">
            <Link to={section} spy={true} smooth={true} offset={-60} onClick={() => toggleSidebar(!sidebarOpen)} activeClass="active" className="whiteColor block px-[15px] py-[10px]">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
