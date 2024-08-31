import React, { useEffect, useState } from 'react'
import Card from './Card'

const Home = () => {

  const [blogs,setBlogs] = useState([]);

  const fetchData = async ()=>{
    fetch("http://localhost:5000/api/posts/")
    .then(response=>{
      return response.json();
    })
    .then(blogs=>{
      setBlogs(blogs);
    })
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='home'>
      {
       blogs[0] ? blogs.map(blog => <Card key={blog._id} blog={blog} />) : (<h3>No blogs found</h3>)
      }
    </div>
  )
}

export default Home
