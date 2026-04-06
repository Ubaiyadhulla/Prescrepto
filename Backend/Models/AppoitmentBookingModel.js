import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    booking_id:{
        type:String,
        unique:true,
        required:true
    },
    date:{
        type:String,
        required:true,
    },
    day:{
       type:String,
        required:true,
    },
    slot:{
        type:String,
        required:true,
    },
    doctor_id:{
       type:String,
       required:true
    },
    doctor_name:{
        type:String,
        required:true
    },
    patient_name:{
        type:String,
        required:true
    }
})
export const Appointment =  new mongoose.model("Appointment",AppointmentSchema)