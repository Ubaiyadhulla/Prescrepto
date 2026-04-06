import React from 'react'
import { doctors } from '../assets/assets'

const MyAppointment = () => {
  return (
    <div className='mt-16 '>
      <h1 className='text-2xl font-semibold '>My Appointments</h1>
    
      <div className='flex flex-col '>{
        doctors.slice(1,5).map(doctor => (
          <div key={doctor._id} className=' '>
            {/* inside map */}
            <div className='flex flex-col md:flex-row items-center gap-4 p-4'>

            <div className='flex-1'>

                <img src={doctor.image} alt={doctor.name} className='w-36 h-36 rounded-2xl' />
            </div>
          <div className='flex-3 flex flex-col gap-1'>
             <h2>{doctor.name}</h2>
            <p>{doctor.speciality}</p>
            <p>Address:</p>
            <p>{doctor.address.line1}</p>
            <p>{doctor.address.line2}</p>
            <p>date & time : 2/20/2026 10:00 AM</p>
          </div>
          <div className='flex-1 flex flex-col gap-2 items-center justify-center'>
            <button className='w-full border rounded-xl flex items-center justify-center hover:bg-blue-500 hover:text-white h-auto  transition-all ease-in-out duration-100 py-3 px-2'>Pay here</button>
            <button className='w-full border rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white h-auto  transition-all ease-in-out duration-100 py-3 px-2'>cancel appointment</button>
          </div>
            </div>
         <hr className='w-full h-2 ' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
