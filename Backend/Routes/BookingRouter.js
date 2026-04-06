import express from "express"
import { getBooking } from "../Controller/BookingController.js"

const  router = express.Router()

router.get("/getbooking",getBooking);


export default router;
