import express from 'express';
import auth from '../middlerware/auth.js';
import { createRoom, joinRoom } from '../controllers/room.js';


const roomRouter = express.Router();

roomRouter.post('/create', auth, createRoom);
roomRouter.post('/join', auth, joinRoom);


export default roomRouter