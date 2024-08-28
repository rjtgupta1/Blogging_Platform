import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const { Component } = props;
    useEffect(()=>{
        let isLoggedIn = localStorage.getItem('login');
        if(!isLoggedIn){
            navigate('/admin');
        }
    })

    return (
        <>
            <Component />
        </>
    )
}

export default ProtectedRoute
