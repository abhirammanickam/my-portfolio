import React, { useEffect, useState } from "react";
import "../styles/Preloader.css";
import luffyGif from "../assets/luffy-smile.gif";

export default function Preloader({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const textDelay = setTimeout(() => setAnimateText(true), 600);

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(textDelay);
    };
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="gif-wrapper">
          <img src={luffyGif} alt="Luffy Preloader" className="luffy-gif" />
        </div>
        <h1 className={`preloader-text ${animateText ? "fade-in" : ""}`}>
          Abhiram M
        </h1>
        <p className={`preloader-subtext ${animateText ? "fade-in-delay" : ""}`}>
          Open to Work 🧑‍💻
        </p>
      </div>
    </div>
  );
}
