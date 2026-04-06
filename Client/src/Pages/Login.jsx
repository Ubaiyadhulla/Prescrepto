import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [state,setState] = useState("login")
  const [formData,setFormData]= useState({
    name:"",
    email:"",
    password:""
  })
  let {token,login} = useAuth() 
  const navigate = useNavigate()   



  const formSubmit=async (e)=>{
     e.preventDefault();
    try{
      if(state == "signup"){
         const res = await axios.post("http://localhost:3000/api/user/register",formData)
         console.log(res.data)
         if(res.data.success){
          setState('login')
          toast.success("user register Sucessfull")
         }
      }
      if(state == "login"){
         const res = await axios.post("http://localhost:3000/api/user/login",{
          email:formData.email,
          password:formData.password
        })
         if(res.data.success){
           localStorage.setItem("token", res.data.token);
           console.log(res.data.token)
          setState('signup')
          login(res.data.token)
          toast.success("login successfull")
          navigate('/')
         }

      }
    }catch(error){
       console.log(error.response.data)
    }
      
  }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form onSubmit={formSubmit} action="submit" className=' border border-gray-400 flex flex-col w-auto  gap-3 ml-4 p-6 rounded-md shadow-2xl' >
        <h1 className='font-bold text-2xl flex  justify-start'>{state === "signup" ? "Create Account" : "Login"}</h1>
        <p className=''>{state === "signup" ? "Please sign up to book appointment" : "Please login to book appointment"}</p>
        
        <div className={`flex flex-col gap-1 justify-items-start ${state === "signup" ? "" : "hidden"}`}>
        <label htmlFor="name" className='text-lg '>Name</label>
        <input type="text" className='border-gray-500 border outline-none caret-transparent rounded-md h-9 px-2' id='name' value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})}/>
        </div>

        <div className='flex flex-col gap-1 justify-items-start'>
        <label htmlFor="email" className='text-lg '>Email</label>
        <input type="email" className='border-gray-500 border outline-none caret-transparent rounded-md h-9 px-2' id='email' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
        </div>

        <div className='flex flex-col gap-1 justify-items-start'>
        <label htmlFor="password" className='text-lg '>Password</label>
        <input type="password" className='border-gray-500 border outline-none caret-transparent rounded-md h-9 px-2' id='password' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>      
        </div>

        
        <button className='w-full h-9 bg-[#5f6fff] hover:bg-[#4a5ce0] text-white rounded-md' type='submit'>{state === "signup" ? "Create Account" : "Login"}</button>
        <p className={`${state === "signup" ? " block":"hidden"}`} >Already have an account? <span onClick={() => setState('login')} className={`text-blue-500 hover:underline cursor-pointer ${state === "login" ? "hidden" : ""}`}>Login here</span></p>
        <p  className={`${state === "signup" ?"hidden ":"block"  }`}> Create an new account? <span onClick={() => setState('signup')} className={`text-blue-500 hover:underline cursor-pointer ${state === "signup" ? "hidden" : ""}`}>Create account </span></p>
        
      </form>
    </div>
  )
}

export default Login
