import React, { useEffect, useContext, useState } from "react";
import "../styles/Resume.css";
import ThemeContext from "../context/ThemeContext";

// === ICON IMPORTS ===
import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase, IoLogoFigma } from "react-icons/io5";
import {
  SiMysql,
  SiSpringboot,
  SiVite,
  SiIntellijidea,
  SiPostman,
  SiSwagger,
} from "react-icons/si";
import { VscVscode, VscTools } from "react-icons/vsc";
import { PiLightning } from "react-icons/pi";

export default function Resume() {
  const isDark = useContext(ThemeContext);
  const iconStyle = { width: "auto", height: "42px" };
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const leftSkills = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3 },
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "Java", icon: FaJava },
    { name: "React", icon: FaReact },
    { name: "SpringBoot", icon: SiSpringboot },
    { name: "Python", icon: FaPython },
    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: IoLogoFirebase },
  ];

  const rightSkills = [
    { name: "VSCode", icon: VscVscode },
    { name: "IntelliJ IDEA", icon: SiIntellijidea },
    { name: "Figma", icon: IoLogoFigma },
    { name: "Postman", icon: SiPostman },
    { name: "Swagger", icon: SiSwagger },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Linux", icon: FaLinux },
    { name: "Vite", icon: SiVite },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".skills-card");
    const observers = [];

    cards.forEach((card) => {
      const mainTrack = card.querySelector(".skills-scroll .skills-track:not(.clone)");
      if (!mainTrack) return;

      const setScrollDist = () => {
        const w = Math.ceil(mainTrack.scrollWidth);
        const gap = 36;
        card.style.setProperty("--scroll-dist", `${w + gap}px`);
      };

      const ro = new ResizeObserver(() => requestAnimationFrame(() => setScrollDist()));
      ro.observe(mainTrack);
      observers.push(ro);
    });

    return () => observers.forEach((ro) => ro.disconnect());
  }, []);

  return (
    <article className="resume-section">
      <div className="resume-inner">
        {/* === EDUCATION === */}
        <section className="timeline-section">
          <h3 className="section-subtitle">Education</h3>
          <div className="timeline">
            <div className="timeline-item" onClick={() => openModal("btech")}>
              <div className="timeline-logo">🎓</div>
              <div className="timeline-content">
                <h4 className="timeline-item-title">B.Tech in Information Technology</h4>
                <span className="timeline-item-date">2021 – 2025</span>
                <p className="timeline-text">
                  Graduated with strong foundations in software development & technologies and product support & management.
                </p>
              </div>
            </div>

            <div className="timeline-item" onClick={() => openModal("hsc")}>
              <div className="timeline-logo">🏫</div>
              <div className="timeline-content">
                <h4 className="timeline-item-title">Higher & Secondary School Education</h4>
                <span className="timeline-item-date">2018 – 2020</span>
                <p className="timeline-text">
                  Focused on mathematics, computer science, and logical reasoning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === EXPERIENCE === */}
        <section className="timeline-section">
          <h3 className="section-subtitle">Experience</h3>
          <div className="timeline">
            <div className="timeline-item" onClick={() => openModal("intern")}>
              <div className="timeline-logo">💼</div>
              <div className="timeline-content">
                <h4 className="timeline-item-title">Full Stack Developer Intern</h4>
                <span className="timeline-item-date">May 2025 – Present</span>
                <p className="timeline-text">
                  Currently interning as a Full Stack Developer, building dynamic web applications using React, Node.js and MySQL.
                </p>
              </div>
            </div>

            <div className="timeline-item" onClick={() => openModal("freelance")}>
              <div className="timeline-logo">🖥️</div>
              <div className="timeline-content">
                <h4 className="timeline-item-title">Freelance Web Developer</h4>
                <span className="timeline-item-date">Jan 2025 – Present</span>
                <p className="timeline-text">
                  Freelance Web Developer crafting responsive, dynamic web solutions using React and Other UI components.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item" onClick={() => openModal("projectmanager")}>
  <div className="timeline-logo">🧩</div>
  <div className="timeline-content">
    <h4 className="timeline-item-title">Freelance Product Support & Development</h4>
    <span className="timeline-item-date">Jan 2025 – Present</span>
    <p className="timeline-text">
      Collaborated with design and development teams to streamline feature delivery and improve product efficiency.
    </p>
  </div>
