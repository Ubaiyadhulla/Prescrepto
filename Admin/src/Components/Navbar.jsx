import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className=' w-full '>

        <div className=' h-16  flex justify-between items-center px-4'>
            <img src={assets.admin_logo} className='px-4 py-3 ' alt="" />
            <button className='px-4 py-3 flex items-center justify-center bg-[#5f6fff] text-white rounded-2xl'>Logout</button>     
        </div>
        <hr className='w-full h-1 ' />
    </div> 
  )
}

export default Navbar
