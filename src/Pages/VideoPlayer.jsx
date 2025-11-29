// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { getVideoById } from '../Api/Api'

// const VideoPlayer = () => {

//     const {id}=useParams()
//     const [video,setVideo]=useState([])

//     useEffect(()=>{
//         getVideos()
        
//     },[])

//     async function getVideos(){
//         const response=await getVideoById(id);
//         setVideo(response.data)

//     }
//     if(!video) return <p>Loading...</p>
//   return (
//     <div className='md:w-1/2 md:mx-auto md:h-96  '>

//         <h1 className='text-center mt-2'>{video.title}</h1>
//         <video className='w-full h-full' controls src={video.url}></video>
//          <h1 className='text-center mt-2'>{video.description}</h1>
//     </div>
//   )
// }

// export default VideoPlayer


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById } from '../Api/Api';

const VideoPlayer = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [video, setVideo] = useState(null);

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos() {
        const response = await getVideoById(id);
        setVideo(response.data);
    }

    if (!video) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className='md:w-1/2 md:mx-auto mt-4 p-2'>

            {/* Back Button */}
            <button
                onClick={() => navigate("/home")}
                className="mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 "
            >
                ← Back
            </button>

            <h1 className='text-center text-xl font-semibold mb-2'>{video.title}</h1>

            <video 
                className='w-full rounded-md shadow-lg h-64'
                controls 
                src={video.url}
            ></video>

            
        </div>
    );
}

export default VideoPlayer;
