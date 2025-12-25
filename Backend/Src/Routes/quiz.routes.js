const express =  require('express');
const {authMiddlewares} = require('../Middleware/auth.middleware')
const createAuthMiddleware = require('../Middleware/createAuth.middleware')
const quizController = require('../Controller/quiz.controller');
const router = express.Router();

router.post('/create/quizcard',createAuthMiddleware(['teacher', 'admin']),quizController.createQuizCard)
router.put('/:id/create/quizQuestion',createAuthMiddleware(['teacher', 'admin']),quizController.createQuiz)
router.get('/get',authMiddlewares,quizController.getQuiz)
module.exports = router;