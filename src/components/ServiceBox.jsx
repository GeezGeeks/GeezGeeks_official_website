import React from "react";

import RollerIcon from "../assets/svg/Services/PenandPC";
import MonitorIcon from "../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../assets/svg/Services/SEO";
import MaintainanceIcon from "../assets/svg/Services/Maintainance";

export default function ServiceBox({ icon, title, subtitle }) {
  const icons = {
    roller: <RollerIcon />,
    monitor: <MonitorIcon />,
    browser: <BrowserIcon />,
    Speaker: <PrinterIcon />,
    maintainance: <MaintainanceIcon />,
  };

  const getIcon = icons[icon] || <RollerIcon />;

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="max-w-full md:max-w-none ml-[30%]">
        {getIcon}
      </div>
      <h2 className="text-xl font-bold max-w-[300px] py-4 md:py-5 font-sans">
        {title}
      </h2>
      <p className="text-base max-w-[300px] mx-auto font-sans">
        {subtitle}
      </p>
    </div>
  );
}
