import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from 'axios' 
import {toast} from 'react-toastify'


const AddDoctor = () => {
  const [profileImg, setProfileImg] = useState(null)
  const [imageFile, setImageFile] = useState(null);
  const [doctorData, setDoctorData] = useState({
    name: '',
    email: '',
    experience: '',
    fee: '',
    specialization: '',
    education: '',
    address: ''
  })


const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setImageFile(file); // actual file
    setProfileImg(URL.createObjectURL(file)); // preview
  }
};

  const handleChange = (e) => {
    setDoctorData({
      ...doctorData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        // Handle form submission logic here
     const formData = new FormData();

  // add text data
  Object.keys(doctorData).forEach((key) => {
    formData.append(key, doctorData[key]);
  });

  // add image
  formData.append("image", imageFile);

  console.log("Doctor Data:", doctorData);
  console.log("Image File:", imageFile);

   const response = await axios.post(
      "http://localhost:3000/api/doctor/addDoctor", // backend route
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if(response.data.success) {
    
      toast.success("Doctor added successfully!");
    }
    } catch (error) {
      console.error("FULL ERROR:", error);

  const message =
    error.response?.data?.message || error.message;

  console.log("Backend message:", message);

  alert(message);
    }
  

  
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-content'>
      <h1>Add Doctor</h1>
      <form onSubmit={handleSubmit} className='w-fit h-fit flex flex-col  gap-4 justify-center items-center  p-6 backdrop-blur-sm '>
        <label className=' m-4 p-4  flex gap-3 w-auto items-center justify-center' htmlFor="profileImg">
          <img className='w-22 h-22 rounded-full' src={profileImg ? profileImg : assets.profile_icon2} alt="pic" />upload doctor image</label>
        <input type="file" onChange={handleImageChange} id='profileImg'  className='hidden' accept="image/*"/>


        <div className='w-full  flex gap-6'>

          {/*-----------leftContainer--------  */}
        
        <div className='flex flex-col gap-4'>
         <div className='flex flex-col items-start w-full'>
          <label htmlFor="name">Doctor Name</label>
          <input className='w-full border rounded-md p-2' type="text" placeholder='Name' name='name' value={doctorData.name} onChange={handleChange} id='name' />
         </div>

         <div  className='flex flex-col items-start w-full' >
          <label htmlFor="email">Doctor Email</label>
          <input className='w-full border rounded-md p-2' type="email" placeholder='Email' name='email' value={doctorData.email} onChange={handleChange} id='email' />
         </div>

         <div  className='flex flex-col items-start w-full' >
          <label htmlFor="exp">Doctor Experience</label>
          <input className='w-full border rounded-md p-2' type="number" placeholder='In Years' name='experience' value={doctorData.experience} onChange={handleChange} id='exp' />
         </div>

          <div  className='flex flex-col items-start w-full'>
          <label htmlFor="fees">Doctor Fees</label>
          <input className='w-full border rounded-md p-2' type="number" placeholder='in Rupees' name='fee' value={doctorData.fee} onChange={handleChange} id='fee' />
          </div>

        </div>

          {/*-----------rightContainer--------  */}
        <div className='flex flex-col gap-4'>
         <div className='flex flex-col items-start w-full'>
          <label htmlFor="spec">Doctor Specialization</label>
          <input className='w-full border rounded-md flex p-2' type="text" placeholder='Specialization' name='specialization' value={doctorData.specialization} onChange={handleChange} id='spec' />
         </div>

         <div className='flex flex-col items-start w-full'>
          <label htmlFor="education">Doctor Education</label>
          <input className='w-full border rounded-md p-2' type="text" placeholder='Education' name='education' value={doctorData.education} onChange={handleChange} id='education' />
         </div>

         <div className='flex flex-col items-start w-full'>
          <label htmlFor="address">Doctor Address</label>
          <input className='w-full border rounded-md p-2' type="text" placeholder='Address' name='address' value={doctorData.address} onChange={handleChange} id='address' />
         </div>
        </div>
        </div>
        <button type='submit' className=' bg-[#5f6fff] text-white px-4 py-3 rounded-2xl'>Add Doctor</button>
      </form>
    </div>
  )
}

export default AddDoctor
