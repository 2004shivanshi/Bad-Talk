import React from 'react'
import "./WhatIsBad.css"
export default function WhatIsBad() {
  return (
    <div style={{ width:"100%"}}>
      

      <div className="heading">
        <h1>WHAT DOES <font color="red">B.A.D.</font> MEAN?</h1>
    </div>
    <div className="content">
        <div className="first">
            <img src="./assets/img1.jpg" alt="img" className="image-main"/>
        </div>
        <div className="second" style={{display:"flex", flexDirection:"column"}}>
            <div className="image">
                <img src="./assets/B.png" className="img"/>
                <div className="info">
                    <h2>Breakdown</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae a
                    vitae porro ipsum debitis quam nulla molestias necessitatibus recusandae
                    atque temporibus earum, veniam nam, ullam error! Culpa corporis error omnis!</p>
                </div>
            </div>
            <div className="image">
                <img src="./assets/A.png" className="img2"/>
                <div className="info">
                    <h2>Analysis</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae a
                    vitae porro ipsum debitis quam nulla molestias necessitatibus recusandae
                    atque temporibus earum, veniam nam, ullam error! Culpa corporis error omnis!</p>
                </div>
            </div>
            <div className="image">
                <img src="./assets/D.png" className="img"/>
                <div className="info">
                    <h2>Decision</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae a
                    vitae porro ipsum debitis quam nulla molestias necessitatibus recusandae
                    atque temporibus earum, veniam nam, ullam error! Culpa corporis error omnis!</p>
                </div>
            </div>
        </div>
    </div>



    </div>
  )
}
