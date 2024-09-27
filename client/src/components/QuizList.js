import React, { useEffect, useState } from 'react';
import { getQuizzes } from '../api/api';
import { Link } from 'react-router-dom';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await getQuizzes();
      setQuizzes(data);
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="quiz-list-container">
      <h1 className="quiz-list-title">Available Quizzes</h1>
      <div className="quiz-cards-container">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="quiz-card">
            <h2 className="quiz-title">{quiz.title}</h2>
            <p className="quiz-description">{quiz.description}</p>
            <Link to={`/quiz/${quiz._id}`} className="start-quiz-btn">
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
