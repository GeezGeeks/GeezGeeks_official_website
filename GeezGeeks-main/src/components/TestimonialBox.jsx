import React from "react";

import QuoteIcon from "../assets/svg/Quotes";

export default function TestimonialBox({ text, author }) {
  return (
    <div className="w-full darkBg radius8 flex flex-col items-center px-8 py-5 mt-8">
      <div className="relative -top-10">
        <QuoteIcon />
      </div>
      <p className="whiteColor font13 pb-7 text-center">{text}</p>
      <p className="orangeColor font13 self-end italic">{author}</p>
    </div>
  );
}
