import React, { useState } from 'react'
import { signup } from '../Api/Api'

const Signup = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

   async function handleLogin(e){
        e.preventDefault()
        const user={name,email,password}
        const response=await signup(user)
        alert(response.data)
        setName("")
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex justify-center  '>
        <div className='flex flex-col  md:w-1/3 gap-5  mt-20 border border-white p-5 rounded-md '>
            <h1 className='text-center text-3xl text-red-500 font-semibold'>SIGN UP</h1>
            <form className='flex flex-col gap-3'>
                
                <label>NAME</label>
                <input type='text' placeholder='Enter Your Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                <labe>EMAIL</labe>
                 <input type='text' placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                 <label>PASSWORD</label>
                  <input type='text' placeholder='Enter Your Name' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                  <button className='bg-green-500 p-2 mt-6 text-center rounded-sm mx-auto hover:cursor-pointer' onClick={handleLogin}>SignUP</button>

            </form>
        </div>


    </div>
  )
}

export default Signup