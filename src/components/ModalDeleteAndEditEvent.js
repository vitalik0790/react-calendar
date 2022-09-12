import React from "react";

const ModalDeleteAndEditEvent = ({ eventsText, onClose, onDelete }) => {
  console.log(eventsText);
  return (
    <>
      <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-[350px] rounded shadow-md bg-blue-100 p-5 z-20">
        <h2 className="text-xl font-semibold mb-4">Events</h2>
        {eventsText &&
          eventsText.map((text, index) => (
            <p key={index} className="text-md font-medium mb-5">
              {text.title}
            </p>
          ))}
        <button
          className="w-[85px] text-md font-medium mr-4 px-2 py-1.5 border rounded-lg bg-purple-500 hover:bg-purple-600"
          onClick={onDelete}
        >
          Delete
        </button>
        <button
          className="w-[85px] text-md font-medium px-2 py-1.5 border rounded-lg bg-red-500 hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <div onClick={onClose} className="absolute top-0 left-0 z-10 w-screen h-screen bg-black/75"></div>
    </>
  );
};

export default ModalDeleteAndEditEvent;
