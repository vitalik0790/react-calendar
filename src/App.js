import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Day from "./components/Day";
import ModalAddEvent from "./components/ModalAddEvent";
import ModalDeleteAndEditEvent from "./components/ModalDeleteAndEditEvent";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const App = () => {
  const [monthNum, setMonthNum] = useState(0);
  const [yearNum, setYearNum] = useState(0);
  const [days, setDays] = useState([]);
  const [displayedDate, setDisplayedDate] = useState();
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
    if (monthNum !== 0) {
      dt.setMonth(new Date().getMonth() + monthNum);
    }
    if (yearNum !== 0) {
      dt.setYear(new Date().getYear() + yearNum);
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

    setDisplayedDate(`${year}-${(month + 1).toString().padStart(2, "0")}`);
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    const daysArr = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${(month + 1).toString().padStart(2, "0")}/${(i - paddingDays).toString().padStart(2, "0")}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: (i - paddingDays).toString().padStart(2, "0"),
          event: eventOfTheDay(dayString),
          isCurrentDay: i - paddingDays === day && monthNum === 0,
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
  }, [events, monthNum]);

  const onSave = (title) => {
    setEvents([...events, { title: title, date: clicked }]);
    setClicked(null);
  };

  const onDelete = () => {
    setEvents(events.filter((e) => e.date !== clicked));
    setClicked(null);
  };
  console.log("monthNum", monthNum);
  console.log("yearNum", yearNum);
  return (
    <div className="w-full h-full">
      <Header
        displayedDate={displayedDate}
        setMonthNum={setMonthNum}
        setYearNum={setYearNum}
        setDisplayedDate={setDisplayedDate}
        onNext={() => setMonthNum(monthNum + 1)}
        onPrev={() => setMonthNum(monthNum - 1)}
      />
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
      {clicked && eventOfTheDay(clicked) && (
        <ModalDeleteAndEditEvent
          eventText={eventOfTheDay(clicked).title}
          onDelete={onDelete}
          onClose={() => setClicked(null)}
        />
      )}
    </div>
  );
};

export default App;
