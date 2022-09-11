import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Day from "./components/Day";
import ModalAddEvent from "./components/ModalAddEvent";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const App = () => {
  const [nav, setNav] = useState(0);
  const [days, setDays] = useState([]);
  const [displayedDate, setDisplayedDate] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [events, setEvents] = useState(
    localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : []
  );

  const eventOfTheDay = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    const dt = new Date();
    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    setDisplayedDate(`${dt.toLocaleDateString("en-us", { month: "long" })} ${year}`);
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    const daysArr = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: eventOfTheDay(dayString),
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: "padding",
          event: null,
          isCurrentDay: false,
          date: "",
        });
      }
    }
    setDays(daysArr);
  }, [events, nav]);

  const onSave = (title) => {
    setEvents([...events, { title: title, date: clicked }]);
  };

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full h-full max-w-[1460px] px-[80px] mx-auto">
        <div className="grid grid-cols-7 items-center w-full text-blue-400 pt-8">
          <div className="text-center">Sunday</div>
          <div className="text-center">Monday</div>
          <div className="text-center">Tuesday</div>
          <div className="text-center">Wednesday</div>
          <div className="text-center">Thursday</div>
          <div className="text-center">Friday</div>
          <div className="text-center">Saturday</div>
        </div>

        <div className="w-full h-full grid grid-cols-7 gap-x-1 gap-y-1 py-10">
          {days.map((day, index) => (
            <Day
              onClick={() => {
                if (day.value !== "padding") {
                  setClicked(day.date);
                }
              }}
              key={index}
              day={day}
            />
          ))}
        </div>
      </div>
      {clicked && !eventOfTheDay(clicked) && <ModalAddEvent onSave={onSave} onClose={() => setClicked(null)} />}
    </div>
  );
};

export default App;
