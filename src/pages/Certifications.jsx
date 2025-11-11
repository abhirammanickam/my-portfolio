import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "../styles/Certifications.css";

// ===== Outer logos =====
import forage from "../assets/certificates/forage.jpg";
import cisco from "../assets/certificates/cisco.jpeg";
import infosys from "../assets/certificates/infosys.jpeg";
import linkedin from "../assets/certificates/linkedin.jpeg";

// ===== PDFs =====
import webDevPDF from "../assets/certificates/pdfs/Web Development.pdf";
import dataAnalyticsPDF from "../assets/certificates/pdfs/Data Analytics.pdf";
import aiPDF from "../assets/certificates/pdfs/Artificial Intelligence.pdf";
import ethicsAIPDF from "../assets/certificates/pdfs/Ethics of Generative AI.pdf";
import genAIPDF from "../assets/certificates/pdfs/Generative AI.pdf";
import awsDevOpsPDF from "../assets/certificates/pdfs/AWS Certified DevOps.pdf";
import projectManagementPDF from "../assets/certificates/pdfs/Project Management Foundations.pdf";
import pmPDF from "../assets/certificates/pdfs/pm.pdf";
import cyberPDF from "../assets/certificates/pdfs/cyber.pdf";
import cyberSecPDF from "../assets/certificates/pdfs/CyberSec.pdf";
import ccnaPDF from "../assets/certificates/pdfs/CCNA.pdf";
import ccnaEnsPDF from "../assets/certificates/pdfs/CCNAENS.pdf";

// ===== Certificate preview images (.png) =====
import webDevIMG from "../assets/certificates/images/Web Development.png";
import dataAnalyticsIMG from "../assets/certificates/images/Data Analytics.png";
import aiIMG from "../assets/certificates/images/Artificial Intelligence.png";
import ethicsAIIMG from "../assets/certificates/images/Ethics of Generative AI.png";
import genAIIMG from "../assets/certificates/images/Generative AI.png";
import awsDevOpsIMG from "../assets/certificates/images/AWS Certified DevOps.png";
import projectManagementIMG from "../assets/certificates/images/Project Management Foundations.png";
import pmIMG from "../assets/certificates/images/pm.png";
import cyberIMG from "../assets/certificates/images/cyber.png";
import cyberSecIMG from "../assets/certificates/images/CyberSec.png";
import ccnaIMG from "../assets/certificates/images/CCNA.png";
import ccnaEnsIMG from "../assets/certificates/images/CCNAENS.png";

// ===== Placeholders =====
const ibm = forage;
const aws = forage;
const stanford = forage;
const udemy = forage;
const meta = forage;
const gl = forage;

