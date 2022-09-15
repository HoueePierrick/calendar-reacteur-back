const express = require("express")
const router = express.Router();
const SHA256 = require("crypto-js/sha256")
const encBase64 = require("crypto-js/enc-base64")
const uid2 = require("uid2")
const Account = require("../Models/Account")

router.post("/sign-up", async(req, res) => {
    try {
        const {firstname, surname, email, password, CGS, newsletter} = req.fields
        const existing = await Account.find({email: email})
        if(existing.length > 0) {
            res.status(400).json({message: "An account already exists with this email"})
        } else {
            const salt = uid2(16)
            const hash = SHA256(password + salt).toString(encBase64)
            const token = uid2(16)
            const newAccount = new Account({
                firstname: firstname, 
                surname: surname, 
                email: email, 
                salt: salt, 
                hash: hash,
                token: token,
                CGS: CGS, 
                newsletter: newsletter
            })
            await newAccount.save()
            res.status(200).json({message: "Account created successfully", key_info:{email: email, token: token}})
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router