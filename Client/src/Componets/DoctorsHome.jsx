import React, { useEffect } from 'react'
import { doctors } from '../assets/assets.js'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {toast} from 'react-toastify'

const DoctorsHome = ({doctorRef}) => {
  const [doctor,setDoctor]= useState([])
 
   const loadDoctor = async()=>{
    try {
      const res = await axios.get("https://prescrepto-119f.onrender.com/api/doctor/getAllDoctors")
      if(!res){
        toast.message("No doctor found")
      }
      setDoctor(res.data.data)
      console.log(res.data.data)

    } catch (error) {
      toast.error("Error fetching doctors",error)
    }
    }


   
   const navigate = useNavigate()
   useEffect(()=>{
       loadDoctor()
   },[])
  return (
    <div className='w-full flex flex-col items-center ' ref={doctorRef}>
      <h1 className='text-3xl font-semibold my-3'>Top Doctors to Book</h1>
      <p className='text-center'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className='flex gap-4 flex-wrap  items-center justify-center '>
        {doctor.slice(0,10).map((doctor,index)=>(
            <div key={index} className='w-56 h-80 border-2 border-gray-300 rounded-lg shrink-0 gap-2 my-3 transition-all duration-300 hover:-translate-y-1.5' onClick={()=>navigate(`/alldoctors/${doctor._id},`)}>
                <img className='bg-[#EAEFFF] top-0 rounded-md' src={doctor.image} alt="" />
                <p className={`text-green-500 font-semibold pl-4`}>Available</p>
                <p className='pl-4 font-noramal text-xl'>{doctor.name}</p>
                <p className='pl-4 '>{doctor.speciality}</p>
            </div>
        ))}
        <span className='flex items-center justify-center w-full my-4'>  

         <button className='bg-[#EAEFFF] text-black  py-2 rounded-full px-12 border ' onClick={()=>navigate('/alldoctors')}>more doctors</button>
        </span>
      </div>
    </div>
  )
}
// EAEFFF

export default DoctorsHome
