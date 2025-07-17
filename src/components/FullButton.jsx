import React from "react";
import clsx from "clsx";
// This component is used to create a full-width button with customizable styles and actions.
export default function FullButton({ title, action, border }) {
  return (
    <button
      onClick={action ? () => action() : null}
      className={clsx(
        "w-full py-3 rounded-xl font-semibold text-base outline-none transition-colors duration-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#1E293B]",
        border
          ? "border border-slate-400 bg-transparent text-slate-700 dark:text-slate-200 hover:border-blue-600 hover:text-blue-600 dark:hover:text-cyan-400 dark:hover:border-cyan-400"
          : "border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 dark:border-cyan-400 dark:bg-cyan-400 dark:text-slate-900 dark:hover:bg-cyan-500"
      )}
      tabIndex={0}
    >
      {title}
    </button>
  );
}
