import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

function App() {
  const [showWish, setShowWish] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Handle window resizing for confetti
  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const wishes = [
    "🚀 Level Up! Another year of evolution complete.",
    "🧬 To my favorite homoSapian: Wishing you a great Year Ahead.",
    "📱 Thanks for 'React-ing' to every reels 😂😂!",
    "🎂 Wishing you health, wealth, and infinite happiness!"
  ];

  return (
    <div className="app-container">
      {showWish && <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200} gravity={0.2} />}
      
      <div className="card">
        {/* Header Icon */}
        <div className="icon">
          {showWish ? '🥳' : '🕵️‍♂️'}
        </div>

        <h1 className="title">
          {showWish ? "Happy Birthday!" : "Identity Scan..."}
        </h1>

        <p className="subtitle">
          {showWish ? "Subject: homoSapian" : "Waiting for user input"}
        </p>
        
        {!showWish ? (
          <button onClick={() => setShowWish(true)} className="action-btn">
            Tap to Reveal Surprise 🎁
          </button>
        ) : (
          <div className="wishes-container">
            <div className="scroll-area">
              {wishes.map((wish, index) => (
                <div key={index} className="wish-item">
                  {wish}
                </div>
              ))}
            </div>

            <div className="footer-note">
              "Best Reel Reactor Award 🏆"
            </div>
            
            <button onClick={() => setShowWish(false)} className="reset-btn">
              Close & Replay ↺
            </button>
          </div>
        )}
      </div>

      {/* Internal CSS for Full Responsiveness */}
      <style>{`
        /* Reset & Base */
        * { box-sizing: border-box; }
        
        .app-container {
          min-height: 100vh;
          min-height: 100dvh; /* Mobile viewport fix */
          width: 100vw;
          background: linear-gradient(135deg, #8EC5FC 0%, #E0C3FC 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          padding: 20px;
          overflow: hidden;
        }

        /* Responsive Card */
        .card {
          width: 100%;
          max-width: 400px;
          max-height: 85vh; /* Prevents card from being too tall on small screens */
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 30px 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: popUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden; /* Keeps content inside rounded corners */
        }

        /* Typography Scaling */
        .icon { font-size: clamp(3rem, 10vw, 4rem); margin-bottom: 10px; }
        
        .title { 
          color: #2d3436; 
          font-size: clamp(1.5rem, 5vw, 2rem); 
          font-weight: 800; 
          margin: 0 0 5px 0; 
          line-height: 1.2;
        }

        .subtitle { 
          color: #636e72; 
          font-size: clamp(0.9rem, 4vw, 1.1rem); 
          margin-bottom: 25px; 
        }

        /* Button Styling */
        .action-btn {
          width: 100%;
          padding: 16px; 
          font-size: 1.1rem; 
          font-weight: bold; 
          cursor: pointer; 
          background: linear-gradient(45deg, #6c5ce7, #a29bfe); 
          color: white; 
          border: none; 
          border-radius: 16px; 
          box-shadow: 0 8px 20px rgba(108, 92, 231, 0.3);
          transition: transform 0.2s;
        }
        .action-btn:active { transform: scale(0.96); }

        /* Wishes Area - Handles Scroll if list is long */
        .wishes-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 100%; /* Fill available space */
        }

        .scroll-area {
          overflow-y: auto; /* Adds scrollbar only if needed */
          max-height: 40vh; /* Limits height so buttons stay visible */
          padding-right: 5px; /* Space for scrollbar */
          -webkit-overflow-scrolling: touch; /* Smooth scroll on iOS */
        }

        .wish-item {
          background: white;
          margin-bottom: 10px;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          font-size: 0.95rem;
          color: #444;
          line-height: 1.4;
          text-align: left;
        }

        .footer-note {
          margin-top: 15px;
          font-size: 0.8rem;
          color: #b2bec3;
          font-style: italic;
        }

        .reset-btn {
          margin-top: 15px;
          background: transparent;
          border: none;
          color: #6c5ce7;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 10px;
        }

        @keyframes popUp {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #dfe6e9; border-radius: 10px; }
      `}</style>
    </div>
  );
}

export default App;