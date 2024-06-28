import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventDetails.css";
import event from "../../assets/event.jpg"

function EventDetails() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <section className="event_details">
      <div className="breakdown">
        <h1>
          BREAKDOWN <span className="analysis">ANALYSIS</span>
        </h1>
        <h1 className="decision">DECISION</h1>
      </div>
      <img src={event} alt="Event" />
      <p>
        <b>Event Venue</b> - Audi-2 IPS Academy Rajendra Nagar, Indore
      </p>
      <p>
        <b>Event Date</b> - 08 August 2024
      </p>
<<<<<<< HEAD
      <button onClick={handleRegister}>Register</button>
    </section>
=======
      <button >
  Register
</button>


    </div>

    
>>>>>>> 2999372608e1a90ad7c2fb3fa05a14a56758d4cf
  );
}

export default EventDetails;
