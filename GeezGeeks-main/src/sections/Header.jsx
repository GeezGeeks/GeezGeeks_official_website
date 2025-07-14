import React from "react";
import FullButton from "../components/FullButton";
import HeaderImage from "../assets/img/header-img.png";
import QuotesIcon from "../assets/svg/Quotes";
import Dots from "../assets/svg/Dots";

export default function Header() {
  return (
    <section id="home" className="container flexSpaceCenter pt-[80px] w-full min-h-[840px] max-[960px]:flex-col">
      <div className="w-1/2 h-full flexCenter max-[960px]:w-full max-[960px]:order-2 max-[960px]:my-[50px] max-[560px]:my-[80px]">
        <div className="max-[960px]:textCenter">
          <h1 className="extraBold font60">We are Digital Agency.</h1>
          <div className="max-w-[470px] py-[15px] pb-[50px] leading-6 font13 semiBold max-[960px]:max-w-full max-[960px]:textCenter">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </div>
          <div className="max-w-[190px] max-[960px]:mx-auto">
            <FullButton title="Get Started" />
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full relative max-[960px]:w-full max-[960px]:order-1 max-[960px]:mt-[30px]">
        <div className="flex justify-end relative z-[9] max-[960px]:justify-center">
          <img src={HeaderImage} alt="office" className="radius8 z-[9] max-[560px]:w-[80%] max-[560px]:h-auto" />
          <div className="absolute left-0 bottom-[50px] max-w-[330px] p-[30px] flexCenter darkBg radius8 z-[99] max-[960px]:left-[20px] max-[560px]:bottom-[-50px]">
            <div className="absolute left-[-20px] top-[-10px]">
              <QuotesIcon />
            </div>
            <div>
              <p className="font15 whiteColor italic">Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</p>
              <p className="font13 orangeColor textRight mt-[10px]">Ralph Waldo Emerson</p>
            </div>
          </div>
          <div className="absolute right-[-100px] bottom-[100px] z-[2] max-[960px]:right-[100px] max-[560px]:hidden">
            <Dots />
          </div>
        </div>
        <div className="lightBg w-[30%] h-[700px] absolute top-0 right-0 z-0 max-[960px]:hidden" />
      </div>
    </section>
  );
}
