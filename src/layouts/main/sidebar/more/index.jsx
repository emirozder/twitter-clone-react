import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { MORE_MENU } from "../../../../utils/consts";

export default function More() {
  return (
    <Popover className="relative">
      <PopoverButton className="py-1 block group outline-none">
        <div className="inline-flex p-[11px] rounded-full items-center group-hover:bg-[rgba(239,243,244,0.1)] transition-colors">
          <svg viewBox="0 0 24 24" width={24.5} height={24.5}>
            <path
              fill="#e7e9ea"
              d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
            />
          </svg>
          <div className="mr-[15px] ml-[19px] text-[19px] leading-[23px]">
            Daha fazla
          </div>
        </div>
      </PopoverButton>
      <PopoverPanel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
        {MORE_MENU.map((item, index) => (
          <NavLink key={index} to={item?.path} className="block group">
            {
              <div
                className={
                  "flex p-[15px] items-center group-hover:bg-[#eff3f41a] transition-colors"
                }
              >
                <div className="w-[23px] h-[23px] mr-[23px] relative">
                  {item?.notificationCount && (
                    <span className="w-[16px] h-[16px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 text-[11px] flex justify-center items-center">
                      {item?.notificationCount}
                    </span>
                  )}
                  {item?.icon}
                </div>
                <div className="text-[19px] font-bold leading-[23px] flex-1">
                  {item?.title}
                </div>
              </div>
            }
          </NavLink>
        ))}
      </PopoverPanel>
    </Popover>
  );
}
