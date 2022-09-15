const mongoose = require("mongoose")

const Account = mongoose.model("Account", {
    firstname: String, 
    surname: String, 
    email: String, 
    salt: String, 
    hash: String,
    token: String,
    CGS: Boolean, 
    newsletter: Boolean
})

module.exports = Account