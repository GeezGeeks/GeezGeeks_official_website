import React from "react";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
import LogoIcon from "../assets/svg/Logo";
import BurgerIcon from "../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = React.useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] whiteBg dark:bg-[#424247] animate transition-all duration-300 flexCenter`}
        style={{ height: y > 100 ? "60px" : "80px" }}
      >
        <div className="container flexSpaceCenter relative h-full">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
          </Link>
          <button
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="pointer block md:hidden outline-none border-0 bg-transparent h-full px-[15px]"
          >
            <BurgerIcon />
          </button>
          <ul className="flexCenter hidden md:flex">
            {["home", "services","About Us", "projects", "blog", "contact"].map(
              (section) => (
                <li key={section} className="semiBold font18 pointer">
                  <Link
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    activeClass="active"
                    className="block px-[15px] py-[10px] hover:text-purple-800 focus:text-purple-800 active:text-purple-800 transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
