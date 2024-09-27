import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // React icon for Home

const ScoreSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };
  const percentage = ((score / total) * 100).toFixed(0); // Calculate percentage

  const resultText = percentage >= 50 ? "You Passed!" : "You Failed!";
  const resultColor = percentage >= 50 ? "green" : "red";
  const resultLevel = percentage >= 75 ? "High" : percentage >= 50 ? "Medium" : "Low";

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="score-container">
      <div className="score-header">
        <h2>Your Result is there</h2>
      </div>
      <div className="score-content">
        <h3 style={{ color: resultColor }}>{resultText}</h3>
        <div className="score-percentage">
          <span>{percentage}%</span>
        </div>
        <p className="score-level">{resultLevel.toLowerCase()}</p>
      </div>
      <div className="score-indicators">
        <div className="indicator">
          <span className="dot red-dot"></span> Low
        </div>
        <div className="indicator">
          <span className="dot orange-dot"></span> Medium
        </div>
        <div className="indicator">
          <span className="dot green-dot"></span> High
        </div>
      </div>
      <button className="home-btn" onClick={handleGoHome}>
        <FaHome /> Home
      </button>
    </div>
  );
};

export default ScoreSummary;
