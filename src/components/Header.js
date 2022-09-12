import React from "react";

import ModalAddEvents from "./ModalAddEvents";

const MenuIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="32px" width="32px">
      <path
        d="M3.05025 3.05025C0.316583 5.78392 0.316583 10.2161 3.05025 12.9497C5.78392 15.6834 10.2161 15.6834 12.9497 12.9497C15.6834 10.2161 15.6834 5.78392 12.9497 3.05025C10.2161 0.316583 5.78392 0.316583 3.05025 3.05025ZM7.80216 11.6667V11.6535C7.3801 11.6535 7.03717 11.3112 7.03717 10.8899V8.95452H5.09832C4.67626 8.95452 4.33333 8.61221 4.33333 8.1909V7.78276C4.33333 7.36146 4.67626 7.01915 5.09832 7.01915H7.03717V5.09695C7.03717 4.67564 7.3801 4.33333 7.80216 4.33333H8.21103C8.63309 4.33333 8.97602 4.67564 8.97602 5.09695V7.03232H10.9017C11.3237 7.03232 11.6667 7.37463 11.6667 7.79593V8.20407C11.6667 8.62537 11.3237 8.96768 10.9017 8.96768H8.96283V10.9031C8.96283 11.3244 8.6199 11.6667 8.19784 11.6667H7.80216Z"
        fill="#00bfff"
      ></path>
    </svg>
  );
};

const Header = ({ displayedDate, setDisplayedDate, onNext, onPrev, setYearNum, setMonthNum, onClick }) => {
  const onChangeDate = (prevDate, nextDate) => {
    const prevDateArr = prevDate.split("-").map((str) => Number(str));
    const nextDateArr = nextDate.split("-").map((str) => Number(str));
    setYearNum((prevYear) => prevYear + (nextDateArr[0] - prevDateArr[0]));
    setMonthNum((prevMonth) => prevMonth + (nextDateArr[1] - prevDateArr[1]));
  };
  return (
    <div className="flex w-full py-3 border-b shadow-md">
      <div className="flex justify-between w-full max-w-[1460px] px-[80px] mx-auto">
        <button onClick={onClick}>
          <MenuIcon />
        </button>
        <div className="relative flex items-center">
          <button onClick={onPrev} className="py-1 px-3 rounded-full hover:bg-blue-100">
            {"<"}
          </button>
          <input
            className="max-w-[155px] focus:outline-none"
            onChange={(e) => {
              setDisplayedDate(e.target.value);
              onChangeDate(displayedDate, e.target.value);
            }}
            type="month"
            value={displayedDate}
          />
          <button onClick={onNext} className="py-1 px-3 rounded-full hover:bg-blue-100">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
