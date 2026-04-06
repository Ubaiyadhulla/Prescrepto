import React from 'react'

import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'


const DoctorList = () => {
  const [doctors,setDoctors]= useState([])
 const getDoctors = async () => {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/doctor/getAllDoctors"
    );

    console.log("API response:", res.data);      // Should show {success, message, data: [...]}
    console.log("Doctor data array:", res.data.data); // This should have 5 items

    setDoctors(res.data.data);     
              // Only set the data array
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};

 useEffect(()=>{
    getDoctors()
 },[])

  return (
    <div>
      <h1 className='font-serif text-2xl'>All Doctors</h1>
      <div className='w-full flex flex-wrap'>
        {doctors.map((doctor, index)=>(
          <div key={index} className='w-48 h-56 m-4 flex flex-col items-center justify-center gap-2  p-0 rounded-md bg-blue-100'>
            {console.log(doctor.image)}
            <img className='w-full p-0 h-38 rounded-md' src={doctor.image} alt="profile" />
            <h1>{doctor.name}</h1>
            <p>{doctor.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorList
