import React, { useState } from 'react'

const Blog = () => {

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');

  const payload = {
    title,
    description
  }

  const options = {
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(payload)
  }

  const fetchData = async ()=>{
    fetch("http://localhost:5000/api/post/",options)
    .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON from the response
      })
      .then(data => {
        alert(data.msg); // Handle the response data
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error); // Handle any errors
      });
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setTitle('');
    setDescription('');
    fetchData();
  }

  return (
    <div className='container'>
        <div className='form-container'>
            <form className='form' onSubmit={ handleSubmit }>
                <label htmlFor="title">Blog title</label>
                <input type="text" name='title' value={title} onChange={(e)=> setTitle(e.target.value) } />
                <label htmlFor="description">Blog Description</label>
                <textarea name='description' value={description} onChange={(e)=> setDescription(e.target.value) } />
                <button type='submit'>Post the Blog</button>
            </form>
        </div>
    </div>
  )
}

export default Blog
