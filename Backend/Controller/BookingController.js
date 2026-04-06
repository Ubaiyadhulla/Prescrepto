import { Appointment } from "../Models/AppoitmentBookingModel.js"

export const getBooking =async(req,res)=>{
    try {
        const booking = await Appointment.find()
        res.status(200).json({
            success:true,
            message:"total booking",
            total:booking.length,
            data:booking
        })
        
    } catch (error) {
       res.status(400).json({
        success:false,
        message:error.message
       })
    }
}