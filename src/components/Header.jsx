import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import user from "../assets/user.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="StackOverflow Logo" className="logo" />
        <input type="text" placeholder="Search Your Answers Here..." className="search-bar" />
      </div>
      <div className="header-right">
      <img src={user} alt="User Icon" className="user-icon" />
      </div>
    </header>
  );
};

export default Header;