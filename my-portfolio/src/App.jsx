import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Preloader from "./components/Preloader"; // 🧩 Preloader
import "./styles/App.css";

// 🌀 Wrapper for animated route transitions
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/about"
          element={
            <motion.div
              className="page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/resume"
          element={
            <motion.div
              className="page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Resume />
            </motion.div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <motion.div
              className="page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Portfolio />
            </motion.div>
          }
        />
        <Route
          path="/certifications"
          element={
            <motion.div
              className="page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Certifications />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              className="page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Contact />
            </motion.div>
          }
        />
        {/* Default and fallback routes */}
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

// === App with Preloader ===
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // ⏱️ Simulate preloader delay
    const timer = setTimeout(() => setIsLoaded(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {!isLoaded ? (
        <Preloader />
      ) : (
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <AnimatedRoutes />
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
