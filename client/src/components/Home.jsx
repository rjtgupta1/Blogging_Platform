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
        blogs.map(blog => <Card key={blog._id} blog={blog} />)
      }
    </div>
  )
}

export default Home
