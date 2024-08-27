import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <Link to="/">Blogging Platform</Link>
        </div>
        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/admin-login">Admin Login</Link>
        </div>
      </nav>
    </>
  )
}

export default Header
