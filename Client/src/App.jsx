import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Componets/Navbar'
import Home from './Pages/Home'
import AllDoctor from './Pages/AllDoctor'
import Contect from './Pages/Contect'
import About from './Pages/About'
import Doctor from './Pages/Doctor'
import Login from './Pages/Login'
import MyProfile from './Pages/MyProfile'
import Footer from './Componets/Footer'
import MyAppointment from './Pages/MyAppointment'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  
  return (
    
    <div className='mx-4 sm:mx-[10%] ' >
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alldoctors' element={<AllDoctor/>}/>
        <Route path='/contact' element={<Contect/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/alldoctors/:id' element={<Doctor/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/myappointments' element={<MyAppointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
