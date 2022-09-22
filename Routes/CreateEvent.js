const express = require("express")
const router = express.Router()
const Event = require("../Models/Event")
const Account = require("../Models/Account")

router.post("/create-event", async(req, res) => {
    try {
        const {token, date, title, description} = req.fields
        const account = await Account.find({token: token})
        if(account.length === 0) {
            res.status(400).json({message: "You need to log in to create an event"})
        } else {
            const newEvent = new Event({
                user: account[0],
                date: date,
                title: title,
                description: description
            }) 
            await newEvent.save()
        }
        res.status(200).json({message: "Event created"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router