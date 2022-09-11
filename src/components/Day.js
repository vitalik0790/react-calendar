import React from "react";

const Day = ({ day, onClick }) => {
  return (
    <div className={`${day.value === "padding" ? "" : "h-[100px] px-3 py-3 border cursor-pointer hover:bg-green-300 duration-300"} ${day.isCurrentDay ? "bg-blue-300 hover:bg-blue-300" : ""}`} onClick={onClick}>
      <div className="">{day.value === "padding" ? "" : day.value}</div>
      {day.event && <div className="text-red-400">{day.event.title}</div>}
    </div>
  );
};

export default Day;
