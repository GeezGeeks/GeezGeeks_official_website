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
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg transition-colors duration-300">
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
            text="They prioritize clear communication with their customers, and I appreciate their approach to customer service. Overall, they are the best organization I have ever worked for."
            author="Saron Alemayehu"
          />
        </div>
      </Slider>
    </div>
  );
}
