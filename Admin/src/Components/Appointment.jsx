import React from 'react'
import { latestAppointments } from '../assets/assets'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

const Appointment = () => {
  const [booking,setBooking]= useState([])
    const getAppoitnment = async()=>{
      try {
        const res = await axios.get("http://localhost:3000/api/booking/getbooking")
        console.log(res.data)
        setBooking(res.data.data)
      
      } catch (error) {
        console.log(data)
      }
     }
  useEffect(()=>{
   

     getAppoitnment()
  },[])
  return (
    <div>
      <h1 className='font-semibold text-2xl mx-5 py-6'>All Appointments</h1>
      <table className='w-full mx-2 shadow-md p-5 border border-gray-600 border-separate border-spacing-y-3'>
        <thead className='px-4'>
          <tr>
            <th>Patient Name</th>
            <th>Date & Time</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows would be populated with appointment data */}
          {booking.map((Appointment,index)=>(
            <tr key={index} className='gap-4 my-3 p-3'>
              <td className='flex gap-2 items-center'>{Appointment.patient_name}</td>
              <td>{Appointment.date} {Appointment.day} at {Appointment.slot}</td>
              <td>{Appointment.doctor_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Appointment
