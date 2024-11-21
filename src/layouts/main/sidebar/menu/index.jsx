import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { MENU } from "../../../../utils/consts";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {MENU.map((item, index) => (
        <NavLink key={index} to={item?.path} className="py-1 block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "inline-flex p-[11px] rounded-full items-center gap-5  group-hover:bg-[#eff3f41a] transition-colors",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-6 h-6 relative">
                {item?.notificationCount && (
                  <span className="w-[16px] h-[16px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 text-[11px] flex justify-center items-center">
                    {item?.notificationCount}
                  </span>
                )}
                {isActive ? item?.icon?.active : item?.icon?.passive}
              </div>
              <div className="pr-4 text-xl">{item?.title}</div>
            </div>
          )}
        </NavLink>
      ))}

      <button className="py-1 block group">
        <div className="inline-flex p-[11px] rounded-full items-center gap-5  group-hover:bg-[#eff3f41a] transition-colors">
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#e7e9ea"
              d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
            />
          </svg>
          <div className="pr-4 text-xl">Daha Fazla</div>
        </div>
      </button>
    </nav>
  );
}
