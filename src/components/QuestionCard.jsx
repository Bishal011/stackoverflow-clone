import React from "react";
import "../styles/QuestionCard.css";

const QuestionCard = ({ question }) => {
  return (
    <div className="question-card">
      <h3 className="question-title">{question.title}</h3>
      <div className="tags">
        {question.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="meta">
        <span>🔼 {question.score}</span>
        <span>💬 {question.answer_count}</span>
        <span>👁️ {question.view_count}</span>
      </div>
      <p className="author">Asked by {question.owner?.display_name}</p>
    </div>
  );
};

export default QuestionCard;
