import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {

    const { id } = useParams();
    const [values,setValues] = useState({
        id,
        title:'',
        description:''
    })
    const navigate = useNavigate();

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
        setValues({...values,title:data.title,description:data.description})
      })
    }

    useEffect(()=>{
      fetchData();
    },[])

    const handleSubmit = (e)=>{     //  updating the blog data in this function
        e.preventDefault();

        const options = {
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(values)
        }
        
        fetch("http://localhost:5000/api/update",options)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            alert(data.msg)
            navigate('/')
        })

    }
    
  return (
    <div className='container'>
        <div className='form-container'>
            <form className='form' onSubmit={ handleSubmit }>
                <label htmlFor="title" >Blog title</label>
                <input type="text" name='title' value={values.title} onChange={(e)=> setValues({...values,title:e.target.value}) } />
                <label htmlFor="description">Blog Description</label>
                <textarea name='description' value={values.description} onChange={(e)=> setValues({...values,description:e.target.value}) } />
                <button type='submit'>Update the Blog</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateBlog
