import { useRef, useState } from "react";
import { useClickAway } from "react-use";

export default function Search() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState("");

  const ref = useRef(null);
  useClickAway(ref, () => {
    setFocus(false);
  });

  return (
    <div
      ref={ref}
      className="flex items-center min-h-[30px] h-[50px] w-[350px] mb-[11px] bg-black sticky top-0 z-10"
    >
      <label className="flex items-center justify-center w-full h-[43px] bg-[#202327] rounded-full border border-transparent group focus-within:bg-black focus-within:border-[#1d9bf0]">
        <div className="flex justify-center items-center pointer-events-none">
          <svg
            viewBox="0 0 24 24"
            width={41}
            height={17.5}
            className="min-w-[30px] text-[#71767b] pl-[11px] group-focus-within:text-[#1d9bf0]"
          >
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Ara"
          className="w-full h-full bg-transparent rounded-full outline-none p-[11px]"
          value={query}
          onFocus={() => setFocus(true)}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            type="button"
            className="flex items-center justify-center min-w-[21px] min-h-[21px] bg-[#1d9bf0] rounded-full mr-[11px] invisible group-focus-within:visible"
            onClick={() => setQuery("")}
          >
            <svg viewBox="0 0 15 15" width={10} height={10}>
              <path
                fill="#000"
                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
              ></path>
            </svg>
          </button>
        )}
      </label>
      {focus && (
        <div className="absolute bg-black top-full w-full -translate-y-0.5 min-h-[100px] max-h-[calc(-50px+80vh)] rounded-lg text-[14px] shadow-box">
          <p className="p-[11px] pt-[19px] text-[#71767b] text-center leading-[19px]">
            Kişileri, listeleri veya anahtar kelimeleri aramayı dene
          </p>
        </div>
      )}
    </div>
  );
}
