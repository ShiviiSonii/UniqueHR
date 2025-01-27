import React from "react";
import "../styles/Blogs.css";

const BlogSection = () => {
  const handleItemClick = (e) => {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => item.classList.remove("active"));
    e.currentTarget.classList.toggle("active");
  };

  const blogs = [
    {
      title: "Embracing Exhaustion",
      description:
        "I used to think that exhaustion was a sign of failure or weakness. After all, who wants to admit they’re worn out? It felt like I was failing to keep up with the demands of life.", 
        image: "",
    },
    {
      title: "My Journey Through Life",
      description:
        "  Touchwood, my life has been quite simple. I don't have any grand tales of overcoming adversity or navigating tumultuous struggles.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/js.jpg",
    },
    {
      title: "The Curious Case of Remote Work: My Confessions",
      description:
        "  Starting a business is a rollercoaster of emotions, decisions, and learning curves. When we decided to embrace a fully remote work culture for our organization",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/react.jpg",
    },
    {
      title: "Candidate Dropout – Recruiters’ Biggest Nightmare",
      description:
        "  Picture this: a recruiter spends weeks hunting for the perfect candidate. After countless calls, interviews, and follow-ups, they finally find The One.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/nodejs.jpg",
    },
    {
      title: "The Role of Technology and How Hireboost by Unique HR is Leading the Way",
      description:
        " Technology is reshaping the way businesses operate—and the HR domain is no exception. Gone are the days when HR professionals were buried under stacks of paperwork or spent countless hours managing recruitment and employee records",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/css-grid.jpg",
    },
    {
      title: "Employee Emotions : -The Heart of a Manager’s Impact",
      description:
        "It is often said that employees don’t leave companies; they leave managers. This adage highlights a profound truth—the emotional connection employees feel in their workplace",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/cloud-computing.jpg",
    },
  ];

  return (
    <section className="blog-section">
      {/* <h2 className="line-title">Trending Blogs</h2> */}
      <span className='blog-main-heading'>Blogs</span>
      <p className='blog-heading'>Trending Blogs</p>
      <div className="custom-carousel">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`item ${index === 0 ? "active" : ""}`}
            // style={{ backgroundImage: `url(${blog.image})` }}
            // style={{backgroundColor : "black" }}
            onClick={handleItemClick}
          >
            <div className="item-desc">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button href="#" target="_blank">View More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
