import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./component/AboutUs/About";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import EventDetails from "./component/EventDetails/EventDetails";
import WhatIsBad from "./component/Whatisbad/WhatIsBad";
import Slide from "./component/team/Slide";
import RegisterForm from "./component/RegisterForm/RegisterForm";
import "./App.css";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("section, img:not(.no-fade)");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <EventDetails />
            <WhatIsBad />
            <Slide />
            <About />
            <Footer />
          </>
        } />
        <Route path="/Register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
