import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
     <div className='navigation'>
     <ul className=" navbar">
         <li className="nav-item">
                <Link to="/">
                    Home
                </Link>
         </li>
         <li className="nav-item">
         <Link to="/login">
             Login
             </Link>
         </li>

         <li className="nav-item">
         <Link to='/signup'>Register</Link>
             
         </li>
     </ul>
         
     </div>
  )
}

export default NavBar