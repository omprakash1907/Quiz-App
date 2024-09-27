import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 

// Get all quizzes
export const getQuizzes = async () => {
  try {
    const response = await axios.get(`${API_URL}/quizzes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
  }
};

// Get quiz by ID
export const getQuizById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/quizzes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz:', error);
  }
};

// Submit quiz and get score
export const submitQuiz = async (id, answers) => {
  try {
    const response = await axios.post(`${API_URL}/quizzes/${id}/submit`, {
      answers,
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting quiz:', error);
  }
};
