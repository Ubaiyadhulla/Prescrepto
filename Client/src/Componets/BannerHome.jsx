import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const BannerHome = () => {
     const navigate = useNavigate()
  return (
    <div className='flex w-full h-72 rounded-md bg-[#5f6fff] mt-4 '>
      <div className='pl-5 flex flex-col gap-5 justify-center items-start'>
         <h1 className='font-semibold text-3xl'>Book Appointment With 100+ Trusted Doctors   </h1>
         <button className='bg-white text-black px-4 py-2 rounded-full hover:scale-110 transform transition duration-300 gap-5 flex mb-5' onClick={() => navigate('/login')}>Create Account</button>
      </div>
      <div className='relative h-64 flex items-center justify-center'>
       <img className=' w-1/2 -top-12 z-10' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default BannerHome
