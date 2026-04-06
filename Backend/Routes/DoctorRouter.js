import express from 'express'
import {addDoctor,getAllDoctors}from '../Controller/Doctorcontroller.js'
import upload from '../Config/Multer.js';
const router = express.Router();


router.post('/addDoctor', upload.single("image"),addDoctor);
router.get('/getAllDoctors',getAllDoctors)

export default router;