import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Leftpane from '../../Components/Leftpane/Leftpane'
import Postpane from '../../Components/Postpane/Postpane'
import Rightpane from '../../Components/Rightpane/Rightpane'
import "./Home.css";
 
export default function Home() {
  return (
    
      <>
        <Navbar/>
    <div className='bottomContainer'>
        <Leftpane/>
        <Postpane/>
        <Rightpane/>
    </div>
      </>
      
  )
}
