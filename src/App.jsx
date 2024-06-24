import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './component/AboutUs/About'
import Footer from './component/Footer/Footer'

import Navbar from "./components/Navbar/Navbar";
import EventDetails from "./components/EventDetails/EventDetails";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <EventDetails/>
    <About/>
     <Footer/>
    </>
  )
}

export default App





