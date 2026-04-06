import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    phone:{
        type:Number,
        minlength:10,
        default:null
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"

    },
    address:{
        type:String,
        default:null
    },
    img:{
        type:String,
        default:null

    }
});

export const User =  mongoose.model("User",userSchema);