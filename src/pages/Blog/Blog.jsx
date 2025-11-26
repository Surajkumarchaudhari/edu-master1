import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    title: "How to Score 650+ in NEET 2025",
    desc: "A complete strategy guide for NEET aspirants — time management, subjects, mock tests and revision plans.",
    img: "https://i.postimg.cc/tgqfq2dY/b1.jpg",
    tag: "NEET",
    date: "Jan 2025",
  },
  {
    title: "Crack JEE Advanced: Daily Study Routine",
    desc: "Toppers’ daily study habits and how you can follow them to improve consistency and rank.",
    img: "https://i.postimg.cc/fWjh5RLm/b2.jpg",
    tag: "JEE",
    date: "Feb 2025",
  },
  {
    title: "Best Reference Books for Class 11 & 12",
    desc: "A curated list of Physics, Chemistry, Maths & Biology books recommended by toppers.",
    img: "https://i.postimg.cc/RVv6XqJ4/b3.jpg",
    tag: "Books",
    date: "Mar 2025",
  },
  {
    title: "How to Stay Motivated During Long Preparation",
    desc: "Simple psychological tricks to maintain discipline and avoid burnout while preparing.",
    img: "https://i.postimg.cc/3xWwXnXy/b4.jpg",
    tag: "Motivation",
    date: "Jan 2025",
  },
  {
    title: "Important Topics for JEE Main 2025",
    desc: "Weightage-wise most scoring chapters and how to revise them effectively.",
    img: "https://i.postimg.cc/V6dwnXpb/b5.jpg",
    tag: "JEE",
    date: "Dec 2024",
  },
  {
    title: "How to Improve Organic Chemistry",
    desc: "Best practices, notes preparation tips, and error-free approach for Organic Chemistry.",
    img: "https://i.postimg.cc/mkZB2vST/b6.jpg",
    tag: "Chemistry",
    date: "Nov 2024",
  },
];

const Blog = () => {
  return (
    <div className="blog-page">

      {/* HERO SECTION */}
      <section className="blog-hero">
        <h1>EduMaster Blog</h1>
        <p>Your daily dose of exam tips, study hacks, guides & motivation.</p>
      </section>

      {/* BLOG GRID */}
      <section className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.img} alt={post.title} className="blog-img" />

            <div className="blog-content">
              <div className="blog-meta">
                <span className="tag">{post.tag}</span>
                <span className="date">{post.date}</span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-desc">{post.desc}</p>

              <button className="read-btn">Read More →</button>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Blog;
