import express from 'express';
import { signIn, signUp } from '../controllers/sign.js';
import auth from '../middlerware/auth.js'



const signRouter = express.Router();


signRouter.post("/sign-up", signUp);
signRouter.post("/sign-in", signIn);






export default signRouter;