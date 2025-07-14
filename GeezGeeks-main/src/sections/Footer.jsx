import React from "react";
import { Link } from "react-scroll";
import LogoImg from "../assets/svg/Logo";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="w-full">
      <div className="darkBg">
        <div className="container">
          <div className="flexSpaceCenter py-[30px] max-[550px]:flex-col">
            <Link to="home" smooth={true} offset={-80} className="flexCenter animate pointer">
              <LogoImg />
              <h1 className="font15 extraBold whiteColor ml-[15px]">Fanatic</h1>
            </Link>

            <p className="whiteColor font13 max-[550px]:my-[20px]">
              © {getCurrentYear()} - <span className="purpleColor font13">Fanatic</span> All Right Reserved
            </p>

            <Link to="home" smooth={true} offset={-80} className="whiteColor animate pointer font13">
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
