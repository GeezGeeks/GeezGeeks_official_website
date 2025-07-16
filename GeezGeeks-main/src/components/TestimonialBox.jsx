import React from "react";
import QuoteIcon from "../assets/svg/Quotes";

export default function TestimonialBox({ text, author }) {
  return (
    <div className="w-full bg-slate-50 dark:bg-[#18181b] rounded-2xl flex flex-col items-center px-8 py-7 mt-8 shadow transition-colors duration-300 border border-slate-100 dark:border-slate-700">
      <div className="relative -top-8 mb-2">
        <QuoteIcon />
      </div>
      <p className="text-slate-700 dark:text-slate-200 text-base pb-6 text-center font-medium transition-colors duration-300">
        {text}
      </p>
      <p className="text-cyan-600 dark:text-cyan-400 text-sm self-end italic font-semibold transition-colors duration-300">
        {author}
      </p>
    </div>
  );
}
