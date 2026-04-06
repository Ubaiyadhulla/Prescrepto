import jwt from 'jsonwebtoken'

export const authMiddleware = async(req,res,next)=>{
    try {
        
        const authHeader = req.headers.authorization;
        
        if(!authHeader){
            return res.status(401).json({
                success:false,
                message:"no token"
            }) 
        }
        const token = authHeader.split(" ")[1]
    
        const decode = jwt.verify(token,process.env.SECRET_KEY)
        req.User = decode;
        next()
    } catch (error) {
         return res.status(400).json({
            success:false,
            message:error.message
         })   
    }
}