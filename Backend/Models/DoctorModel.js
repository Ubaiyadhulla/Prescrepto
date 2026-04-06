import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    specialization:{
        type:String,
        enum:["general_physician","gynecologist","dermatologist","pediatricians","neurologist","gastroenterologist"]

    },
    experience:{
        type:Number,
        required:true,
    },
    about:{
        type:String,

    },
    fee:{
        type:Number,
        required:true

    },
    image:{
        type:String,
        required:true
    }
    
});

export const Doctor = mongoose.model("Doctor",doctorSchema);