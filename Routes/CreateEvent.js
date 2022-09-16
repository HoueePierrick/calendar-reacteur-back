const express = require("express")
const router = express.Router()
const Event = require("../Models/Event")
const Account = require("../Models/Account")

router.post("/create-event", async(req, res) => {
    try {
        const {_id, date, title, description} = req.fields
        const account = await Account.findById(_id)
        const newEvent = new Event({
            user: account,
            date: date,
            title: title,
            description: description
        }) 
        await newEvent.save()
        res.status(200).json({message: "Event created"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router