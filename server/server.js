import express from 'express';
import cors from 'cors';
import { Socket } from 'socket.io';
import dns from 'dns';
import connectDB from './configs/db.js';
import dotenv from 'dotenv';

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();


const app = express();

await connectDB();

//Middlewares

app.use(cors());
app.use(express.json());


//Routes
app.get('/',(req,res)=>(res.send('API is working')));

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('server is listening on port' + PORT)
});