import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.status(200).json({msg:"This is working fine"});
})

// database & server connection
try {
    mongoose.connect(process.env.DB_URI);
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
} catch (error) {
    console.log(error);
}