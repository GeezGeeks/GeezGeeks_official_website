import React from "react";
import FullButton from "./FullButton";
import MonitorIcon from "../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../assets/svg/Services/BrowserIcon";
import PenandPc from "../assets/svg/Services/PenandPC";
import CheckMark from "../assets/svg/Checkmark";

export default function PricingTable({
  icon,
  price,
  title,
  text,
  offers,
  action,
}) {
  const icons = {
    PenandPc: <PenandPc />,
    monitor: <MonitorIcon />,
    browser: <BrowserIcon />,
  };

  const getIcon = icons[icon] || null;

  return (
    <div className="whiteBg radius8 shadow w-full text-left p-[20px_30px] mt-[30px]">
      <div className="flexSpaceCenter">
        {getIcon}
        <p className="font30 font-extrabold">{price}</p>
      </div>
      <div className="my-[30px]">
        <h4 className="font30 font-extrabold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers?.map((item, index) => (
          <div key={index} className="flexNullCenter my-[15px]">
            <div className="relative -top-[1px] mr-[15px] min-w-[20px]">
              {item.cheked ? <CheckMark /> : null}
            </div>
            <p className="font20 font-extrabold">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="max-w-[120px] mx-auto mt-[30px]">
        <FullButton title="Buy" action={action} />
      </div>
    </div>
  );
}
