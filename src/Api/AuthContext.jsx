import { createContext, useContext, useEffect, useState } from "react";


const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [token,setToken]=useState(null);

    useEffect(()=>{
        const tokens=localStorage.getItem("token");
        if(tokens){
            setToken(tokens)
        }
    },[])

    const logins=(jwt)=>{
       localStorage.setItem("token",jwt);
       setToken(jwt)

    };
    const logout=()=>{
         localStorage.removeItem("token")
         setToken(null);
    };
    return(
        <AuthContext.Provider value={{token,logins,logout}}>{children}</AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext);