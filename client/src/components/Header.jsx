import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  useEffect(()=>{
    if(localStorage.getItem('login')){
      document.getElementById('logout').style.display='block';
    }
  },[])

  const handleLogout = ()=>{
    localStorage.removeItem('login');
    document.getElementById('logout').style.display='none';
  }

  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <Link to="/">Blogging Platform</Link>
        </div>
        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/admin">Admin Dashboard</Link>
          <Link id="logout" style={{display:'none'}} onClick={handleLogout}>Logout</Link>
        </div>
      </nav>
    </>
  )
}

export default Header
