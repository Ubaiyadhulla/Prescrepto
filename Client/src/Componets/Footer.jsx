import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bottom-0 w-full mt-10 flex-cols md:flex justify-between  '>
      <div className=' md:flex-1 lg:flex-2 ' >
        <img className='w-44 h-22' src={assets.logo} alt="" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div className='flex-1 items-center justify-center mt-5'>
        <h3 className='font-semibold text-2xl mb-5'>COMPANY</h3>
         <div>
            <p>Home</p>
            <p>About Us</p>
            <p>Delivery</p>
            <p>Privacy Policy</p>

         </div>
      </div>


      <div className='flex-1  items-center justify-center mt-5'>
        <h3 className='font-semibold text-2xl mb-5'>GET IN TOUCH</h3>
        <p>+0-000-000-000</p>
        <p>contact@prescepto.com</p>
      </div>
    </div>
  )
}

export default Footer
