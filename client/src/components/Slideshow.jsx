import React, { useState, useEffect } from "react";

const presets = [
  { name: "dog", color: "bg-green" },
  { name: "cat", color: "bg-red" },
  { name: "rat", color: "bg-yellow" },
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const delay = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === presets.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="my-0 mx-auto overflow-hidden max-w-lg">
      <div
        className="whitespace-nowrap ease-in duration-300"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {presets.map((preset, idx) => (
          <div
            className={`${preset.color} h-96 w-full rounded-3xl inline-block`}
            key={idx}
          >
            {preset.name}
          </div>
        ))}
      </div>
      <div className="text-center">
        {presets.map((_, idx) => (
          <div
            key={idx}
            className={`inline-block h-5 w-5 rounded-3xl cursor-pointer mt-4 mb-0 mx-2 ${
              index === idx ? "bg-white" : "bg-blue"
            }`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
