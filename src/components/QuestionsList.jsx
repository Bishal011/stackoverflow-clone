import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import "../styles/QuestionsList.css";
import axios from "axios";

const QuestionsSection = () => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("hot");

  const fetchQuestions = async () => {
    try {
      const url =
        filter === "week"
          ? `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&fromdate=${getFromDate(
              7
            )}&site=stackoverflow`
          : filter === "month"
          ? `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&fromdate=${getFromDate(
              30
            )}&site=stackoverflow`
          : `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`;

      console.log("Fetching questions with filter:", filter);
      const response = await axios.get(url);
      console.log("Fetched questions:", response.data.items);
      setQuestions(response.data.items);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const getFromDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return Math.floor(date.getTime() / 1000);
  };

  useEffect(() => {
    fetchQuestions();
  }, [filter]);

  return (
    <div className="questions-section">
      <div className="filters">
        {["hot", "activity", "votes", "creation", "week", "month"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="questions-list">
        {questions.map((question) => (
          <QuestionCard key={question.question_id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default QuestionsSection;
