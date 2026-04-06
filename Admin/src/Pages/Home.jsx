import React from 'react'
import Navbar from '../Components/Navbar'
import { assets } from '../assets/assets'
import { RxDashboard } from "react-icons/rx";
import { CgCalendarDates } from "react-icons/cg";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import Dashboard from '../Components/Dashboard';
import Appointment from '../Components/Appointment';
import AddDoctor from '../Components/AddDoctor';
import DoctorList from '../Components/DoctorList';
import { useState } from 'react';


const Home = () => {
  const [selectedPage,setSelectedPage] = useState('dashboard')
  return (
    <div>
       <Navbar/>
       <div className='flex h-screen '>
        {/* -------left container-------- */}
        <div className='flex-1 flex flex-col gap-4 px-4 py-3 bg-gray-50 h-full'>
            <p onClick={()=>setSelectedPage('dashboard')} className={`flex justify-start gap-4 py-3 px-2 items-center  text-2xl ${selectedPage === 'dashboard' ? 'bg-blue-100' : ''}`} ><RxDashboard />Dashboard</p>
            <p onClick={()=>setSelectedPage('appointment')} className={`flex justify-start gap-4 py-3 px-2 items-center  text-2xl ${selectedPage === 'appointment' ? 'bg-blue-100' : ''}`} ><CgCalendarDates />Appointments</p>
            <p onClick={()=>setSelectedPage('add-doctor')} className={`flex justify-start gap-4 py-3 px-2 items-center  text-2xl ${selectedPage === 'add-doctor' ? 'bg-blue-100' : ''}`} ><IoPersonAddSharp />Add Doctor</p>
            <p onClick={()=>setSelectedPage('doctor-list')} className={`flex justify-start gap-4 py-3 px-2 items-center  text-2xl ${selectedPage === 'doctor-list' ? 'bg-blue-100' : ''}`} ><FaList/>Doctor list</p>
        </div>



        {/* --------right container------- */}
        <div className='flex-4 px-4 py-3 bg-gray-100 h-full'>
          {selectedPage === 'dashboard' && <Dashboard />}
          {selectedPage === 'appointment' && <Appointment />}
          {selectedPage === 'add-doctor' && <AddDoctor />}
          {selectedPage === 'doctor-list' && <DoctorList />}

        </div>
       </div>
    </div>
  )
}

export default Home
