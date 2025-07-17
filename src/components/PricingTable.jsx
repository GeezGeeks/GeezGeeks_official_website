import React from "react";
import FullButton from "./FullButton";
import CheckMark from "../assets/svg/Checkmark";

export default function PricingTable({
  icon,
  price,
  title,
  text,
  offers,
  action,
}) {
  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-lg w-full text-left p-8 mt-8 transition-colors duration-300 border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
        {icon && <div className="text-3xl mr-2">{icon}</div>}
        <p className="text-3xl font-extrabold text-[#2563EB] dark:text-cyan-400">
          {price}
        </p>
      </div>
      <div className="my-6">
        <h4 className="text-2xl font-bold mb-1 text-slate-800 dark:text-slate-100">
          {title}
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400">{text}</p>
      </div>
      <div>
        {offers?.map((item, index) => (
          <div key={index} className="flex items-center my-3">
            <div className="relative -top-px mr-3 min-w-[20px]">
              {item.cheked ? <CheckMark /> : null}
            </div>
            <p className="text-base font-semibold text-slate-700 dark:text-slate-200">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="max-w-[120px] mx-auto mt-6">
        <FullButton title="Buy" action={action} />
      </div>
    </div>
  );
}
