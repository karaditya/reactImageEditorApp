import React from "react";
import "./Slider.css";

export default function Slider({ min, max, value, handleChange }) {
  return (
    <div className="slider__container">
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
