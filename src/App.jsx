import { useState } from 'react'
import './App.css'
import About from './component/AboutUs/About'
import Footer from './component/Footer/Footer'

import Navbar from "./component/Navbar/Navbar";
import EventDetails from "./component/EventDetails/EventDetails";
import WhatIsBad from './component/Whatisbad/WhatIsBad'
import Slide from './component/team/Slide'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
    <Navbar/>
    <EventDetails/>
    <WhatIsBad/>
    <Slide/>
    

    <About/>
    
     <Footer/>
     </div>
    </>
  )
}

export default App





