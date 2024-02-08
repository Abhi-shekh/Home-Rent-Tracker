import React from 'react'
import Navbar from '../components/Navbar'
import CentrePanel from '../components/centrePanel/CentrePanel'

const DashBoard = () => {
  return (
    <div className=' bg-[#1A3C46] h-screen relative'>
        <Navbar/>
        <div>
          <CentrePanel/>
        </div>
        
    </div>
  )
}

export default DashBoard