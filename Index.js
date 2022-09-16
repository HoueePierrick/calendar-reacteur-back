const express = require("express")
const formidable = require("express-formidable")
const cors = require("cors")
require("dotenv").config();
const mongoose = require("mongoose")

const app = express()
app.use(formidable())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)

const SignUp = require("./Routes/signup")
app.use(SignUp)

const LogIn = require("./Routes/LogIn")
app.use(LogIn)

const CreateEvent = require("./Routes/CreateEvent")
app.use(CreateEvent)

app.all("*", (req, res) => {
    res.status(400).json({message: "This route doesn't exist"})
})

app.listen(process.env.PORT, () => {
    console.log("Server started")
})