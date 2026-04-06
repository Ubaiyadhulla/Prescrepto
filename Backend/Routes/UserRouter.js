import express from 'express'
import { BookAppointment, CreateUser, getUser, login, saveProfile } from "../Controller/UserControler.js";
import{authMiddleware} from '../Middleware/UserMiddleware.js'


const router = express.Router();

router.post('/register',CreateUser);
router.post('/login',login)
router.post('/booking',authMiddleware,BookAppointment)
router.patch('/saveProfile',authMiddleware,saveProfile)
router.get("/getuser",getUser)


export default router;