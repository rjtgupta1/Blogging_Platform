import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({blog}) => {
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
    </div>
  )
}

export default Card
