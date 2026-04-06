import { Appointment } from "../Models/AppoitmentBookingModel.js";
import { User} from "../Models/UserModel.js"
import{v4 as uuidv4} from "uuid"
import jwt from 'jsonwebtoken'

export const CreateUser = async (req,res)=>{
    try {
        let {name,email,password} = req.body;

        name = name.trim();
        email = email.trim();
        password = password.trim();

        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"name,email and password are required"
            })
        };
        const existUser = await  User.findOne({email})
        if(existUser){
            return res.status(400).json({
                success:false,
                message:"User already exist"
            })
        }
        const user = await User.create({
            name,email,password
        })
        return res.status(200).json({
            success:true,
            message:"user created successfuly",
            user
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

export const login = async(req,res)=>{
    try {
        let {email,password} = req.body;
        email = email.trim();
        password = password.trim();

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"input missing",
            })
        }

        const userExist = await User.findOne({email})
        if(!userExist){
           return res.status(400).json({
                success:false,
                message:"user doesn't have account"
            })
        }

        const token =  jwt.sign({id:userExist._id,email:userExist.email},process.env.SECRET_KEY,{expiresIn: "1d"})
        if(userExist.password != password){
           return res.status(400).json({
                success:false,
                message:"enter correct password"
            })
        }

        return res.status(200).json({
            success:true,
            message:"login successfull",
            token
        })
    } catch (error) {
         res.status(400).json({
            message:error.message
        }) 
    }

}


export const BookAppointment = async(req,res)=>{
    try {
       let {day,date,slot , doctor_id,doctor_name,patient_name} = req.body;
       

       if(!day || !date || !slot || !doctor_id ||!doctor_name || !patient_name){
        return res.status(400).json({
            success:false,
            message:"all inputs are required"
        })
       }

       const existBooking = await Appointment.findOne({
        doctor_id,
        day,
        slot,
        date,
       
       })

       if(existBooking){
        return res.status(401).json({
            success:false,
            message:"appointment already booked"
        })
       }
       

       const appointment = await Appointment.create({
        booking_id : uuidv4(),
        day,
        date,
        slot,
        doctor_id,
         doctor_name,
        patient_name
       })

       return res.status(200).json({
        success:true,
        message:"appoinment booked succesfully",
        appointment
       })

       

    } catch (error) {
       res.status(400).json({
            message:error.message
        }) 
    }
}

export const saveProfile=async(req,res)=>{
  const{phone,address} = req.body;

 const updatedUser = await User.findOneAndUpdate({email:req.User.email},{phone,address},{ returnDocument: "after" })
 return res.status(200).json({
    success:true,
    message:"profile updated successfully",
    User:updatedUser
 })
}

export const getUser = async(req,res)=>{

    try {
        
        const{email} = req.query;
    
        if (!email) {
          return res.status(400).json({
            success: false,
            message: "Email is required"
          });
        }
        const user = await User.findOne({email})
         if (!user) {
          return res.status(404).json({
            success: false,
            message: "User not found"
          });
        }
        res.status(200).json({
            success:true,
            message:"geting user information successfull",
            name:user.name
        })
    } catch (error) {
          res.status(500).json({
      success: false,
      message: "Server error"
    });
    }
}