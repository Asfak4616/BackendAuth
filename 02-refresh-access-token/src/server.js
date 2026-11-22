import app from "./app/app.js";


import { connectDB } from "./config/db.js";
await connectDB()

app.listen(3000,()=>{
    console.log("The port number is 3000")
})