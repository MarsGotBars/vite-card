import React, { useState } from "react";
import "./card.css";

export default function Card() {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <main>
      <div className="container">
        <div>
          <button aria-label="zie meer"></button>
        </div>
        <figure>
          <img src="/ik.jpeg" alt="Marcin Magdziak" />
          <figcaption>
            <h1 className="slide">Marcin</h1>
          </figcaption>
        </figure>
        <article className="content">
          <div>
            <h2>Hobbies</h2>
            <ul>
              <li>Coding</li>
              <li>Testing</li>
              <li>extra</li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
}
