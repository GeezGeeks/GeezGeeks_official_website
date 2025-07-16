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
    <div className="w-full flex flex-col items-center bg-white dark:bg-[#1E293B] rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 p-6 md:p-8 transition-colors duration-300">
      <div className="mx-auto max-w-full md:max-w-none md:m-0 mb-4">
        {getIcon}
      </div>
      <h2 className="text-xl font-bold max-w-[300px] mx-auto py-4 md:py-2 text-slate-800 dark:text-slate-100 text-center">
        {title}
      </h2>
      <p className="text-base max-w-[300px] mx-auto text-slate-600 dark:text-slate-300 text-center">
        {subtitle}
      </p>
    </div>
  );
}
