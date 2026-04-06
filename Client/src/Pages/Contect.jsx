import React from 'react'
import {assets} from '../assets/assets.js'

const Contect = () => {
  return (
    <div className='flex w-full flex-col '>
       <h1 className='flex items-center justify-center my-5 font-bold text-2xl' >Contact us</h1>
       <div className='flex flex-col items-center md:flex-row md:justify-around'>
        <img className='w-72 h-72 md:w-80 md-h-80 ' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-2 items-start'>
           <h4 className='flex items-start my-4 font-bold text-xl'>Our Office</h4>
           <p>00000 Willms Station Suite 000, Washington, USA</p>
           <p>Tel: (000) 000-0000</p>
           <p>Email: greatstackdev@gmail.com</p>
           <h4 className='flex items-start my-4 font-bold text-xl'>CAREERS AT PRESCRIPTO</h4>
           <p>Learn more about our teams and job openings</p>
           <button className='border border-black text-black bg-white hover:bg-black hover:text-white text-lg py-2 px-4 transition duration-200 ease-in-out'>Explore Jobs</button>
        </div>
       </div>
    </div>
  )
}

export default Contect
