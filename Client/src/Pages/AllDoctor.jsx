import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import {toast} from 'react-toastify'

const AllDoctor = () => {
  const [doctors,setDoctors] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState('all');
  const navigate = useNavigate()
  const getDoctores = async()=>{
    try {
      const res = await axios.get("http://localhost:3000/api/doctor/getAllDoctors")
      if(!res.data){
        toast.error("No doctors found")
      }
      setDoctors(res.data.data)
    } catch (error) {
      console.log("error:",error)
    }
  }
  useEffect(()=>{
     getDoctores()
  },[])
  return (
    <div className='mt-5 flex gap-3 md:gap-6 flex-col md:flex-row '>
       <div className='flex-1 flex flex-col gap-4 items-start justify-start   '>
          <p className={`border w-full rounded-md px-4 py-2 cursor-pointer ${selectedSpeciality === 'general_physician'  && 'bg-[#EAEFFF]  text-black'} `} onClick={() => setSelectedSpeciality('general_physician')}>General physician</p>
          <p className={`border w-full rounded-md px-4 py-2 cursor-pointer ${selectedSpeciality === 'gynecologist' && 'bg-[#EAEFFF]  text-black'} `} onClick={() => setSelectedSpeciality('gynecologist')}>Gynecologist</p>
          <p className={`border w-full rounded-md px-4 py-2 cursor-pointer ${selectedSpeciality === 'dermatologist' && 'bg-[#EAEFFF]  text-black'} `} onClick={() => setSelectedSpeciality('dermatologist')}>Dermatologist</p>
          <p className={`border w-full rounded-md px-4 py-2 cursor-pointer ${selectedSpeciality === 'pediatricians' && 'bg-[#EAEFFF]  text-black'} `} onClick={() => setSelectedSpeciality('pediatricians')}>Pediatricians</p>
          <p className={`border w-full rounded-md px-4 py-2 cursor-pointer ${selectedSpeciality === 'neurologist' && 'bg-[#EAEFFF]  text-black'} `} onClick={() => setSelectedSpeciality('neurologist')}>Neurologist</p>
          <p className={`border w-full rounded-md px-4 py-2 cursor-pointer ${selectedSpeciality === 'gastroenterologist' && 'bg-[#EAEFFF]  text-black'} `} onClick={() => setSelectedSpeciality('gastroenterologist')}>Gastroenterologist</p>
       </div>
       <div className='flex-4 flex flex-wrap gap-4 items-center justify-center '>
            { selectedSpeciality=== 'all' ? 
            doctors.map((doctor,index)=>(
            <div key={index} className='w-56 h-80 border-2 border-gray-300 rounded-lg shrink-0 gap-2 my-3 transition-all duration-300 hover:-translate-y-1.5'  onClick={()=>navigate(`/alldoctors/${doctor._id}`)}>
              
              <img className='bg-[#EAEFFF] top-0 rounded-md'  src={doctor.image} alt={doctor.name} />
              <p className='text-green-500 font-semibold pl-4'>Available</p>
              <h3 className='pl-4 font-noramal text-xl'>{doctor.name}</h3>
              <p className='pl-4'>{doctor.specialization}</p>
            </div>
           ))
                  
            : doctors.filter(doctor=> doctor.specialization === selectedSpeciality).map((doctor,index)=>(
            <div key={index} className='w-56 h-80 border-2 border-gray-300 rounded-lg shrink-0 gap-2 my-3 transition-all duration-300 hover:-translate-y-1.5'>
              
              <img className='bg-[#EAEFFF] top-0 rounded-md'  src={doctor.image} alt={doctor.name} />
              <p className='text-green-500 font-semibold pl-4'>Available</p>
              <h3 className='pl-4 font-noramal text-xl'>{doctor.name}</h3>
              <p className='pl-4'>{doctor.specialization}</p>
            </div>
           ))}
           

       </div>
    </div>
  )
}

export default AllDoctor
