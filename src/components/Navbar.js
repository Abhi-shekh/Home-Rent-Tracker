import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex gap-5 w-full bg-green-200 justify-between'>
    <div></div>
    <ul className=' flex gap-5 w-[40%] justify-evenly bg-green-600'>
        <li>
           <NavLink to="/ Dashboard">DashBoard</NavLink>
        </li>
        <li>
        <NavLink to="/FeeStructure">Fee Structure</NavLink>
        </li>
        <li>
            <Link to="/Complaint">Complaint</Link>
        </li>
        <li>
        <Link to="/Support">Contact</Link>
        </li>
    </ul>
    </div>
  )
}

export default Navbar