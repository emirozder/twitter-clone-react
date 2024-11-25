import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useCurrentAccount } from "../../../../store/auth/hooks";
import MoreAccounts from "./moreAccounts";

export default function Account() {
  const user = useCurrentAccount();

  return (
    <Popover className="relative">
      <PopoverButton className="flex w-full p-[11px] my-[11px] outline-none rounded-full items-center hover:bg-[#eff3f41a] transition-colors">
        <img
          src={user?.avatar}
          alt="profile"
          className="w-[38px] h-[38px] rounded-full"
        />
        <div className="flex flex-col mx-[11px] items-start leading-[19px] text-[14px] truncate">
          <span className="text-[#f7f9f9] font-bold">{user?.fullname}</span>
          <span className="text-[#8b98a5]">@{user?.username}</span>
        </div>
        <svg viewBox="0 0 24 24" className="ml-auto" width={17.5} height={17.5}>
          <path
            fill="#e7e9ea"
            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
          />
        </svg>
      </PopoverButton>
      <PopoverPanel className="absolute bottom-full py-[11px] w-[300px] left-1/2 -translate-x-1/2 rounded-2xl bg-black shadow-box overflow-hidden">
        {({ close }) => <MoreAccounts close={close} />}
      </PopoverPanel>
    </Popover>
  );
}
