import React from "react";

import RollerIcon from "../assets/svg/Services/PenandPC";
import MonitorIcon from "../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../assets/svg/Services/SEO";
import MaintainanceIcon from "../assets/svg/Services/Maintainance"

export default function ServiceBox({ icon, title, subtitle }) {
  const icons = {
    roller: <RollerIcon />,
    monitor: <MonitorIcon />,
    browser: <BrowserIcon />,
    Speaker: <PrinterIcon />,
    maintainance: <MaintainanceIcon/>
  };

  const getIcon = icons[icon] || <RollerIcon />;

  return (
    <div className="w-full flex items-center flex-col">
      <div className="mx-auto max-w-full md:max-w-none md:m-0">{getIcon}</div>
      <h2 className="font20 font-extrabold max-w-[300px] mx-auto py-10 md:py-5">{title}</h2>
      <p className="font15 max-w-[300px] mx-auto">{subtitle}</p>
    </div>
  );
}
