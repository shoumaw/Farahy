import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink className="white-text" to='/signup'>Signup</NavLink></li>
        <li><NavLink className="white-text" to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks