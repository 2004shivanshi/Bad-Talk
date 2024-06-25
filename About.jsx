import "./About.css"
import logo from "./assets/CEOSummit.webp"
export default function About() {
  return (
    <div className="AboutUsContainer">
      <p className="font">About Us</p>
      <div className="AboutUsInnerContainer">
        <div className="AboutUsLeft"><img src={logo} className="image" /></div>
        <div className="AboutUsRight">
          <p className="AboutUsHeading">HEADING</p>
          <p className="AboutUsText">
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

