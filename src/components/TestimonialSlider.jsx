import React from "react";
import Slider from "react-slick";
import TestimonialBox from "./TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-2xl p-6 md:p-10 shadow-lg transition-colors duration-300">
      <Slider {...settings}>
        <div className="w-[90%] px-[5%] pointer flexCenter focus:outline-none focus:border-0">
          <TestimonialBox
            text="The team’s creativity and technical skill brought our vision to life. Ongoing support has been fantastic."
            author="Yohanes Alemu"
          />
        </div>
        <div className="w-[90%] px-[5%] pointer flexCenter focus:outline-none focus:border-0">
          <TestimonialBox
            text="GeezGeeks transformed our online store into a revenue powerhouse. Their process was transparent and on-time"
            author="Getachew Shume"
          />
        </div>
        <div className="w-[90%] px-[5%] pointer flexCenter focus:outline-none focus:border-0">
          <TestimonialBox
            text="I really love the team, how they approach their client, how they work together with a perfect coordination. They believe with having a clear communication with their customers. Overall they are the perfect organization that I have ever worked before and, I am willing to work with them again in the future."
            author="Saron Alemayehu"
          />
        </div>
      </Slider>
    </div>
  );
}
