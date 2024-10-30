import React from "react";

const Tailwind = () => {
  return (
    <div className="m-4 border-purple-500 border-solid border-4 rounded-2xl p-7">
      <h1 className="animate-bounce text-4xl font-bold text-blue-500 shadow-outline">
        Vanilla Tailwind
      </h1>

      <div>
        <button className="bg-red-500 p-5 rounded-lg text-xl m-2">My Button</button>
        <button className="bg-blue-500 p-2 rounded-lg text-sm m-2">My Button</button>
      </div>
    </div>
  );
};

export default Tailwind;
