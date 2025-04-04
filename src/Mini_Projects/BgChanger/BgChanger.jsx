import React from "react";
import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="text-white text-4xl font-bold mb-4">
        RisingSun Color Changer
      </div>
      <p className="text-white text-2xl font-bold mb-12">
        Click on the button to change the color of the background
      </p>
      <div className="button-bar bg-white flex justify-center items-end gap-4 px-4 py-2 rounded-md bottom-12">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>

        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={() => setColor("gray")}
        >
          Gray
        </button>
      </div>
    </div>
  );
}

export default BgChanger;
