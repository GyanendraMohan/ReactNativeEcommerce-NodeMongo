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