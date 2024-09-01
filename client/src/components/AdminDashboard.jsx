import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {

  useEffect(()=>{
    if(localStorage.getItem('login')){
      document.getElementById('logout').style.display='block';
    }
  },[])

  return (
    <div className='dashboard-container'>
      <div className='dashboard'>
        <div className='dashboard-heading'>
            <h1>Welcome to Admin Dashboard.</h1>
        </div>
        <div className="options">
            <Link className='option' to="/">View Blog</Link>
            <Link className="option" to="/admin/dashboard/create-blog" >Create a Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