// ===== Certification Data =====
const CERTIFICATIONS = [
  {
    id: 1,
    title: "Web Development",
    issuer: "LinkedIn Learning",
    date: "2025",
    category: "Web Development",
    img: linkedin,
    pdf: webDevPDF,
    certImg: webDevIMG,
    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Data Analytics",
    issuer: "LinkedIn Learning",
    date: "2025",
    category: "Data",
    img: linkedin,
    pdf: dataAnalyticsPDF,
    certImg: dataAnalyticsIMG,
    tools: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    issuer: "LinkedIn Learning",
    date: "2025",
    category: "AI",
    img: linkedin,
    pdf: aiPDF,
    certImg: aiIMG,
    tools: ["Python", "TensorFlow", "Machine Learning"],
  },
  {
    id: 4,
    title: "Generative AI",
    issuer: "LinkedIn Learning",
    date: "2025",
    category: "AI",
    img: linkedin,
    pdf: genAIPDF,
    certImg: genAIIMG,
    tools: ["Prompt Engineering", "LLMs", "AI Tools"],
  },
  {
    id: 5,
    title: "Ethics of Generative AI",
    issuer: "LinkedIn Learning",
    date: "2025",
    category: "AI",
    img: linkedin,
    pdf: ethicsAIPDF,
    certImg: ethicsAIIMG,
    tools: ["Ethics", "AI Governance", "Policy"],
  },
  {
    id: 6,
    title: "AWS Certified DevOps",
    issuer: "LinkedIn Learning",
    date: "2025",
    category: "DevOps",
    img: linkedin,
    pdf: awsDevOpsPDF,
    certImg: awsDevOpsIMG,
    tools: ["AWS", "CI/CD", "Docker"],
  },
  {
    id: 7,
    title: "Project Management Found",
    issuer: "LinkedIn Learning",
    date: "2025",
    category: "Management",
    img: linkedin,
    pdf: projectManagementPDF,
    certImg: projectManagementIMG,
    tools: ["Leadership", "Scrum", "Team Collaboration"],
  },
  {
    id: 8,
    title: "PM Certification",
    issuer: "Forage",
    date: "2025",
    category: "Management",
    img: forage ,
    pdf: pmPDF,
    certImg: pmIMG,
    tools: ["Agile", "Planning", "Resource Management"],
  },
  {
    id: 9,
    title: "Cybersecurity Essentials",
    issuer: "Cisco",
    date: "2024",
    category: "Security",
    img: cisco,
    pdf: cyberSecPDF,
    certImg: cyberSecIMG,
    tools: ["Firewalls", "Wireshark", "Encryption"],
  },
  
  {
    id: 11,
    title: "CCNA",
    issuer: "Cisco",
    date: "2024",
    category: "Networking",
    img: cisco,
    pdf: ccnaPDF,
    certImg: ccnaIMG,
    tools: ["Routing", "Switching", "Networking"],
  },
  {
    id: 12,
    title: "CCNAENS",
    issuer: "Cisco",
    date: "2024",
    category: "Networking",
    img: cisco,
    pdf: ccnaEnsPDF,
    certImg: ccnaEnsIMG,
    tools: ["Network Security", "Troubleshooting", "Infrastructure"],
  },
];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const clickLocked = useRef(false);
  const unlockTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
      document.body.classList.remove("popup-open");
    };
  }, []);

  const openPopup = (cert) => {
    clickLocked.current = true;
    document.body.classList.add("popup-open");
    setSelectedCert(cert);
    if (unlockTimer.current) clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      clickLocked.current = false;
    }, 220);
  };

  const closePopup = () => {
    if (clickLocked.current) return;
    setSelectedCert(null);
    document.body.classList.remove("popup-open");
  };

  const filteredCerts =
    activeFilter === "All"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((cert) => cert.category === activeFilter);

  const filters = [
    "All",
    "Web Development",
    "Data",
    "AI",
    "DevOps",
    "Security",
    "Networking",
    "Management",
  ];

  return (
    <>
      <article className="certifications-section">
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
            {filteredCerts.map((c) => (
              <div
                className="cert-card"
                key={c.id}
                onClick={(e) => {
                  e.stopPropagation();
                  openPopup(c);
                }}
              >
                <div className="cert-thumb">
                  <img src={c.img} alt={c.issuer} />
                </div>

                <div className="cert-overlay">
                  <span className="cert-eye">👁</span>
                </div>

                <div className="cert-info">
                  <h3 className="cert-title">{c.title}</h3>
                  <p className="cert-issuer">{c.issuer} . {c.date}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {selectedCert &&
        createPortal(
          <div className="cert-popup-overlay" onClick={closePopup}>
            <div className="cert-popup" onClick={(e) => e.stopPropagation()}>
              <div className="popup-left">
                <h2>{selectedCert.title}</h2>
                <p className="popup-issuer">{selectedCert.issuer}</p>
                <p>
                  <strong>Description:</strong> A professional certification in{" "}
                  {selectedCert.category.toLowerCase()}, focused on{" "}
                  {selectedCert.tools[0]} and practical implementation.
                </p>


                <div className="popup-tools">
                  {selectedCert.tools.map((tool, idx) => (
                    <span key={idx}>{tool}</span>
                  ))}
                </div>

                <a
                  href={selectedCert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="popup-link"
                  style={{ marginTop: "20px" }}
                >
                  🔗 View Certificate
                </a>
              </div>

              <div className="popup-right">
                <img
                  src={selectedCert.certImg}
                  alt={`${selectedCert.title} Certificate`}
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
