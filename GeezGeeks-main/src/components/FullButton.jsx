import React from "react";
import clsx from "clsx";
// This component is used to create a full-width button with customizable styles and actions.
export default function FullButton({ title, action, border }) {
  return (
    <button
      onClick={action ? () => action() : null}
      className={clsx(
        "animate pointer radius8 w-full py-[15px] outline-none transition-colors duration-300",
        border ? "border border-[#707070] bg-transparent text-[#707070] hover:border-[#7620FF] hover:text-[#7620FF]" : "border border-[#7620FF] bg-[#7620FF] text-white hover:bg-[#580cd2]"
      )}
    >
      {title}
    </button>
  );
}
