import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import QuestionsSection from "./components/QuestionsList";
import BlogSideBar from "./components/BlogSideBar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <QuestionsSection />
        <BlogSideBar />
      </div>
    </div>
  );
};

export default App;
