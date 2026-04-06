import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { latestAppointments } from '../assets/assets'
import axios from 'axios'

const Dashboard = () => {
  const [booking,setBooking] =useState([])
  const [totalBooking,setTotalBooking]= useState(0)
 

 const fetchdata = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/booking/getbooking");

     

      setBooking(res.data.data);
      setTotalBooking(res.data.total)
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
 

  fetchdata();
}, []);




  console.log(booking)
  console.log(totalBooking)
    return (
    <div className='mr-22 '>
      <div className='flex w-full items-center justify-between px-4 py-3 '>
        {/* -------card-1------ */}
        <div className='flex items-center justify-center gap-4 shadow rounded-2xl w-1/4 '>
          <img className='w-16 h-22' src={assets.doctor_icon} alt="" />
          <div className='flex flex-col '>
            <p>14</p>
            <p>doctor</p>
          </div>
        </div>
      {/* -------card-2------ */}
        <div className='flex items-center justify-center gap-4 shadow rounded-2xl w-1/4 '>
           <img className='w-16 h-22' src={assets.appointments_icon} alt="" />
          <div className='flex flex-col '>
            <p>{totalBooking}</p>
            <p>appointment</p>
          </div>
        </div>
{/* -------card-3------ */}
        <div className='flex items-center justify-center gap-4 shadow rounded-2xl w-1/4 '>
           <img className='w-16 h-22' src={assets.patients_icon} alt="" />
          <div className='flex flex-col '>
            <p>14</p>
            <p>patients</p>
          </div>
        </div>
      </div>

      {/* -------latest appointment------ card-- */}
      <div className='w-full mx-16 border p-4 mt-5'>

      <div className='flex items-start p-4 gap-3 '>
        <img src={assets.list_icon} alt="" />
        <p>Latest Appointments</p>
      </div>
      <hr className='w-full border'/>
      <div className='flex flex-col gap-4 mt-4 '>
        {booking.map((appointment,index) => (
          <div key={index} className='flex items-center justify-between gap-4 p-2'>
           

            {/* <img className='w-16 h-16 rounded-md' src={appointment.img} alt="" /> */}
          
              <p>{appointment.patient_name}</p>
              <p>{appointment.date} {appointment.day} at {appointment.slot}</p>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  )
}

export default Dashboard
