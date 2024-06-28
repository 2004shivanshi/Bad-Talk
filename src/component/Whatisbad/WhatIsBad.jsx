<<<<<<< HEAD
import React from "react";
import "./WhatIsBad.css";

=======
import React from 'react'
import "./WhatIsBad.css"
import B from "./assets/B.png" 
import A from "./assets/A.png"
import D from "./assets/D.png"
// import background from "./assets/background.avif"
import image from "./assets/img1.jpg"
>>>>>>> 2999372608e1a90ad7c2fb3fa05a14a56758d4cf
export default function WhatIsBad() {
  return (
    <section className="main_container" style={{ width: "100%" }}>
      <div className="heading">
<<<<<<< HEAD
        <h1>
          WHAT DOES{" "}
          <span style={{ color: "rgba(255, 0, 43, 0.874)" }}>B.A.D</span> MEAN?
        </h1>
      </div>
      <div className="content">
        <div className="first">
          <img src="./assets/img1.jpg" alt="img" className="image-main" />
        </div>
        <div
          className="second"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="image">
            <img src="./assets/B.png" className="img" />
            <div className="info">
              <h2>Breakdown</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                a vitae porro ipsum debitis quam nulla molestias necessitatibus
                recusandae atque temporibus earum, veniam nam, ullam error!
                Culpa corporis error omnis!
              </p>
            </div>
          </div>
          <div className="image">
            <img src="./assets/A.png" className="img2" />
            <div className="info">
              <h2>Analysis</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                a vitae porro ipsum debitis quam nulla molestias necessitatibus
                recusandae atque temporibus earum, veniam nam, ullam error!
                Culpa corporis error omnis!
              </p>
            </div>
          </div>
          <div className="image">
            <img src="./assets/D.png" className="img" />
            <div className="info">
              <h2>Decision</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                a vitae porro ipsum debitis quam nulla molestias necessitatibus
                recusandae atque temporibus earum, veniam nam, ullam error!
                Culpa corporis error omnis!
              </p>
=======
        <h2>WHAT DOES  <span style={{color: "rgba(255, 0, 43, 0.874)"}}>B.A.D</span> MEAN?</h2>
    </div>
    <div className="content">
        <div className="first">
            <img src={image} alt="img" className="image-main"/>
        </div>
        <div className="second" style={{display:"flex", flexDirection:"column"}}>
            <div className="image">
                <img src={B} className="img"/>
                <div className="info">
                    <h2>Breakdown</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae a
                    vitae porro ipsum debitis quam nulla molestias necessitatibus recusandae
                    atque temporibus earum, veniam nam, ullam error! Culpa corporis error omnis!</p>
                </div>
            </div>
            <div className="image">
                <img src={A} className="img2"/>
                <div className="info">
                    <h2>Analysis</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae a
                    vitae porro ipsum debitis quam nulla molestias necessitatibus recusandae
                    atque temporibus earum, veniam nam, ullam error! Culpa corporis error omnis!</p>
                </div>
            </div>
            <div className="image">
                <img src={D}className="img"/>
                <div className="info">
                    <h2>Decision</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae a
                    vitae porro ipsum debitis quam nulla molestias necessitatibus recusandae
                    atque temporibus earum, veniam nam, ullam error! Culpa corporis error omnis!</p>
                </div>
>>>>>>> 2999372608e1a90ad7c2fb3fa05a14a56758d4cf
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
