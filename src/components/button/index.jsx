import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, children }) {
  // return createElement(
  //   "button",
  //   {
  //     className: classNames(
  //       "bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-colors",
  //       {
  //         "px-4 h-9": size === "normal",
  //         "px-4 text-[17px] h-[49px] w-full": size === "large",
  //       }
  //     ),
  //   },
  //   children
  // );
  return (
    <a
      className={classNames(
        "bg-[#1d9bf0] rounded-full flex items-center justify-center text-white hover:bg-[#1a8cd8] transition-colors",
        {
          "h-6": size === "small",
          "h-[34px]": size === "normal",
          "min-w-[49px] min-h-[49px] px-[30px]": size === "large",
        }
      )}
    >
      <span
        className={classNames("px-4 font-bold", {
          "text-xs": size === "small",
          "text-sm": size === "normal",
          "text-base leading-[19px]": size === "large",
        })}
      >
        {children}
      </span>
    </a>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"]),
  children: PropTypes.node,
};

Button.defaultProps = {
  size: "normal",
};
