import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink className="pink-text" to='/signup'>Signup</NavLink></li>
        <li><NavLink className="pink-text" to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks