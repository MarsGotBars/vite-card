import React, { useState } from "react";
import Slider from "../slider/Slider";
import "./card.css";

export default function Card() {
  const [isActive, setIsActive] = useState(false);
  const hobbies = ["Coding", "Building pc's", "Swimming", "Helping", "Inspiring", "Innovating", "Trying out new stuff"]
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <main className={isActive ? "fold" : ""}>
      <button onClick={toggleClass} aria-label="zie meer"></button>
      <figure>
        <img src="./ik.jpeg" alt="Marcin Magdziak" />
        <figcaption>
          <h1 className="slide">Marcin</h1>
        </figcaption>
      </figure>
      <section>
        <article className="content">
          <h2>About me</h2>
          <div>
            <span>I love</span>
            <Slider hobbies={hobbies}/>
          </div>
          <p></p>
        </article>
      </section>
    </main>
  );
}
