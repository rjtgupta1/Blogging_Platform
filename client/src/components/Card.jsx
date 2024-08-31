import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Card = ({blog}) => {

  const [admin,setAdmin] = useState(false);

  useEffect(()=>{
    const login = localStorage.getItem('login')
    if(login){
      setAdmin(true);
    }
  },[])

  return (
    <div className='card'>
      <div className="title">
        <h3>{blog.title}</h3>
      </div>
      <div className="description">
        <h5>
            {blog.description}
        </h5>
      </div>
      <div>
        <Link to={`/blog/${blog._id}`} className='btn'>Read more...</Link>
      </div>
      {
        admin
        ?
        <div className="action">
        <Link to={`/admin/dashboard/update-blog/${blog._id}`}>Update</Link>
        <Link>Delete</Link>
      </div>
      :
      null
      }
    </div>
  )
}

export default Card
