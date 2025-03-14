import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  numberFormat,
  numberFormatOverTenThousend,
} from "../../../../../utils/formats";

// eslint-disable-next-line react/prop-types
export default function Topic({ item }) {
  return (
    <Link className="py-3 px-4 transition-colors hover:bg-[#ffffff08] relative">
      <p className="text-[13px] min-w-0 text-[#71767b] leading-4 font-normal">
        {item?.header}
      </p>
      <p className="mt-0.5 text-[15px] min-w-0 text-[#e7e9ea] leading-5 font-bold">
        {item?.title?.type === "tag" && "#"}
        {item?.title?.value}
      </p>
      {item?.postCount && (
        <p className="mt-1 text-[13px] min-w-0 text-[#71767b] leading-4 font-normal">
          {item?.postCount >= 10000
            ? numberFormatOverTenThousend(item?.postCount)
            : numberFormat(item?.postCount)}{" "}
          gönderi
        </p>
      )}
      <Popover className="absolute top-1.5 right-2">
        <PopoverButton className="ml-5 flex justify-center items-center flex-row w-[34.75px] h-[34.75px] hover:bg-[#1d9bf01a] text-[#71767b] hover:text-[#1d9bf0] rounded-full transition-colors outline-none">
          <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </PopoverButton>
        <PopoverPanel className="grid absolute top-2 right-0 w-[384px] max-w-[384px] bg-black rounded-xl shadow-box z-[1] overflow-hidden">
          {[
            "İlişkili içerik alakalı değil",
            "Bu gündem spam",
            "Bu gündem taciz içeriyor veya zararlı",
            "İlgimi çekmiyor",
            "Bu gündem yineleniyor",
            "Bu gündem başlığı zararlı veya spam içeriyor",
          ].map((text, index) => (
            <button
              className="flex items-center hover:bg-[#ffffff08] px-4 py-3 gap-3 transition-colors"
              key={index}
            >
              <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                <path
                  fill="currentColor"
                  d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                />
              </svg>
              <div className="leading-5 font-bold text-[15px] text-[#e7e9ea]">
                {text}
              </div>
            </button>
          ))}
        </PopoverPanel>
      </Popover>
    </Link>
  );
}

Topic.propTypes = {
  item: PropTypes.shape({
    header: PropTypes.string,
    title: PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.string,
    }),
    postCount: PropTypes.number,
  }).isRequired,
};
