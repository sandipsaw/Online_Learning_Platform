const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    lesson: {
        type: String,
        required: true
    },
    questions: {
        type: Number,
        required: true
    },
    passing: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
})

const quizModel = mongoose.model('quiz',quizSchema);

module.exports = quizModel;