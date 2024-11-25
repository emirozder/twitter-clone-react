import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { MENU } from "../../../../utils/consts";
import More from "../more";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {MENU.map((item, index) => (
        <NavLink key={index} to={item?.path} className="py-1 block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "inline-flex p-[11px] rounded-full items-center group-hover:bg-[#eff3f41a] transition-colors",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[24.5px] h-[24.5px] relative">
                {item?.notificationCount && (
                  <span className="w-[16px] h-[16px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 text-[11px] flex justify-center items-center">
                    {item?.notificationCount}
                  </span>
                )}
                {isActive ? item?.icon?.active : item?.icon?.passive}
              </div>
              <div className="mr-[15px] ml-[19px] text-[19px] leading-[23px]">
                {item?.title}
              </div>
            </div>
          )}
        </NavLink>
      ))}
      <More />
    </nav>
  );
}
