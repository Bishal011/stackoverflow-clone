import React from "react";
import "../styles/BlogSideBar.css";

const BlogSideBar = () => {
  return (
    <aside className="blog-sidebar">
      <section>
        <h3>The Overflow Blog</h3>
        <p>• The unexpected benefits of mentoring others</p>
        <p>• Building for AR with Niantic Labs’ SDK</p>
      </section>
      <section>
        <h3>Hot Meta Posts</h3>
        <p>• Tags appear redundant</p>
        <p>• How to handle duplicate questions</p>
      </section>
      <section>
        <h3>Custom Filters</h3>
        <button>Add Custom Filters</button>
      </section>
    </aside>
  );
};

export default BlogSideBar;
