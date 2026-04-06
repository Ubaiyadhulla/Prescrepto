import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doctors } from '../assets/assets.js'
import axios from 'axios';
import {toast} from 'react-toastify'
import { jwtDecode } from 'jwt-decode';



const Doctor = () => {


  
 const Dates =[];
 const [selectedDate,setSelectedDate] = useState({
  date:"",
  day:"",
  slot:"",
  doctor_id:"",
  doctor_name:"",
  patient_name:""

  

 })
 const [doctorlist,setDoctorlist] = useState([])
 const [doctorData,setDoctorData] = useState({})
 const slots = ['10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM'];
 
 const {id} = useParams();
 for(let i=0;i<7;i++){
  const date = new Date();
  date.setDate(date.getDate()+i);

  Dates.push({date:date.toLocaleDateString().split('/')[0],day:date.toLocaleDateString('en-US',{weekday:'short'})
 })};




//  book appointment function
const handleClick = async(id)=>{
  const token = localStorage.getItem("token")
    const decoded = jwtDecode(token);

    // ✅ get user name FIRST
    const resUser = await axios.get(
      "http://localhost:3000/api/user/getuser",
      {
        params: { email: decoded.email }
      }
    );

    const name = resUser.data.name;

   
   console.log(token)
   const bookingData = {
      ...selectedDate,
      doctor_id: id,
      doctor_name: doctorData.name,
      patient_name: name
    };

    console.log(bookingData)

   const res = await axios.post("http://localhost:3000/api/user/booking",bookingData,{
     headers: {
                    Authorization: `Bearer ${token}`, // send token in header
                },
   })
   console.log(res.data)

   if(res.data.success){
    toast.success("appointment booked successfully")
   }else{
     toast.error("appointment booking failed")
   }
}
  // const fetchdoctor = async()=>{
  //   try {
  //     const res = await axios.get("http://localhost:3000/api/doctor/getalldoctors");
  //     setDoctorlist(res.data.data)
  //     const data = res.data.data.find((doc)=>doc._id ==id);
  //     setDoctorData(data)
  //     console.log(doctorData)
  //     console.log(doctorlist)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const fetchdoctor = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/doctor/getalldoctors");

    const list = res.data.data;
    setDoctorlist(list);

    console.log("URL ID:", id);
    const cleanId = id.replace(",", "").trim();

    const data = list.find(
      (doc) => doc._id.toString() === cleanId
    );

    console.log("FOUND DOCTOR:", data);

    setDoctorData(data);

  } catch (error) {
    console.log(error);
  }
};

  
  const doctor = doctorlist.find((doc) => doc._id == id);
  

  useEffect(()=>{
    fetchdoctor();
  },[])
  
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-around '>  
        {/* left */}
          <img src={doctorData.image} className='bg-[#5f6fff] rounded-2xl w-60 h-72 m-3 flex-1' alt={doctorData.name} /> 


          {/* right */}

          <div className='flex flex-col flex-3 border border-gray-300 rounded-2xl px-3 py-6'>
            <div>
             <h1 className='text-2xl font-semibold my-2'>{doctorData.name}</h1>
             <h3>{doctorData.specialization} <span>{doctorData.experience} year</span></h3>
             <h1 className='font-semibold text-xl my-2'>about</h1>
             <p>{}</p>
             <h1 className='font-semibold text-xl'>Appointment fee: <span>RS.{doctorData.fee}</span></h1>
            </div>
        </div>
       
      </div>
     
         {/* -----booking slot--- */}
        <div className='w-full mt-5  '>
            <h1 className='m-3 pr-5 font-semibold text-2xl '>Booking slot</h1>
            <div className='flex w-full flex-wrap'>

            {Dates.map((data,index)=>(
              <div key={index} className={`flex flex-row items-center justify-center hover:bg-[#b2b2d0] transition-all duration-100  rounded-3xl gap-3 px-5 py-2 m-3 cursor-pointer
               ${selectedDate.date === data.date && selectedDate.day === data.day ? 'bg-[#273ae7] text-white' : 'bg-[#d2d4e7] text-black'} `}
               onClick={()=>setSelectedDate({...selectedDate ,date:data.date,day:data.day})}>           
                <h1 className=' '>{data.date}</h1>              
                <h1>{data.day}</h1>
              </div>
            ))}
        </div>
        <div>
            {selectedDate.date && (
              <div>
                <h1 className='m-3 pr-5 font-semibold text-2xl '>Available Slots</h1>
                <div className='w-full flex flex-wrap'>
                  {slots.map((slot, index) => (
                    <div key={index} className={`flex flex-row items-center justify-start  hover:bg-[#b2b2d0] transition-all duration-100  rounded-3xl gap-3 px-5 py-2 m-3 cursor-pointer  ${selectedDate.slot === slot ? 'bg-[#273ae7] text-white' : 'bg-[#d2d4e7] text-black'} `}
                     onClick={()=>setSelectedDate({...selectedDate, slot:slot})}>
                      <h1>{slot}</h1>
                  </div>
                ))}
              </div>
            </div>)}
           {selectedDate.slot && <button onClick={()=>handleClick(id)} className='bg-[#273ae7] text-white py-2 px-4 rounded-3xl hover:bg-[#1a28b0] transition-all duration-100 mt-5 pr-5'>Book Appointment</button>}
           
      </div>
      </div>
    </div>

              
  )
};


export default Doctor
