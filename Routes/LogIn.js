const express = require("express")
const router = express.Router()
const SHA256 = require("crypto-js/sha256")
const encBase64 = require("crypto-js/enc-base64")
const uid2 = require("uid2")
const Account = require("../Models/Account")

router.get("/log-in", async(req, res) => {
    try {
        const {email, password} = req.query
        const account = await Account.find({email: email})
        if(account.length === 0) {
            res.status(200).json({message: "There is no existing account for this email"})
        } else {
            const {_id, salt, hash, token} = account[0]
            if(SHA256(password + salt).toString(encBase64) !== hash) {
                res.status(200).json({message: "The password that you've entered is incorrect"})
            } else {
                res.status(200).json({message: "You're connected with success", account: {
                    _id: _id, token: token}})
            }
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router