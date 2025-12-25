const mongoose = require('mongoose');

const questoptquiz = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    optA: {
        type: String,
        required: true
    },
    optB: {
        type: String,
        required: true
    },
    optC: {
        type: String,
        required: true
    },
    optD: {
        type: String,
        required: true
    },
    ans: {
        type: String,
        required: true
    },
})
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
    quiz: [questoptquiz],
})

const quizModel = mongoose.model('quiz', quizSchema);

module.exports = quizModel;