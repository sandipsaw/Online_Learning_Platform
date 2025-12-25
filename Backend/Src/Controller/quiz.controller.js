const quizModel = require('../model/quiz.model');

const createQuizCard = async (req, res) => {
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

const createQuiz = async (req, res) => {
    const { question, optA, optB, optC, optD, ans } = req.body;
    const quizes = await quizModel.findByIdAndUpdate(req.params.id,
        {
            $push: {
                quiz: {question, optA, optB, optC, optD, ans }
            },
        },{new:true}
    )

    return res.status(201).json({
        message:"quiz created successfully",
        quizes
    })
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

module.exports = { createQuiz, getQuiz,createQuizCard }