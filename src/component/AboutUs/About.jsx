import React from 'react'
import "./About.css"
import logo from "./assets/CEOSummit.webp" 
export default function About() {
  return (
    <div class="AboutUsContainer">
        <p class="font">About Us</p>
        <div class="AboutUsInnerContainer">
            <div class="AboutUs"><img src={logo} class="image"/></div>
            <div class="AboutUs">
                <p class="AboutUsHeading">HEADING</p>
                <p class="AboutUsText">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                    ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </p>
            </div>
        </div>
    </div>
  )
}

