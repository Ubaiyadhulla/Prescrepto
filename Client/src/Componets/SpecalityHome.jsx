import React from 'react'
import { specialityData } from '../assets/assets'

const SpecalityHome = () => {
  return (
    <div className='flex flex-col items-center w-full h-auto md:p-25 mt-5'>
      <h1 className=' text-3xl  font-primaryFont mb-4'>Find By Specalist</h1>
      <p className="font-xl text-normal m-4">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free</p>
      <div className='flex gap-4 overflow-x-auto w-full scrollbar-hide '>{specialityData.map((data)=>(
        <div className='flex flex-col items-center gap-2 m-4 scroll-auto shrink-0'>
               <img className='w-20 h-20' src={data.image} alt="" />
              <p>{data.speciality}</p>
               </div>  
      ))}
                
      </div>
    </div>
  )
}

export default SpecalityHome
