import React, { useState } from "react";

const ModalAddEvents = ({ onSave, onClose }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-[350px] rounded shadow-md bg-blue-100 p-5 z-20">
        <h2 className="text-xl font-semibold mb-4">New Event</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          className={`w-full mb-5 py-1 px-3 rounded-lg ${error ? "" : ""}`}
        />
        <button
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title);
            } else {
              setError(true);
            }
          }}
          className="w-[85px] text-md font-medium mr-4 px-2 py-1.5 border rounded-lg bg-purple-500 hover:bg-purple-600"
        >
          Save
        </button>
        <button className="w-[85px] text-md font-medium px-2 py-1.5 border rounded-lg bg-red-500 hover:bg-red-600" onClick={onClose}>
          Cancel
        </button>
      </div>
      <div onClick={onClose} className="absolute top-0 left-0 z-10 w-screen h-screen bg-black/75"></div>
    </>
  );
};

export default ModalAddEvents;
