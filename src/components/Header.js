import React from "react";

const Header = () => {
  return (
    <div className="flex w-full py-3 border-b shadow-md">
      <div className="w-full max-w-[1460px] px-[80px] mx-auto">
        <div id="monthDisplay"></div>
        <div className="flex items-center">
          <button className="py-2 px-6 rounded bg-blue-300 hover:bg-blue-400 duration-300 text-white mr-5">Back</button>
          <button className="py-2 px-6 rounded bg-blue-300 hover:bg-blue-400 duration-300 text-white">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
