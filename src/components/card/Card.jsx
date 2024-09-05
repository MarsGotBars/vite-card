import React, { useState } from "react";
import "./card.css";

export default function Card() {
  const [isActive, setIsActive] = useState(false);

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
          <ul>
            <li>Coding</li>
            <li>Testing</li>
            <li>extra</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
