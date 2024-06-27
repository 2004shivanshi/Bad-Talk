import React from "react";
import "./EventDetails.css";

function EventDetails() {
  return (
    <div className="event_details">
      <div className="breakdown">
        <h1>
          BREAKDOWN <span className="analysis">ANALYSIS</span>
        </h1>
        <h1 className="decision">DECISION</h1>
      </div>
      <img src="/src/assets/event.jpg" alt="Event" />
      <p>
        <b>Event Venue</b> - Audi-2 IPS Academy Rajendra Nagar, Indore
      </p>
      <p>
        <b>Event Date</b> - 08 August 2024
      </p>
      <button >
  Register
</button>


    </div>

    
  );
}

export default EventDetails;
