import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import {connectDB} from './Config/DbConfig.js';
import UserRouter from './Routes/UserRouter.js'
import BookingRouter from "./Routes/BookingRouter.js";
import DoctorRouter from "./Routes/DoctorRouter.js";


const app = express();

// connect to database
connectDB();



app.use(cors());
app.use(express.json())
app.use("/uploads", express.static("uploads"));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/user',UserRouter);
app.use("/api/booking",BookingRouter)
app.use("/api/doctor",DoctorRouter)


console.log("CLOUD_NAME:", process.env.CLOUD_NAME);
console.log("API_KEY:", process.env.API_KEY);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});