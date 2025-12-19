const quizModel = require('../model/quiz.model');

const createQuiz = async (req, res) => {
    try {
        const teacher = req.user.id;
        const { title, lesson, questions, passing, time } = req.body

        const quizcard = await quizModel.create({
            title, lesson, questions, passing, time, teacher
        })

        return res.status(201).json({
            message: "quiz card created successfully",
            quizcard,
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "internal server error" })
    }
}

const getQuiz = async (req, res) => {
    try {
        const quiz = await quizModel.find()
        return res.status(201).json({
            message: "quiz get successfully",
            quiz
        })
    } catch (error) {
        console.log(error);

    }
}

module.exports = { createQuiz, getQuiz }