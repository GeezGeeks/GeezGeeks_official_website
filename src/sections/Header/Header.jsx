import React from "react";
import { scroller } from "react-scroll";
import FullButton from "../../components/FullButton.jsx";
import HeaderImage from "../../assets/img/header-img.jpg";
import QuotesIcon from "../../assets/svg/Quotes.jsx";

import Dots from "../../assets/svg/Dots.jsx";
import "./Header.css"
export default function Header() {
  return (
    <section
      id="home"
      className="container flex flex-row flexSpaceCenter pt-24 w-full min-h-[840px] max-[960px]:flex-col"
    >
      <div className="w-1/2 h-full flex items-center justify-center max-[960px]:w-full max-[960px]:order-2 max-[960px]:my-12 max-[560px]:my-20">
        <div className="max-[960px]:text-center">
          <h1 className="font-extrabold text-5xl md:text-6xl text-slate-800 dark  mb-6 leading-tight transition-colors duration-300 header-text">
            <span className="stroke-text">We Craft</span>  Digital Experiences That Inspire And Connect.
          </h1>
          <div className="max-w-xl mr-5 py-4 pb-10 leading-7 text-base font-semibold text-slate-600 dark:text-slate-600 max-[960px]:max-w-full max-[960px]:text-center">
            At GeezGeeks, we fuse design with technology to build websites,
            brands, and solutions that speak your story loud and clear.
          </div>
          <div className="w-[190px]">
            <FullButton
              title="Contact Us"
              action={() =>
                scroller.scrollTo("contact", {
                  smooth: true,
                  offset: -80,
                  duration: 500,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full relative max-[960px]:w-full max-[960px]:order-1 max-[960px]:mt-8">
        <div className="flex justify-end relative z-10 max-[960px]:justify-center">
          <img
            src={HeaderImage}
            alt="office"
            className="rounded-2xl shadow-lg z-10 max-[560px]:w-4/5 max-[560px]:h-auto"
          />
          <div className="absolute left-0 bottom-12 max-w-md p-8 flex items-center bg-white dark:bg-[#1E293B] rounded-2xl shadow-lg z-20 max-[960px]:left-5 max-[560px]:bottom-[-50px] transition-colors duration-300">
            <div className="absolute left-[-20px] top-[-10px]">
              <QuotesIcon />
            </div>
            <div>
              <p className="text-base text-slate-700 dark:text-slate-200 italic mb-2 transition-colors duration-300">
                Friends, such as we desire, are dreams and fables. Friendship
                demands the ability to do without it.
              </p>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 text-right mt-2 transition-colors duration-300">
                Ralph Waldo Emerson
              </p>
            </div>
          </div>
          <div className="absolute right-[-100px] bottom-24 z-0 max-[960px]:right-24 max-[560px]:hidden">
            <Dots />
          </div>
        </div>
        <div className="bg-slate-100 dark:bg-[#23232a] w-1/3 h-[700px] absolute top-0 right-0 z-0 max-[960px]:hidden transition-colors duration-300" />
      </div>
    </section>
  );
}
