import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex gap-5 w-full justify-between fixed z-10 h-20 my-auto items-center bg-[#1A3C46]'>
    <div></div>
    <ul className=' flex gap-5 w-[40%] justify-evenly text-white'>
        <li>
            <NavLink to="/dashboard">DashBoard</NavLink>
        </li>
        <li>
        <NavLink to="/feeStructure">Fee Structure</NavLink>
        </li>
        <li>
            Complaint
        </li>
        <li>
            contacts
        </li>
    </ul>
    </div>
  )
}

export default Navbar