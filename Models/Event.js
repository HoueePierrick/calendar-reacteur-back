const mongoose = require("mongoose")

const Event = mongoose.model("Event", {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    },
    date: Date,
    title: String,
    description: String
})

module.exports = Event