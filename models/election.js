const mongoose = require('mongoose');

const electionSchema = mongoose.Schema({
    question: {
        type: "String",
        required: true
    },
    options: {
        type: Array,
        default: ["Yes", "No"],
        required: true
    },
    correctAnswer: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    },
    emailCreator: {
        type: String,
        required: true
    }
})

const election = mongoose.model("election", electionSchema)

module.exports = election;