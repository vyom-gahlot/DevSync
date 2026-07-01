import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { Socket } from 'socket.io';
import dns from 'dns';
import connectDB from './configs/db.js';
import signRouter from './routes/signRoutes.js';


dns.setServers(["1.1.1.1", "8.8.8.8"]);



const app = express();

await connectDB();

//Middlewares

app.use(cors());
app.use(express.json());


//Routes
app.get('/',(req,res)=>(res.send('API is working')));
app.use('/api/auth', signRouter);

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('server is listening on port' + PORT)
});