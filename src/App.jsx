
import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import EventDetails from "./components/EventDetails/EventDetails";

function App() {
  return (
    < div className="app">
    <Navbar/>
    <EventDetails/>
    </div>
  )
}

export default App