</div>

        </section>

        {/* === SKILLS === */}
        <section className="skills-section">
          <h3 className="section-subtitle">
            <PiLightning /> Tech Stack
          </h3>

          <div className="skills-card">
            <div className="skills-scroll">
              <div className="skills-track">
                {leftSkills.map((skill, i) => (
                  <div className="skill-item" key={`left-${i}`}>
                    <div className="skill-icon">
                      <skill.icon style={iconStyle} />
                    </div>
                    <span className="label">{skill.name}</span>
                  </div>
                ))}
              </div>
              <div className="skills-track clone">
                {leftSkills.map((skill, i) => (
                  <div className="skill-item" key={`left-clone-${i}`}>
                    <div className="skill-icon">
                      <skill.icon style={iconStyle} />
                    </div>
                    <span className="label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="section-subtitle">
            <VscTools /> Tools
          </h3>

          <div className="skills-card">
            <div className="skills-scroll slow">
              <div className="skills-track">
                {rightSkills.map((skill, i) => (
                  <div className="skill-item" key={`right-${i}`}>
                    <div className="skill-icon">
                      <skill.icon style={iconStyle} />
                    </div>
                    <span className="label">{skill.name}</span>
                  </div>
                ))}
              </div>
              <div className="skills-track clone">
                {rightSkills.map((skill, i) => (
                  <div className="skill-item" key={`right-clone-${i}`}>
                    <div className="skill-icon">
                      <skill.icon style={iconStyle} />
                    </div>
                    <span className="label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === MODAL === */}
{activeModal && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-card glassy" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h3 className="modal-title">
          {activeModal === "btech" || activeModal === "hsc"
            ? "Education Timeline"
            : "Experience Timeline"}
        </h3>
      </div>

      <div className="modal-timeline">
        <div className="modal-timeline-item">
          <div className="modal-timeline-content">
            {/* === Conditional Modal Content === */}
            {activeModal === "btech" && (
              <>
                <h4 className="modal-school">Sri Krishna College Of Technology</h4>
                <span className="modal-year">2021 — 2025</span>
                <p className="modal-description">
                  A fresh grad outta with a B.Tech in Information Technology, passionate about software engineering and product support & development.
                </p>
              </>
            )}

            {activeModal === "hsc" && (
              <>
                <h4 className="modal-school">Sri Vijay Vidyalaya Matric Higher Secondary School</h4>
                <span className="modal-year">2018 — 2019</span>
                <p className="modal-description">
                  Completed Secondary School Education (10th Grade) with 88%.
                </p>
                
                <span className="modal-year">2020 — 2021</span>
                <p className="modal-description">
                  Completed Higher Secondary School Education (12th Grade) with 86%.
                </p>
              </>
              
            )}
              

            {activeModal === "intern" && (
              <>
                <h4 className="modal-school">Full Stack Developer Intern — Kodnest Technologies</h4>
                <span className="modal-year">May 2025 — Present</span>
                <p className="modal-description">
                  As a Full Stack Developer Intern, building and deploying responsive web applications with React, Node.js, Springboot, MySQL and MongoDB.
                </p>
              </>
            )}

            {activeModal === "freelance" && (
              <>
                <h4 className="modal-school">Freelance Web Developer</h4>
                <span className="modal-year">Jan 2025 — present</span>
                <p className="modal-description">
                 Worked as a Freelance Web Developer, designing and developing responsive websites and web apps using React, JavaScript, and MySQL for client projects.
                </p>
              </>
            )}
              {activeModal === "projectmanager" && (
  <>
    <h4 className="modal-school">Freelance Product Support & Development</h4>
    <span className="modal-year">Jan 2025 — Present</span>
    <p className="modal-description">
      Assisted in planning product roadmaps, coordinated sprint goals, and analyzed feature performance metrics to guide development priorities.
    </p>
  </>
)}

          </div>
        </div>
      </div>
    </div>
  </div>
)}


      </div>
    </article>
  );
}
