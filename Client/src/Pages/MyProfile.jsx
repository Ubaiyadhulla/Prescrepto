// import React, { use, useState } from 'react'
// import {assets} from '../assets/Assets'

// const MyProfile = () => {
//   const [editProfile, setEditProfile] = useState(false)
//   const [profileData , setProfileData] = useState({
//     phone:"+44 1234567890",
//     address:"57th Cross, Richmond Circle, Church Road, London"
//   });

//   const SaveInfoFunc=()=>{
//     const phoneInput = document.getElementById('phone');
//     const addressInput = document.getElementById('address');
//      setProfileData({
//       phone:phoneInput.value,
//       address:addressInput.value
//      })
//   }
//   return (
//     <div>
//        <div className='my-4 '>
//         <img className='w-40 h-40' src={assets.profile_pic} alt="" />
//        </div>

//        <h1 className='font-bold text-2xl mt-8'>Edward Vincent</h1>
//        <div className="w-full h-px bg-black my-4"></div>
//        <div className='flex flex-col gap-3 mb-4'>
//         <p className='font-thin underline'>CONTACT INFORMATION</p>
//         <div className='flex gap-10'>
//             <p className='font-semibold text-xl'>Email id:</p>
//             <p>edwardvincent@gmail.com</p>
//         </div>

//          <div className='flex gap-10'>
//             <p className='font-semibold text-xl'>Phone:</p>
//             {editProfile ? <input type="text" id='phone' className='border-none active:border-gray-300 active:border rounded-md px-2 py-1' defaultValue={profileData.phone} /> : <p>{profileData.phone}</p>}
            
//         </div>

//          <div className='flex gap-10'>
//             <p className='font-semibold text-xl'>Address:</p>
//             {editProfile ? 
//             <input type="text" id='address' className='border-none active:border-gray-300 active:border rounded-md px-2 py-1' /> :
//              <p>{profileData.address} </p> }
           
//         </div>

//        </div>

//        {/* basic information section */}
//        <div className='flex flex-col gap-3'>
//         <p  className='font-thin underline'>BASIC INFORMATION</p>
//         <div className='flex gap-10'>
//             <p className='font-semibold text-xl'>Gender:</p>
//             <p>Male</p>
//         </div>

//          <div className='flex gap-10'>
//             <p className='font-semibold text-xl'>Birthday:</p>
//             <p>12th June 1990</p>
//         </div>

//        </div>
//        {/* btn */}
//        <div className='flex gap-4 items-center justify-start mt-5'>
//         {editProfile ? <button className='bg-white text-black px-14 py-4 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white ' onClick={(e)=>{setEditProfile(false) ; SaveInfoFunc(e)}}>Save Information</button> :<button className='bg-white text-black px-14 py-4 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white' onClick={()=>setEditProfile(true)}>Edit</button> }
        
        
//        </div>

//     </div>
//   )
// }

// export default MyProfile


import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import{jwtDecode} from 'jwt-decode'
import { useEffect } from "react";

const MyProfile = () => {

  

  const {token} = useAuth()
  const [email,setEmail] = useState('')
  const jwtdecode = jwtDecode(token)
  

  const [editProfile, setEditProfile] = useState(false);

  const [profileData, setProfileData] = useState({
    phone: "+44 1234567890",
    address: "57th Cross, Richmond Circle, Church Road, London",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSave = async() => {
    try {
      
      setEditProfile(false);
      const res = await axios.patch("http://localhost:3000/api/user/saveProfile",profileData, {
    headers: {
      Authorization: `Bearer ${token}`
    }})
    if(res.data.success){
      toast.success("profile updated ")
    }

    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(()=>{
   setEmail(jwtdecode.email)
  },[])

  return (
    <div>
      <div className="my-4">
        <img className="w-40 h-40" src={assets.profile_pic} alt="" />
      </div>

      <h1 className="font-bold text-2xl mt-8">Edward Vincent</h1>
      <div className="w-full h-px bg-black my-4"></div>

      <div className="flex flex-col gap-3 mb-4">
        <p className="font-thin underline">CONTACT INFORMATION</p>

        <div className="flex gap-10">
          <p className="font-semibold text-xl">Email id:</p>
          <p>{email}</p>
         { console.log(email)}
        </div>

        {/* PHONE */}
        <div className="flex gap-10">
          <p className="font-semibold text-xl">Phone:</p>

          {editProfile ? (
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          ) : (
            <p>{profileData.phone}</p>
          )}
        </div>

        {/* ADDRESS */}
        <div className="flex gap-10">
          <p className="font-semibold text-xl">Address:</p>

          {editProfile ? (
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          ) : (
            <p>{profileData.address}</p>
          )}
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex gap-4 items-center justify-start mt-5">
        {editProfile ? (
          <button
            className="bg-white text-black px-14 py-4 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={handleSave}
          >
            Save Information
          </button>
        ) : (
          <button
            className="bg-white text-black px-14 py-4 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={() => setEditProfile(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
