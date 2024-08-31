import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const deleteBlog = ()=>{
        const options = {
            method:'DELETE',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify({id})
        }
        
        fetch("http://localhost:5000/api/delete",options)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            alert(data.msg)
            navigate('/')
        })
    }
    
    
    const userConfirmed = window.confirm("Do you want to delete this blog?");
    if(userConfirmed)
        deleteBlog()
    else
        navigate('/')

}

export default DeleteBlog
