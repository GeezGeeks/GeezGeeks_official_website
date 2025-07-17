import React from "react";
// This component is used to display a blog box with a title, text, tag, and author.
export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <button
      onClick={action ? () => action() : null}
      className="w-full text-left mt-8 border-0 outline-none bg-transparent hover:opacity-90 transition-opacity duration-200"
    >
      <div className="bg-white dark:bg-[#1E293B] rounded-2xl shadow px-8 py-6 transition-colors duration-300 border border-slate-100 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 py-4">
          {text}
        </p>
        <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-2">
          {author}
        </p>
        <div className="flex">
          <p className="inline-block bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide">
            {tag}
          </p>
        </div>
      </div>
    </button>
  );
}
