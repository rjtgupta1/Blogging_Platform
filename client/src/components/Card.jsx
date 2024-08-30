import React from 'react'

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
        <button className='btn'>Read more...</button>
      </div>
    </div>
  )
}

export default Card
