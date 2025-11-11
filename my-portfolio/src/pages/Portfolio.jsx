import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";

import project1 from "../assets/my-avatar.png";
import project2 from "../assets/my-avatar.png";
import project3 from "../assets/my-avatar.png";
import arsProd from "../assets/ars-prod.png";
import n8nPopup from "../assets/n8n-workflow.png";
import focusDashboard from "../assets/focus-dashboard.png";
import focusTasks from "../assets/focus-tasks.png";
import focusSettings from "../assets/focus-settings.png";
import arStatic from "../assets/ar-static.png";
import admin from "../assets/admin.png";
import employee from "../assets/employee.png";
import request from "../assets/request.png";

const PROJECTS = [
  {
    id: 1,
    title: "FocusMate",
    issuer: "Personal Project",
    date: "2025",
    category: "Web Development",
    img: [focusDashboard, focusTasks, focusSettings],
    thumbnail: arStatic,
    tools: ["React", "Tailwind CSS", "Vite", "ESLint", "PostCSS", "Node.js"],
    link: "https://ai-choronomate-abhirammanickam.netlify.app/",
    gained: [
      "Boosted focus time by 35% with AI-assisted Pomodoro sessions.",
      "Delivered personalized insights using AI-generated summaries.",
      "Improved task completion efficiency by 25% with live tracking.",
    ],
  },
  {
    id: 2,
    title: "Expense Insight",
    issuer: "Personal Project",
    date: "2025",
    code: "EXP002",
    category: "Web Design",
    img: [arsProd],
    popupImg: arsProd,
    thumbnail: arStatic,
    tools: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Chart.js",
      "PapaParse",
      "html2canvas",
    ],
    link: "https://personal-expenses-abhirammanickam.netlify.app/",
    gained: [
      "Evolved from a front-end app into a full-stack expense tracker powered by MySQL.",
      "Tracks, categorizes, and analyzes spending through a responsive analytics dashboard.",
      "Integrated CSV imports, real-time charts, and instant PNG report exports.",
      "Showcases database design, REST API integration, and front-end visualization skills.",
      "Upcoming updates: AI-based predictions, report exports, and cross-platform sync.",
    ],
  },
  {
    id: 3,
    title: "Smart Maintenance Portal",
    issuer: "Personal Project",
    date: "2025",
    category: "Web Development",
    img: [admin, employee, request],
    thumbnail: arStatic,
    tools: [
      "React 18",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Recharts",
      "Lucide React",
      "Role-based Auth",
    ],
    link: "https://sm1-sigma.vercel.app/admin",
    gained: [
      "Centralized request tracking for employees and admins.",
      "Reduced issue resolution time by 30% with smart routing.",
      "Visualized live analytics via Recharts and real-time updates.",
    ],
  },
  {
    id: 4,
    title: "n8n Workflow Automation",
    issuer: "Open Source Project",
    date: "2025",
    category: "AI Automations Agents",
    img: [
      "https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png",
    ],
    popupImg: n8nPopup,
    thumbnail: arStatic,
    tools: [
      "Node.js",
      "Docker",
      "JavaScript",
      "TypeScript",
      "LangChain",
      "AI Agents",
      "Self-Hosting",
    ],
    link: "https://n8n.io",
    gained: [
      "Built and deployed self-hosted n8n automations.",
      "Integrated 400+ APIs and AI tools with LangChain.",
      "Enabled low-code workflows and full-code extensibility.",
      "Optimized efficiency via Dockerized modular setup.",
    ],
  },
  {
    id: 5,
    title: "Unified Smart Workspace",
    issuer: "Personal Project",
    date: "2025",
    category: "Applications",
    img: [arsProd],
    popupImg: arsProd,
    thumbnail: arStatic,
    tools: [
      "React 18",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "OpenAI API",
      "LangChain",
      "MongoDB",
      "Web Speech API",
    ],
    link: "#",
    gained: [
      "Merged AI chat, task tracking, and automation into one workspace.",
      "Enabled voice-based commands and multilingual communication.",
      "Delivered AI summaries and real-time sync across devices.",
    ],
  },
  {
    id: 6,
    title: "AI Career & Learning Suite",
    issuer: "Personal Project",
    date: "2025",
    category: "Applications",
    img: [arsProd],
    popupImg: arsProd,
    thumbnail: arStatic,
    tools: [
      "OpenAI API",
      "ElevenLabs",
      "SpeechRecognition",
      "React 18",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "Socket.IO",
      "Google Translate API",
    ],
    link: "#",
    gained: [
      "Bridges the learning-to-career gap using adaptive AI tools.",
      "Provides instant translation, AI resume building, and live interview practice.",
      "Fuses communication, coding, and career readiness in one suite.",
    ],
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in"); // ✨ new transition state

  const filters = ["All", "Web Development", "AI Automations Agents", "Applications"];
  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  // 🌀 Auto image swipe inside popup
  useEffect(() => {
    if (!selectedProject) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        selectedProject.img ? (prev + 1) % selectedProject.img.length : prev
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  // ✨ Smooth fade when filter changes
  useEffect(() => {
    setFadeState("fade-out");
    const timer = setTimeout(() => {
      setFadeState("fade-in");
    }, 250);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <>
      <article className={`certifications-section ${fadeState}`}>
        <div className="certifications-inner">
          <div className="certification-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="certifications-grid">
            {filteredProjects.map((p) => (
              <div
                className="cert-card"
                key={p.id}
                onClick={() => {
                  setSelectedProject(p);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="cert-thumb">
                  <img
                    src={p.thumbnail || (Array.isArray(p.img) ? p.img[0] : p.img)}
                    alt={p.title}
                  />
                </div>
                <div className="cert-overlay">
                  <span className="cert-eye">👁</span>
                </div>
                <div className="cert-info">
                  <h3 className="cert-title">{p.title}</h3>
                  <p className="cert-issuer">
                    {p.issuer} · {p.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {selectedProject && (
        <div
          className="portfolio-popup-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="portfolio-popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-left">
              <h2>{selectedProject.title}</h2>
              <p className="popup-issuer">{selectedProject.issuer}</p>
              <p className="popup-tools">
                <strong>Tools Used:</strong> {selectedProject.tools.join(", ")}
              </p>

              <div className="popup-gain">
                <h4>Approach & Result</h4>
                <ul>
                  {selectedProject.gained.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="popup-link"
              >
                🔗 View Project
              </a>
            </div>

            <div className="popup-right">
              <img
                src={
                  selectedProject.popupImg ||
                  (Array.isArray(selectedProject.img)
                    ? selectedProject.img[currentImageIndex]
                    : selectedProject.img)
                }
                alt={selectedProject.title}
                className="popup-img"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
