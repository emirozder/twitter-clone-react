import classNames from "classnames";
import { setCurrentAccount } from "../../../../../store/auth/actions";
import {
  useAccounts,
  useCurrentAccount,
} from "../../../../../store/auth/hooks";

// eslint-disable-next-line react/prop-types
export default function MoreAccounts({ close }) {
  const userAccounts = useAccounts();
  const currentAccount = useCurrentAccount();
  return (
    <>
      {userAccounts.map((account, index) => (
        <button
          type="button"
          disabled={account?.id === currentAccount?.id}
          onClick={() => {
            account?.id !== currentAccount?.id && setCurrentAccount(account);
            close();
          }}
          key={index}
          className={classNames(
            "flex w-full py-[11px] px-[15px] outline-none items-center",
            {
              "hover:bg-[#eff3f41a] transition-colors":
                account?.id !== currentAccount?.id,
            }
          )}
        >
          <img
            src={account?.avatar}
            alt="profile"
            className="w-[38px] h-[38px] rounded-full"
          />
          <div className="flex flex-col mx-[11px] items-start leading-[19px] text-[14px] truncate">
            <span className="text-[#f7f9f9] font-bold">
              {account?.fullname}
            </span>
            <span className="text-[#8b98a5]">@{account?.username}</span>
          </div>
          {account?.id === currentAccount?.id && (
            <div className="flex-1">
              <div className="flex flex-col items-end">
                <svg
                  viewBox="0 0 24 24"
                  width={17.5}
                  height={17.5}
                  className="ml-auto mr-2"
                >
                  <path
                    fill="#00ba7c"
                    d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
                  />
                </svg>
              </div>
            </div>
          )}
        </button>
      ))}

      <div className="my-[11px] bg-[#38444d] h-px" />

      <button className="flex w-full text-[#f7f9f9] text-[14px] leading-[19px] font-bold py-[11px] px-[15px] hover:bg-[#eff3f41a] transition-colors shrink">
        Var olan bir hesap ekle
      </button>
      <button className="flex w-full text-[#f7f9f9] text-[14px] leading-[19px] font-bold py-[11px] px-[15px] hover:bg-[#eff3f41a] transition-colors shrink">
        Hesapları yönet
      </button>
      <button className="flex w-full text-left text-[#f7f9f9] text-[14px] leading-[19px] font-bold py-[11px] px-[15px] hover:bg-[#eff3f41a] transition-colors shrink">
        <div className="max-w-[200px]">
          @{currentAccount?.username} hesabından çıkış yap
        </div>
      </button>
    </>
  );
}
