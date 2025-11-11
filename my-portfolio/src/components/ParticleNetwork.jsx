  // src/components/ParticleNetwork.jsx
  import React, { useCallback } from "react";
  import Particles from "react-tsparticles";
  import { loadFull } from "tsparticles";

  export default function ParticleNetwork() {
    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);

    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: {
              value: 160,
              density: { enable: true, area: 900 },
            },
            color: {
              value: ["#FFD35A", "#F4B844", "#E39A2B"], // smooth gradient palette
              animation: {
                enable: true,
                speed: 8,
                sync: false,
              },
            },
            links: {
              enable: true,
              color: "#F4B844",
              distance: 140,
              opacity: 0.25, // permanent glow intensity
              width: 1,
              triangles: { enable: true, opacity: 0.08 },
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              attract: { enable: false },
              drift: 0.05,
            },
            opacity: {
              value: { min: 0.25, max: 0.55 },
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
              },
            },
            size: {
              value: { min: 1.2, max: 3.5 },
              animation: {
                enable: true,
                speed: 2,
                sync: false,
                startValue: "random",
                minimumValue: 1,
              },
            },
            shape: { type: "circle" },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              // disable actual hover detection, always on effect
              onHover: { enable: false },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: { opacity: 0.3 },
              },
            },
          },
        }}
        className="particle-layer"
      />
    );
  }
