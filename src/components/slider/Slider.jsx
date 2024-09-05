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
  }, [hobbies]);
  return (
    <ul>
      {hobbies.map((hobby, i) => {
        return (
          <li key={i} className={i === currentSlide ? "active" : ""}>
            {hobby}
          </li>
        );
      })}
      <li>{hobbies[0]}</li>
    </ul>
  );
}
