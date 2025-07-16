import React from "react";

export default function ProjectBox({ img, title, text, action }) {
  return (
    <div className="w-full mt-8 bg-white dark:bg-[#1E293B] rounded-2xl shadow border border-slate-100 dark:border-slate-700 p-6 transition-colors duration-300">
      <button
        className="bg-transparent border-0 outline-none p-0 m-0 w-full"
        onClick={action ? () => action() : null}
      >
        <img
          className="rounded-xl w-full h-auto my-4 hover:opacity-80 transition-opacity duration-200"
          src={img}
          alt="project"
        />
      </button>
      <h3 className="text-xl font-bold pb-2 text-slate-800 dark:text-slate-100">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}
