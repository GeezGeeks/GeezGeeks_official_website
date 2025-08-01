import React from "react";
import clsx from "clsx";
// This component is used to create a full-width button with customizable styles and actions.
export default function FullButton({ title, action, border }) {
  return (
    <button
      onClick={action ? () => action() : null}
    
      className="btn bg-purple-800 text-white py-2 px-4 border rounded-[10px] hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      tabIndex={0}
    >
      {title}
    </button>
  );
}
