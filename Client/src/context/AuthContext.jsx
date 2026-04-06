import React from 'react'
import { createContext ,useContext,useState } from 'react'


const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [token,setToken] = useState(localStorage.getItem("token"))

    const login =(newtoken)=>{
     localStorage.setItem("token",newtoken)
     setToken(newtoken)
    }

    const logout=()=>{
        localStorage.removeItem("token")
        setToken("")
    }
    return(
        <AuthContext.Provider value={{login,token,logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>useContext(AuthContext);
