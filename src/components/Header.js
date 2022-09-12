import React from "react";

const Header = ({ displayedDate, setDisplayedDate, onNext, onPrev, setYearNum, setMonthNum }) => {
  const onChangeDate = (prevDate, nextDate) => {
    const prevDateArr = prevDate.split("-").map((str) => Number(str));
    console.log("prevDateArr", prevDateArr)
    const nextDateArr = nextDate.split("-").map((str) => Number(str));
    console.log("nextDateArr", nextDateArr)
    console.log("prevDateArr[1]", prevDateArr[1])
    console.log("nextDateArr[1]", nextDateArr[1])
    setMonthNum((prevDateArr[1] - nextDateArr[1]) * -1)
    setYearNum((prevDateArr[0] - nextDateArr[0]) * -1)
  };
  return (
    <div className="flex w-full py-3 border-b shadow-md">
      <div className="flex justify-between w-full max-w-[1460px] px-[80px] mx-auto">
        <div></div>
        <div className="relative flex items-center">
          <button onClick={onPrev} className="py-1 px-3">
            {"<"}
          </button>
          <button onClick={onNext} className="py-1 px-3">
            {">"}
          </button>
          <input
            className="focus:outline-none"
            onChange={(e) => {
              setDisplayedDate(e.target.value);
              onChangeDate(displayedDate, e.target.value);
            }}
            type="month"
            value={displayedDate}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Header;
