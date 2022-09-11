import React, {useState} from "react";

const Header = ({ displayedDate, onNext, onPrev }) => {
  const dt = new Date();
  const year = dt.getFullYear();
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const [value, setValue] = useState(`${year}-${month}`);
  console.log(month);
  console.log(year);
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
            <input className="" onChange={(e)=>setValue(e.target.value)} type="month" value={value}></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
