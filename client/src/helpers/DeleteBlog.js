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

    const admin = localStorage.getItem('login')

    if(admin)
        deleteBlog();
    else
        navigate('/admin')

}

export default DeleteBlog
