import "./About.css"
import photo from "./assets/CEOSummit.jpg"
export default function About() {
  return (
    <div className="AboutUsContainer">
      <p className="font">About Us</p>
      <div className="AboutUsInnerContainer">
        <div className="AboutUsLeft"><img src={photo} className="aboutUsImage" /></div>
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

