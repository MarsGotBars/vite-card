import React, { useState } from "react";
import Slider from "../slider/Slider";
import Profile from "../profile/Profile";
import "./card.css";
import Git from "../svg/Git";
import LinkedIn from "../svg/LinkedIn";

export default function Card() {
  const [isActive, setIsActive] = useState(false);
  const hobbies = [
    "Coding",
    "Building pc's",
    "Swimming",
    "Helping",
    "Inspiring",
    "Trying out new stuff",
  ];
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <main className={isActive ? "fold" : ""}>
      <button onClick={toggleClass} aria-label="zie meer"></button>
      <Profile />
      <section>
        <article className="content">
          <h2>About me</h2>
          <div>
            <span>I love</span>
            <Slider hobbies={hobbies} />
          </div>
          <div className="wrapper">
            <p>
              Welkom op mijn kaartje! <br />
              Mijn naam is Marcin Magdziak. Ik kom uit Polen en woon momenteel in Rotterdam. <br /><br /> 
              Voor deze opleiding studeerde ik Software development aan het <br /> <a href="https://www.glr.nl/">Grafisch Lyceum Rotterdam</a> <br /> <br />
              Bekijk anders ook nog even mijn <a href="https://portfolio-marcin.netlify.app/">portfolio</a>!
            </p>
            <ul>
              <li className="link">
                <a className="icon" href="https://github.com/MarsGotBars">
                  <Git />
                </a>
              </li>
              <li className="link">
                <a className="icon" href="https://www.linkedin.com/in/marcin-magdziak-664847223/">
                  <LinkedIn />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
