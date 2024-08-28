import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [login,setLogin] = useState();
  useEffect(()=>{
    let login = localStorage.getItem('login');
    setLogin(login);
  },[])

  const handleLogout = ()=>{
    localStorage.removeItem('login');
    setLogin(false);
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
          {
            login?<Link onClick={handleLogout}>Logout</Link>:null
          }
        </div>
      </nav>
    </>
  )
}

export default Header
