import React, { useEffect } from "react";
import "./About.css";
import logo from "./assets/CEOSummit.webp";

export default function About() {
  useEffect(() => {
    // Add class to show AboutUsText after component mounts
    const aboutUsText = document.querySelector(".AboutUsText");
    aboutUsText.classList.add("visible");
  }, []);

  return (
    <section className="AboutUsContainer">
      <h1 className="font">About Us</h1>
      <div className="AboutUsInnerContainer">
        <div className="AboutUs">
          <img src={logo} className="image" alt="About Us" />
        </div>
        <div className="AboutUs">
          <p className="AboutUsHeading">HEADING</p>
          <p className="AboutUsText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            adipisci recusandae molestiae autem neque distinctio nostrum, nihil
            animi, non obcaecati dicta architecto error, voluptatibus aliquid.
            Quidem ipsum perspiciatis omnis ullam!{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
