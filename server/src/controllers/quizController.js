const Quiz = require('../models/quizModel');

// Get all quizzes
const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get quiz by ID
const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Submit quiz and calculate score
const submitQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    const userAnswers = req.body.answers;
    let score = 0;

    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        score++;
      }
    });

    res.status(200).json({ score, total: quiz.questions.length });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getQuizzes, getQuizById, submitQuiz };
