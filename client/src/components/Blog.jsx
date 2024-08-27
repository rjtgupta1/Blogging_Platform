import React from 'react'

const Blog = () => {
  return (
    <div className='container'>
        <div className='form-container'>
            <form className='form'>
                <label htmlFor="title">Blog title</label>
                <input type="text" name='title' />
                <label htmlFor="description">Blog Description</label>
                <textarea name='description' />
                <button type='submit'>Post the Blog</button>
            </form>
        </div>
    </div>
  )
}

export default Blog
