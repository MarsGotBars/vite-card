import React, { useEffect, useState } from "react";
import "./slider.css";
export default function Slider({ hobbies }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        return prevSlide === hobbies.length - 1 ? 0 : prevSlide + 1;
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);
  return (
    <ul className="slider">
      {hobbies.map((hobby, i) => {
        return (
          <li
            key={i}
            className={`item ${i === currentSlide ? "active" : ""}`}
          >
            {hobby}
          </li>
        );
      })}
    </ul>
  );
}
