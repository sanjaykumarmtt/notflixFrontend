import React from 'react'
import { useAuth } from '../Api/AuthContext'
import { Navigate } from 'react-router-dom';

export default function
ProtectedRoutes ({children}) {
    const {token}=useAuth();
    const savedToken =localStorage.getItem("token");

    if(!token && !savedToken){
    return  <Navigate to="/login" replace />;
    }
    return children;



    
  
}
