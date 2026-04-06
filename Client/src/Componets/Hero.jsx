import React from 'react'
import { assets } from '../assets/assets'


const Hero = ({doctorRef}) => {
  const handleScrollToDoctors = () => {
    doctorRef.current?.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div className='w-full rounded-2xl bg-[#5f6fff]  h-[40%] flex flex-col md:flex-row items-center justify-around mt-10 font-primaryFont'> 
      <div className='flex flex-col gap-5 text-white items-center md:items-start pl-5 '> 
        <h1 className='lg:text-5xl md:text-3xl text-2xl mt-5  font-bold'>Book Appointment With Trusted Doctor </h1>
        <div className='flex gap-4 text-xl md:text-2xl'>
            <img className='w-40 h-20' src={assets.group_profiles} alt="" />
            <p>Simply browse through our trusted doctors and book an appointment with them.</p>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-full hover:scale-110 transform transition duration-300 gap-5 flex mb-5" onClick={handleScrollToDoctors}>Book Appointment <span className='flex items-center'><img src={assets.arrow_icon}/></span></button>
      </div>
      <div >
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
