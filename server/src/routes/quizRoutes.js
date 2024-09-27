const express = require('express');
const quizRoutes = express.Router();
const { getQuizzes, getQuizById, submitQuiz } = require('../controllers/quizController');

// Routes for getting quizzes and submitting answers
quizRoutes.get('/quizzes', getQuizzes);
quizRoutes.get('/quizzes/:id', getQuizById);
quizRoutes.post('/quizzes/:id/submit', submitQuiz);

module.exports = quizRoutes;
