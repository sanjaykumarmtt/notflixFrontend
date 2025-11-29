import axios from 'axios'
const axiosClient =axios.create({
    baseURL:"http://localhost:8080"
})

axiosClient.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem("token");
        if(token){
            config.headers["Authorization"]=`Bearer ${token}`
        }
        return config;
    }
)
export default axiosClient;


const signup =(user)=>{

  return  axiosClient.post("/auth/signup",user)

}

const login=(user)=>{
    return axiosClient.post("/auth/login",user)
}

const getAllVideos=()=>{
    return axiosClient.get("/videos/getAll")
}

const getVideoById=(id)=>{
    return axiosClient.get("/videos/get/"+id)
}

export {signup,login,getAllVideos,getVideoById};