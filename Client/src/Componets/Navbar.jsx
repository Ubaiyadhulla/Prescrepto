import React, { useState } from 'react';
import { assets } from '../assets/assets.js';
import { NavLink } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import {useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';


const Navbar = () => {

  const {logout,token} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.replace('/','');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu,setMenu ] = useState("home")
  
  const [profileBar,setProfileBar] = useState(false)

  useEffect(()=>{
    if(pathname === "alldoctors"){
      setMenu("alldoctors")
    }else if(pathname === "about"){
      setMenu("about")
    }else if(pathname === "contact"){
      setMenu("contact")
    }else{
      setMenu("home")
    }
  },[pathname])
 

 

  return (
    <div>

    <div className='flex items-center justify-between   '>
      <div >
        <img className='w-38' src={assets.logo} alt="Logo" />
      </div>

      <div className='md:flex gap-4 text-lg hidden '>
        <NavLink to="/" onClick={()=>setMenu("home")}>Home {menu === "home" && <hr className='w-[80%] mt-0.5 ml-[10%] h-0.5  bg-[#5f6fff] outline-none'/>}</NavLink>
        <NavLink to="/alldoctors" onClick={()=>setMenu("alldoctors")}>All Doctor {menu === "alldoctors" && <hr className='w-[80%] mt-0.5 ml-[10%] h-0.5  bg-[#5f6fff] outline-none'/>}</NavLink>
        <NavLink to="/about" onClick={()=>setMenu("about")}>About  {menu === "about" && <hr className='w-[80%] mt-0.5 ml-[10%] h-0.5  bg-[#5f6fff] outline-none'/>}</NavLink>
        <NavLink to="/contact" onClick={()=>setMenu("contact")}>Contact {menu === "contact" && <hr className='w-[80%] mt-0.5 ml-[10%] h-0.5 bg-[#5f6fff] outline-none'/>}</NavLink>
      </div>

      <div className='hidden md:block'>
        { token ? 
        <div onClick={()=>setProfileBar(!profileBar)}>

          <img  className='w-16 h-16 rounded-full items-center justify-center mt-3' src={assets.profile_pic} alt='profile_pic'/>
          {profileBar && 
            <div className=' absolute  top-20 shadow-2xl right-32 flex flex-col gap-3 bg-white  p-5 rounded-md '> 
            <NavLink to="/myprofile" onClick={()=>setProfileBar(false)}>My Profile</NavLink>
            <NavLink to="/myappointments" onClick={()=>setProfileBar(false)}>My Appoinment</NavLink>
            <NavLink  onClick={logout}>logout</NavLink>
            
           </div>
          }
        </div>
        :<button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300" onClick={()=>navigate('/login')}>Login</button>}
      </div>

      <div className='md:hidden relative' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
       { <TiThMenu size={30}  />}
        {
              isMenuOpen &&
         <div className='absolute top-7 right-0 flex flex-col gap-3 bg-white  p-5 rounded-md shadow-lg'> 
          <NavLink to="/" onClick={()=>setIsMenuOpen(false)}>Home </NavLink>
          <NavLink to="/alldoctors" onClick={()=>setIsMenuOpen(false)}>All Doctor</NavLink>
          <NavLink to="/about" onClick={()=>setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={()=>setIsMenuOpen(false)}>Contact</NavLink>
         </div>
        }
       </div>
      
    </div>
     <hr  className='w-full h-1 mt-4 '/>
     

  </div>



  )
}

export default Navbar
