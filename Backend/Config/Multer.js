import multer from "multer"
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./Cloudinaryconfig.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
    folder: "doctor-app",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
})

const upload = multer({ storage });

export default upload;