import React from "react";
// This component is used to display a blog box with a title, text, tag, and author.
export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <button onClick={action ? () => action() : null} className="animate pointer w-full text-left mt-[30px] border-0 outline-none bg-transparent hover:opacity-50">
      <div className="whiteBg radius8 shadow px-[30px] py-[20px]">
        <h3 className="font20 font-extrabold">{title}</h3>
        <p className="font13 py-[30px]">{text}</p>
        <p className="font13 font-extrabold">{author}</p>
        <div className="flex">
          <p className="tag coralBg radius6 font13 font-extrabold">{tag}</p>
        </div>
      </div>
    </button>
  );
}
