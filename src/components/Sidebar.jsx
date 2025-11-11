import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFileAlt,
} from "react-icons/fa";
import avatar from "../assets/my-avatar.jpeg";
import "../styles/App.css";

// 🧩 Import resumes
import resumeFullStack from "../assets/resumes/Full_Stack_Developer_Resume.pdf";
import resumeProduct from "../assets/resumes/Product_Sup_&_Manag_Resume.pdf";

export default function Sidebar() {
  const titles = ["Full Stack Web Developer", "Product Support & Developer"];
  const resumes = [
    { name: "Full Stack Developer Resume", file: resumeFullStack },
    { name: "Product Sup & Manag Resume", file: resumeProduct },
  ];

  const [currentTitle, setCurrentTitle] = useState(0);
  const [fadeTitle, setFadeTitle] = useState(true);
  const [currentResume, setCurrentResume] = useState(0);
  const [fadeResume, setFadeResume] = useState(true);
  const [pausedResume, setPausedResume] = useState(false);

  // === Title animation ===
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeTitle(false);
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setFadeTitle(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // === Resume animation ===
  useEffect(() => {
    if (pausedResume) return;
    const interval = setInterval(() => {
      setFadeResume(false);
      setTimeout(() => {
        setCurrentResume((prev) => (prev + 1) % resumes.length);
        setFadeResume(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, [pausedResume]);

  return (
    <aside className="sidebar">
      <img src={avatar} alt="Avatar" />
      <h2>Abhiram M</h2>

      {/* === Animated Title === */}
      <p className={`title ${fadeTitle ? "fade-in" : "fade-out"}`}>
        {titles[currentTitle]}
      </p>

      {/* === Contact Info === */}
      <div className="contact-list">
        <a href="mailto:abhiram@example.com" className="contact-item">
          <FaEnvelope /> <span>abhiramitskct@gmail.com</span>
        </a>

        <a href="tel:+918888888888" className="contact-item">
          <FaPhone /> <span>+91 86680 90279</span>
        </a>

        <a
          href="https://www.google.com/maps/place/Bangalore,+India"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <FaMapMarkerAlt /> <span>Bangalore, India</span>
        </a>

        <div
          className="contact-item resume-item"
          onMouseEnter={() => setPausedResume(true)}
          onMouseLeave={() => setPausedResume(false)}
        >
          <FaFileAlt className="resume-icon" />
          <a
            href={resumes[currentResume].file}
            target="_blank"
            rel="noreferrer"
            className={`resume-link ${fadeResume ? "fade-in" : "fade-out"}`}
          >
            {resumes[currentResume].name}
          </a>
        </div>
      </div>

      {/* === Social Links === */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/abhirammanickam/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/abhirammanickam" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/story._.of_him/?__pwa=1" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </aside>
  );
}
