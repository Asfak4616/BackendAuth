import express from "express"
import jwt from "jsonwebtoken"

const app = express();

app.use(express.json())

app.get("/api",(req,res)=>{
    res.status(200).json({
        message:"Welcome to the authentication API"
    })
})
app.post("/api/register",(req,res)=>{


    const {email,name,password} = req.body;
    /**
     * save data to db
     */

    const token = jwt.sign({
        email, name
    },
    "4607ed8f8946e0e854523a60701897f4c3e611c5ddfd3ea2dc2d68d48a77197b2019e65a059cebc9eeefafb2"
)
res.status(201).json({
    message:"User Created Successfully",
    data:{
        user:{
            email,name
        },
        token
    }
})
    
})

export default app;