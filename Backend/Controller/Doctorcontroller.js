import {Doctor} from "../Models/DoctorModel.js";
import cloudinary from "../Config/Cloudinaryconfig.js";
export const addDoctor = async(req,res)=>{
    try {
       if(!req.file){
        return res.status(400).json({success:false,message:"Image is required"})
       }

       const result = await cloudinary.uploader.upload(req.file.path,{
        folder:"prescepto/doctors"
       })     
       const doctorData = new Doctor({
        ...req.body,
        image:result.secure_url
       })
       if(!doctorData){
        return res.status(400).json({success:false,message:"Failed to create doctor"})
       }
       await doctorData.save()
       res.status(200).json({success:true,message:"Doctor added successfully",data:doctorData})


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllDoctors = async(req,res)=>{
    try {
        res.status(200).json({success:true,message:"Doctors fetched successfully",data:await Doctor.find()})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
