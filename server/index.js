import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({msg:"This is working fine"});
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})