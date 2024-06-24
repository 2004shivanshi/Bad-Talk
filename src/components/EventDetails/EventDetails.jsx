import React from "react";
import "./EventDetails.css";

function EventDetails() {
  return (
    <div className="event_details">
      <div className="breakdown">
        <h1>BREAKDOWN ANALYSIS</h1>
        <h1>DECISION</h1>
      </div>
      <img src="/src/assets/event.jpg" alt="Event" />
      <h2>Event Venue - IPS Academy Indore </h2>
      <p>Event Date - 08 August 2024</p>
      <button>Register</button>
    </div>
  );
}

export default EventDetails;
