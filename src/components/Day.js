import React from "react";

const Day = ({ day, onClick }) => {
  return (
    <div
      className={`${
        day.value === "padding" ? "" : "h-[140px] px-3 py-3 border cursor-pointer hover:bg-green-300 duration-300"
      } ${day.isCurrentDay ? "bg-blue-300 hover:bg-blue-300" : ""}`}
      onClick={onClick}
    >
      <div className="flex justify-between mb-2 text-black/90">
        <div className="">{day.value === "padding" ? "" : day.value}</div>
        <div className="">{day.dayOfTheWeek.slice(0, 3)}</div>
      </div>
      {day.events &&
        day.events.map((event, index) => (
          <div key={index} className="text-red-400 bg-gray-100">
            {event.title}
          </div>
        ))}
    </div>
  );
};

export default Day;
