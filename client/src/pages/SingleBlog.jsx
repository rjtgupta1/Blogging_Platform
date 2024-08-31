import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
    const { id } = useParams();
    const [post,setPost] = useState({});

    const options = {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({id})
    }

    const fetchData = async ()=>{
      fetch("http://localhost:5000/api/single-post",options)
      .then(response=>{
        return response.json();
      })
      .then(data=>{
        // console.log(data)
        setPost(data);
      })
    }

    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div className="singleBlogContainer">
        <div className='singleBlog'>
            <h2> {post?.title} </h2>
            <h5> {post?.description} </h5>
        </div>
    </div>
  )
}

export default SingleBlog
