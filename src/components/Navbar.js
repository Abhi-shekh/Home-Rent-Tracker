import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex gap-5 w-full bg-green-200 justify-between'>
    <div></div>
    <ul className=' flex gap-5 w-[40%] justify-evenly bg-green-600'>
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