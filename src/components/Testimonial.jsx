import React, { useState } from "react";
import "../styles/Testimonial.css"
import NextArrow from "../assets/next.png"

const testimonials = [
  {
    text: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    name: "Adam Beckley",
    title: "Founder & CEO",
    image: "https://infolio1.themescamp.com/startup/wp-content/uploads/sites/4/2023/11/t1.jpg",
  },
  {
    text: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    name: "Samantha Doe",
    title: "Marketing Manager",
    image: "https://infolio1.themescamp.com/startup/wp-content/uploads/sites/4/2023/11/t2.jpg",
  },
  {
    text: "A fantastic team to work with They understand the requirements perfectly and deliver solutions that are innovative and effective.",
    name: "Michael Smith",
    title: "CTO",
    image: "https://infolio1.themescamp.com/startup/wp-content/uploads/sites/4/2023/11/t1.jpg",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { text, name, title, image } = testimonials[currentIndex];

  return (
    <section className="testimonial">
       <span className="testimonial-main-heading">Success Stories</span>
       <div className="testimonial-heading">From Applicants To Employed
       </div>
      <div className="testimonial-container">
        {/* <div>
            <span className="testimonial-main-heading">Testimonials</span>
            <div className="testimonial-heading">What People Say?</div>
        </div> */}
        <div class="rating-card">
          <div class="rating-score">4.9</div>
          <div class="rating-stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <div class="review-count">(40+ Reviews)</div>
          <p class="description">Customer experiences that speak for themselves</p>
        </div>
        <div className="testimonial-content">
          <p className="testimonial-quote">
            {/* <span className="quote-mark">“</span> */}
            {text}
            {/* <span className="quote-mark">”</span> */}
          </p>
          <div className="testimonial-author">
            <div className="author-info">
                {/* <img src={image} alt={name} className="author-image" /> */}
                <div>
                    <p className="author-name">{name}</p>
                    <p className="author-title">{title}</p>
                </div>
            </div>
            <div className="testimonial-controls">
                <button className="control-btn" onClick={handlePrev}>
                    ←
                </button>
                <button className="control-btn" onClick={handleNext}>
                    →
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
