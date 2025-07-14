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
    <div>
      <Slider {...settings}>
        <div className="w-[90%] px-[5%] pointer flexCenter focus:outline-none focus:border-0">
          <TestimonialBox text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it." author="Ralph Waldo Emerson" />
        </div>
        <div className="w-[90%] px-[5%] pointer flexCenter focus:outline-none focus:border-0">
          <TestimonialBox text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it." author="Ralph Waldo Emerson" />
        </div>
        <div className="w-[90%] px-[5%] pointer flexCenter focus:outline-none focus:border-0">
          <TestimonialBox text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it." author="Ralph Waldo Emerson" />
        </div>
        <div className="w-[90%] px-[5%] pointer flexCenter focus:outline-none focus:border-0">
          <TestimonialBox text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it." author="Ralph Waldo Emerson" />
        </div>
        <div className="w-[90%] px-[5%] pointer flexCenter focus:outline-none focus:border-0">
          <TestimonialBox text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it." author="Ralph Waldo Emerson" />
        </div>
        <div className="w-[90%] px-[5%] pointer flexCenter focus:outline-none focus:border-0">
          <TestimonialBox text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it." author="Ralph Waldo Emerson" />
        </div>
      </Slider>
    </div>
  );
}
