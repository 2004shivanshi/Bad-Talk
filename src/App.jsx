import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './component/AboutUs/About'
import Footer from './component/Footer/Footer'

import Navbar from "./component/Navbar/Navbar";
import EventDetails from "./component/EventDetails/EventDetails";
import WhatIsBad from './component/Whatisbad/WhatIsBad'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
    <Navbar/>
    <EventDetails/>
    <WhatIsBad/>
    </div>

    <About/>
     <Footer/>
    </>
  )
}

export default App





