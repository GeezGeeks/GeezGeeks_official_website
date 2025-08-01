import React from "react";
import { Link } from "react-scroll";
import Instagram from "../assets/img/instagram.png"
import facebook from "../assets/img/facebook.png";
import telegram from "../assets/img/telegram.png";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="w-full bg-slate-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="upperFooter flex flex-col md:flex-row items-center justify-between py-5 gap-4">
          <div className="left-f float-start">
            <p className="text-center font-semibold font-">Contact Address</p>
            <p>Email: geezgeeks09@gmail.com</p>
            <p>Tell.No: +251-931460438</p>
          </div>
          <div className="right-f flex flex-col gap-8">
            <h4 className="text-center">Follow Us On</h4>
            <div className="flex gap-8">
              <a href="">
                <img src={Instagram} alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="">
                <img
                  src={facebook}
                  alt="Telegram"
                  className="w-10 h-10 bg-white! rounded-[50%] fill-white"
                />
              </a>
              <a href="">
                <img src={telegram} alt="FaceBook" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
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
