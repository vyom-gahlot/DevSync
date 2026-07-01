import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;


    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }


    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      message: "User signed up successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


export const signIn = async (req, res) =>{
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({email});

        if(!user){
            return res.json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password , user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
            );
            
        res.json({ success: true, message: "Login successful" });

    } catch (error) {
        res.status(500).json({
      success: false,
      message: error.message
    });
    }
};