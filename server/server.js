import express from 'express';
import cors from 'cors';
import { Socket } from 'socket.io';


const app = express();

//Middlewares

app.use(cors());

app.get('/',(req,res)=>(res.send('API is working')));

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('server is listening on port' + PORT)
});