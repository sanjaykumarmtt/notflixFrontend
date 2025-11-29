import React, { useState } from 'react'
import { login } from '../Api/Api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Api/AuthContext'

const Login = () => {
    const {logins}=useAuth();

    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate()

   async function handleLogin(e){
    try{
        e.preventDefault()
        const user={email,password}
        const response=await login(user)
        if(response.data!="ERROR")
        {
            console.log(response.data)
           logins(response.data)
           navigate("/home")

        }
        else{
             alert("Username Or Password Incorrect")

        }
       
            

    }catch(err){
       
    }
        

        
        
        
   }

  return (
     <div className='flex justify-center  '>
        <div className='flex flex-col  md:w-1/3 gap-5  mt-20 border border-white p-5 rounded-md '>
            <h1 className='text-center text-3xl text-red-500 font-semibold'>LOGIN</h1>
            <form className='flex flex-col gap-3'>
        
                <labe>EMAIL</labe>
                 <input type='text' placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                 <label>PASSWORD</label>
                  <input type='text' placeholder='Enter Your Name' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                  <button className='bg-green-500 p-2 mt-6 text-center rounded-sm mx-auto hover:cursor-pointer' onClick={handleLogin}>Login</button>

            </form>
        </div>


    </div>
  )
}

export default Login