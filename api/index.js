const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const crypto = require('crypto');
const nodemailer = require('nodemailer')


const app = express()

const port = 8000

const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const jwt = require('jsonwebtoken')


mongoose.connect("mongodb+srv://gyanendra:1234@nodeexpressprojects.l1t98wc.mongodb.net/native-ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connected to mongodb");
}).catch((error) => {
    console.log("Error connecting to mongodb", error);
})

app.listen(port, ()=> {
    console.log(`server listening on port ${port}`);
})

const User = require("./models/user")
const Order = require("./models/order");

//endpoints for register user

//function to send verification email to the user

const sendVerificationEmail = async(email, verificationToken) => {
    //create a nodeMailer transport
    const transporter =  nodemailer.createTransport({
        //configure the email service
        service:"gmail",
        auth:{
            user: "gmpatel152@gmail.com",
            pass:"sotr eugq zbzj klgy "
        },
    })
    //compose the email message
    const mailOptions = {
        from:"amazon.com",
        to: email,
        subject:"Email Verification",
        text:`Please click the following link to verify your email : http://localhost:8000/verify/${verificationToken}`
    }
    //send the email

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("Error in sending verification email", error);
    }
}


app.post('/register', async (req, res) => {
    try {
        const {name, email, password} = req.body;
        //check if user already registered
        const existingUser = await User.findOne({ email});
        if(existingUser){
            return res.status(400).json({message:"Email already exists"});
        }
        //create a new user
        const newUser = new User({name, email, password});
        //generate and store the verification token

        newUser.verificationToken = crypto.randomBytes(20).toString("hex");
        //save user to db
        await newUser.save();
        //send verification email to the user
        sendVerificationEmail(newUser.email, newUser.verificationToken)
    } catch (error) {
        console.log("Error registering user", error);
        res.status(500).json({message:"Registration failed"})
    }
})

//endpoint to verify the email

app.get('/verify/:token', async(req, res) => {
    try {
        const token = req.params.token;
        //find the user with the verification token
        const user = await User.findOne({verificationToken: token});
        if(!user){
            return res.status(404).json({message: "Invalid verification token"})
        }
        //mark the user as verified
        user.verified = true;
        user.verificationToken = undefined

        await user.save()
        res.status(200).json({message:"Verified Successfully!!"})
    } catch (error) {
        res.status(500).json({message:"Email verification failed"})
    }
})