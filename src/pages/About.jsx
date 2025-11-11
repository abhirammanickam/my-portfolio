import React, { useState, useEffect } from "react";
import "../styles/About.css";

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeTestimonial ? "hidden" : "auto";
  }, [activeTestimonial]);

  const testimonials = [
    {
      name: "Daniel Lewis",
      avatar: "🧑‍💻",
      text: "Captured our vision and built a sleek, responsive website that truly impressed.",
      details:
        "Daniel appreciated the efficient workflow and communication throughout the project. He highlighted the creativity in solving UI challenges and the attention to accessibility in the final web build.",
    },
    {
      name: "Jessica Miller",
      avatar: "👩‍💻",
      text: "A strong problem solver and collaborator who elevates every project with technical precision.",
      details:
        "Jessica emphasized the quality of code, the smooth animations, and the responsive behavior across all devices. The brand aesthetics perfectly matched her company’s tone and vision.",
    },
    {
      name: "Ryan Brooks",
      avatar: "💡",
      text: "Ensured stability, efficiency, and clear collaboration across every stage.",
      details:
        "Ensured smooth product performance, quick resolutions, and seamless communication throughout every project phase.",
    },
    {
      name: "Maya Patel",
      avatar: "🎯",
      text: "Always enthusiastic and brings great design sense and energy to every task.",
      details:
        "Maya mentioned the ability to visualize product design ideas with creative animations and professional presentation.",
    },
  ];

  const platforms = [
    {
      name: "GeeksforGeeks",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
      link: "https://www.geeksforgeeks.org/user/abhiramdigs/",
    },
    {
      name: "LeetCode",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      link: "https://leetcode.com/u/abhiram_3103/",
    },
    {
      name: "HackerRank",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
      link: "https://www.hackerrank.com/profile/abhiramitskct",
    },
    {
      name: "HackerEarth",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png",
      link: "https://www.hackerearth.com/@abhiramitskct/",
    },
    {
      name: "CodeChef",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codechef.svg",
      link: "http://codechef.com/users/abhirammanic",
    },
    {
      name: "Kaggle",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png",
      link: "https://www.kaggle.com/abhirammanickam31",
    },
    {
      name: "LinkedIn Learning",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      link: "https://www.linkedin.com/learning/me/my-library/in-progress",
    },
  ];

  return (
    <section className="about-section">
      <div className="about-inner">
        {/* === Intro Section === */}
        <div className="about-intro">
          <p>
            Hey guys🩶, I craft websites that work well, load quick, plus feel natural to use.
             Creative ideas meet solid coding so everything runs smooth without glitches
             . Each project starts from scratch, shaped by real needs instead of trends or fluff.
              The aim? Make things look sharp while actually helping reach goals - no empty promises,
               just stuff that performs.
          </p>
          <p>
            I work with data and help products by turning findings into real steps.
             Because I analyze numbers, things run better, people enjoy using them more,
              while choices get backed through clear evidence during each stage.
               When I aim for speed, team effort shows up stronger, small upgrades add up
                - so everything operates without hiccups, fits company targets, plus brings solid results over time.
          </p>
        </div>

        {/* === Services Section === */}
        <h2 className="about-heading">What I’m into</h2>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-icon">🎨</span>
            <h4>Web Design</h4>
            <p>The most modern and high-quality designs made at a professional level.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">💻</span>
            <h4>Web Development</h4>
            <p>High-quality development of sites at a professional level.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">📱</span>
            <h4>Product Support & Management</h4>
            <p>Turning challenges into opportunities by combining technical support,
             user focus, and strategic product management.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🏸</span>
            <h4>Badminton</h4>
            <p>Every smash, every drop, every rally — badminton turns focus into flow and precision into art❤️‍🩹.</p>
          </div>
        </div>

        {/* === Testimonials Section === */}
        <h2 className="about-heading">Testimonials</h2>
        <div className="testimonials">
          <div className="testimonials-track">
            {testimonials.concat(testimonials).map((t, i) => (
              <div
                key={i}
                className="testimonial-card"
                onClick={() => setActiveTestimonial(t)}
              >
                <div className="testimonial-avatar">{t.avatar}</div>
                <h4 className="testimonial-name">{t.name}</h4>
                <p className="testimonial-text">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === Prep & Practice Platforms === */}
        <h2 className="about-heading">Prep & Practice Platforms</h2>
        <div className="clients">
          <div className="clients-track">
            {platforms.concat(platforms).map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-icon"
                title={p.name}
              >
                <img src={p.icon} alt={p.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Fullscreen Popup === */}
      {activeTestimonial && (
        <div
          className="testimonial-popup-overlay"
          onClick={() => setActiveTestimonial(null)}
        >
          <div
            className="testimonial-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close-btn"
              onClick={() => setActiveTestimonial(null)}
            >
              ✕
            </button>
            <div className="popup-avatar">{activeTestimonial.avatar}</div>
            <h3>{activeTestimonial.name}</h3>
            <p className="popup-text">{activeTestimonial.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}
