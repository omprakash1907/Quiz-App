import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuizById, submitQuiz } from '../api/api';

const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]); // Tracks answers
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Tracks selected button per question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [error, setError] = useState(""); // To store validation error message
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      const data = await getQuizById(id);
      setQuiz(data);
    };

    fetchQuiz();
  }, [id]);

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
    setSelectedAnswer(answer); // Store the selected answer
    setError(""); // Clear any previous error message
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      setError("Please select an answer before proceeding."); // Set validation error if no answer is selected
    } else {
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(answers[currentQuestion + 1] || null); // Set the selected answer for the next question
      } else {
        handleSubmitQuiz();
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null); // Set the selected answer for the previous question
      setError(""); // Clear any error message when going back
    }
  };

  const handleSubmitQuiz = async () => {
    const result = await submitQuiz(id, answers);
    navigate(`/score-summary`, { state: { score: result.score, total: result.total } });
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="quiz-layout">
      <div className="sidebar">
        <h2 className="sidebar-title">Question {currentQuestion + 1}/{quiz.questions.length}</h2>
        <div className="questions-navigation">
          {quiz.questions.map((_, index) => (
            <button 
              key={index}
              className={`question-number ${index === currentQuestion ? 'active' : ''}`}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-container">
        <div className="quiz">
          <h1 className="quiz-title">{quiz.title}</h1>
          <div className="question-text">
            <p>{quiz.questions[currentQuestion].text}</p>
          </div>
          <ul className="answer-list">
            {quiz.questions[currentQuestion].choices.map((choice, index) => (
              <li key={index}>
                <button
                  className={`answer-btn ${selectedAnswer === choice ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(choice)}
                >
                  {String.fromCharCode(65 + index)}. {choice}
                </button>
              </li>
            ))}
          </ul>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="navigation-buttons">
          <button className="prev-btn" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
            Previous
          </button>
          <button className="next-btn" onClick={handleNextQuestion}>
            {currentQuestion === quiz.questions.length - 1 ? "Submit Quiz" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
