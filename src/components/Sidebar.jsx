import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>Home</li>
        <li>Questions</li>
        <li>Tags</li>
        <li>Users</li>
        <li>Explore Jobs</li>
        <li>Teams</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
