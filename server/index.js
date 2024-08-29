import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/routes.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const port = process.env.PORT;

// database & server connection
try {
    mongoose.connect(process.env.DB_URI);
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
} catch (error) {
    console.log(error.message);
}