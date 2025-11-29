import React from 'react'
import { getVideoById } from '../Api/Api';

const VideoCard = ({video,onClick}) => {


  return (
    <div className=' ' onClick={onClick}>
   
            <img className='h-52 w-full' src={video.thumbnail}></img>
            <h1>{video.title}</h1>


    </div>
  )
}

export default VideoCard;