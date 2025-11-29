import React, { useEffect, useState } from 'react'
import { getAllVideos } from '../Api/Api'
import diesel from '../assets/diesel.jpg'
import VideoCard from '../Components/VideoCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [videos,setVideos]=useState([])

    const navigate=useNavigate()

async function getVideos(){

    const response=await getAllVideos();
    console.log(response.data)
    setVideos( response.data)
  

}

useEffect(()=>{
    getVideos();
},[])

useEffect(()=>{
    window.onpopstate=()=>{
        window.history.go(1);
    }
},[])


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5 ' >
        {
            videos.map((data)=>(
                 <VideoCard video={data} key={data.id} onClick={()=>navigate("/video/"+data.id)}  />


            ))
        }
   
    </div>
  )
}

export default Home