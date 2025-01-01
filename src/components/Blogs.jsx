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
      title: "The Future of Web",
      description:
        "Web development is constantly evolving, and staying ahead of the curve is essential for developers. This blog covers the latest trends and technologies shaping the future.",
      image: "",
    },
    {
      title: "Mastering JavaScript",
      description:
        "JavaScript is one of the most popular programming languages in the world. This blog dives deep into advanced concepts and best practices for mastering JavaScript.",
      image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/js.jpg",
    },
    {
      title: "React Tips and Tricks",
      description:
        "React is a powerful JavaScript library for building user interfaces. In this blog, we share tips and tricks to help you work more efficiently with React.",
      image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/react.jpg",
    },
    {
      title: "Understanding Node.js",
      description:
        "Node.js has revolutionized backend development. This blog explores its core concepts and how to use it to build efficient and scalable applications.",
      image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/nodejs.jpg",
    },
    {
      title: "CSS Grid Layout",
      description:
        "CSS Grid Layout is a powerful layout system that allows you to create complex designs with ease. Learn how to use it effectively in this blog.",
      image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/css-grid.jpg",
    },
    {
      title: "Exploring Cloud Computing",
      description:
        "Cloud computing is transforming how businesses operate. This blog discusses the basics of cloud computing and the most popular platforms.",
      image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/cloud-computing.jpg",
    },
  ];

  return (
    <section className="blog-section">
      <h2 className="line-title">Trending Blogs</h2>
      <div className="custom-carousel">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`item ${index === 0 ? "active" : ""}`}
            // style={{ backgroundImage: `url(${blog.image})` }}
            style={{backgroundColor : "black" }}
            onClick={handleItemClick}
          >
            <div className="item-desc">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button>View More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
