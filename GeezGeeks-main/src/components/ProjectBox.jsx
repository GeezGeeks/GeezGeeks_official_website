import React from "react";

export default function ProjectBox({ img, title, text, action }) {
  return (
    <div className="w-full mt-8">
      <button className="animate pointer bg-transparent border-0 outline-none p-0 m-0" onClick={action ? () => action() : null}>
        <img className="radius8 w-full h-auto my-5 hover:opacity-50 transition-opacity" src={img} alt="project" />
      </button>
      <h3 className="font20 font-extrabold pb-2.5">{title}</h3>
      <p className="font13">{text}</p>
    </div>
  );
}
