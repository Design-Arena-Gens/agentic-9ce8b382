'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scene, setScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const timings = [3000, 3000, 3000, 3000, 4000];
    const timeout = setTimeout(() => {
      if (scene < 4) {
        setScene(scene + 1);
      } else {
        setScene(0);
      }
    }, timings[scene]);

    return () => clearTimeout(timeout);
  }, [scene, isPlaying]);

  const startTrailer = () => {
    setIsPlaying(true);
    setScene(0);
  };

  const scenes = [
    {
      title: "APEX",
      subtitle: "Gaming Laptop",
      text: "Unleash Your Power",
      bg: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 100%)",
      particle: true
    },
    {
      title: "RTX 4090",
      subtitle: "16GB GDDR6X",
      text: "Extreme Graphics. Infinite Possibilities.",
      bg: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
      particle: false
    },
    {
      title: "360Hz",
      subtitle: "OLED Display",
      text: "See Every Frame. Feel Every Moment.",
      bg: "linear-gradient(135deg, #1a0033 0%, #330066 100%)",
      particle: false
    },
    {
      title: "Intel Core i9",
      subtitle: "14th Gen",
      text: "Power Beyond Limits",
      bg: "linear-gradient(135deg, #000000 0%, #0066cc 100%)",
      particle: false
    },
    {
      title: "DOMINATE",
      subtitle: "THE GAME",
      text: "Pre-order now. Available December 2025.",
      bg: "linear-gradient(135deg, #ff0000 0%, #000000 100%)",
      particle: true
    }
  ];

  const currentScene = scenes[scene];

  if (!isPlaying) {
    return (
      <div style={styles.startScreen}>
        <div style={styles.startContent}>
          <h1 style={styles.startTitle}>APEX GAMING</h1>
          <p style={styles.startSubtitle}>Experience the Ultimate Gaming Machine</p>
          <button onClick={startTrailer} style={styles.startButton}>
            WATCH TRAILER
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{...styles.container, background: currentScene.bg}}>
      {currentScene.particle && <Particles />}

      <div style={styles.scanline}></div>

      <div style={styles.content}>
        <div style={styles.titleContainer}>
          <h1 style={{
            ...styles.title,
            animation: 'fadeInUp 1s ease-out, glitch 0.3s infinite'
          }}>
            {currentScene.title}
          </h1>
          <h2 style={{
            ...styles.subtitle,
            animation: 'fadeInUp 1s ease-out 0.2s backwards'
          }}>
            {currentScene.subtitle}
          </h2>
        </div>

        <p style={{
          ...styles.text,
          animation: 'fadeInUp 1s ease-out 0.4s backwards'
        }}>
          {currentScene.text}
        </p>

        <div style={styles.progressBar}>
          {scenes.map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.progressSegment,
                background: i === scene ? '#ff0000' : 'rgba(255,255,255,0.3)'
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glitch {
          0%, 100% { text-shadow: 2px 2px #ff0000, -2px -2px #00ffff; }
          25% { text-shadow: -2px 2px #ff0000, 2px -2px #00ffff; }
          50% { text-shadow: 2px -2px #ff0000, -2px 2px #00ffff; }
          75% { text-shadow: -2px -2px #ff0000, 2px 2px #00ffff; }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

function Particles() {
  return (
    <div style={styles.particles}>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, ${Math.random() * 0.8})`,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            borderRadius: '50%',
            animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
            animationDelay: Math.random() * 2 + 's',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
}

const styles = {
  startScreen: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #000000 0%, #1a0a2e 100%)',
    color: 'white',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  startContent: {
    textAlign: 'center',
    animation: 'pulse 2s infinite ease-in-out',
  },
  startTitle: {
    fontSize: '5rem',
    fontWeight: '900',
    margin: '0',
    letterSpacing: '0.2em',
    textShadow: '0 0 20px rgba(255,0,0,0.8), 0 0 40px rgba(255,0,0,0.5)',
  },
  startSubtitle: {
    fontSize: '1.5rem',
    fontWeight: '300',
    marginTop: '1rem',
    opacity: 0.8,
    letterSpacing: '0.1em',
  },
  startButton: {
    marginTop: '3rem',
    padding: '1.5rem 4rem',
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'white',
    background: 'rgba(255,0,0,0.8)',
    border: '2px solid #ff0000',
    cursor: 'pointer',
    letterSpacing: '0.2em',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 30px rgba(255,0,0,0.5)',
  },
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background 1s ease',
  },
  particles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  },
  scanline: {
    position: 'absolute',
    width: '100%',
    height: '2px',
    background: 'rgba(255,255,255,0.1)',
    animation: 'scanline 8s linear infinite',
    zIndex: 2,
  },
  content: {
    textAlign: 'center',
    zIndex: 3,
    maxWidth: '90%',
  },
  titleContainer: {
    marginBottom: '3rem',
  },
  title: {
    fontSize: 'clamp(4rem, 12vw, 10rem)',
    fontWeight: '900',
    margin: '0',
    letterSpacing: '0.1em',
    lineHeight: '1',
  },
  subtitle: {
    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
    fontWeight: '300',
    margin: '1rem 0 0 0',
    letterSpacing: '0.3em',
    opacity: 0.9,
  },
  text: {
    fontSize: 'clamp(1rem, 2.5vw, 2rem)',
    fontWeight: '400',
    letterSpacing: '0.15em',
    marginTop: '2rem',
    textTransform: 'uppercase',
    opacity: 0.8,
  },
  progressBar: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '4rem',
  },
  progressSegment: {
    width: '60px',
    height: '4px',
    transition: 'background 0.3s ease',
  }
};
