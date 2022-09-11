import React from "react";

const Header = ({ displayedDate, onNext, onPrev }) => {
  return (
    <>
      <div className="flex w-full py-3 border-b shadow-md">
        <div className="flex justify-between w-full max-w-[1460px] px-[80px] mx-auto">
          <div></div>
          <div className="flex items-center">
            <button
              onClick={onNext}
              className="py-1 px-3 rounded bg-blue-300 hover:bg-blue-400 duration-300 text-white mr-5"
            >
              {"<"}
            </button>
            <div className="mr-5">{displayedDate}</div>
            <button
              onClick={onPrev}
              className="py-1 px-3 rounded bg-blue-300 hover:bg-blue-400 duration-300 text-white"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
