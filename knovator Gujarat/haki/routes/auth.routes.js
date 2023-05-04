import { Router } from 'express'
import argon2 from 'argon2'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import passport from 'passport'

const router = Router()

router.post('/user/register', async (req, res) => {
    const { name, email, password }= req.body

    try {
       // check if user already exists
        const userExists = await User.findOne({email})
        if (userExists) return res.status(400).json({success: false, message: "User already exists"})    

        const hashedPassword = await argon2.hash(password)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save() 

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ success: true, message: "User successfully registered", token });

    }catch(e) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong upon registration",
            errors: e.message
        })
    }
})

router.post('/user/login', async (req, res) => {
    const { email, password }= req.body

    try {
        // check if user already exists
        const userExists = await User.findOne({email})
        if (!userExists) return res.status(400).json({success: false, message: "User does not exists"})

        const isPasswordValid = await argon2.verify(userExists.password, password)
        if (!isPasswordValid) return res.status(400).json({success: false, message: "Invalid credentials"})

        // generating token 
        const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({success: true, message: "User successfully registered", token})

    }catch(e) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong upon registration",
            errors: e.message
        })
    }
})

router.get('/profile', passport.authenticate('jwt', {session: false}), function(req, res) {
    res.send('welcome')
    console.log(req.user)
})

export default router