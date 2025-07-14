import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
import LogoIcon from "../assets/svg/Logo";
import BurgerIcon from "../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <nav className={`fixed top-0 left-0 w-full z-[999] whiteBg animate transition-all duration-300 flexCenter`} style={{ height: y > 100 ? "60px" : "80px" }}>
        <div className="container flexSpaceCenter relative h-full">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 className="font20 extraBold ml-[15px]">fanatic</h1>
          </Link>

          <button onClick={() => toggleSidebar(!sidebarOpen)} className="pointer block md:hidden outline-none border-0 bg-transparent h-full px-[15px]">
            <BurgerIcon />
          </button>

          <ul className="flexNullCenter hidden md:flex">
            {["home", "services", "projects", "blog", "pricing", "contact"].map((section) => (
              <li key={section} className="semiBold font15 pointer">
                <Link to={section} spy={true} smooth={true} offset={-80} activeClass="active" className="block px-[15px] py-[10px]">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flexNullCenter hidden md:flex">
            <li className="semiBold font15 pointer">
              <a href="/" className="block pr-[30px] py-[10px]">
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg px-[15px] py-[10px] block">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
