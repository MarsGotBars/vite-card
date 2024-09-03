import React from "react";
import "./card.css";
export default function Card() {
  return (
    <main>
      <div className="container">
        <figure>
          <figcaption className="content">
            {/* find image */}
            <h1>Marcin</h1>
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
