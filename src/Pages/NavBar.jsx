import React from 'react'
import { useAuth } from '../Api/AuthContext'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const {token,logout}=useAuth();
    const navigate=useNavigate()

    function handleLogout(){
        logout();
        navigate("/login",{replace:true})

    }
  return (
    <div className='flex justify-between m-5'>
        <div>
            <h1 className='text-3xl md:text-5xl font-bold text-red-500'>NOTFLIX</h1>

        </div>
        {!token &&
        <div className='md:mr-52 text-xl'>
            <ul className='flex gap-5'>
              <li> <button className=' border border-red-500 p-1 rounded-sm bg-transparent hover:bg-red-400 cursor-pointer hover:shadow-2xl shadow-white 'onClick={()=>navigate("/")}>SignUp</button></li>  
              <li> <button className='border border-red-500 p-1 rounded-sm bg-transparent hover:bg-red-400 cursor-pointer hover:shadow-2xl shadow-white' onClick={()=>navigate("/login")}>Login</button></li>  
            </ul>
           

        </div>
}
{token &&
        <div className='md:mr-52 text-xl'>
            <ul className='flex gap-5'>
              <li> <button className=' border border-red-500 p-1 rounded-sm bg-transparent hover:bg-red-400 cursor-pointer hover:shadow-2xl shadow-white ' onClick={handleLogout}>Logout</button></li>  
             
            </ul>
           

        </div>
}
    </div>
  )
}

export default NavBar