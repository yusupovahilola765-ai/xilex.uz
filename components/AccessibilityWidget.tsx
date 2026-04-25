"use client";

import { useState, useEffect } from "react";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Base font size
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Shrift o'zgarishi
    document.documentElement.style.fontSize = `${fontSize}px`;

    // Service Worker registration for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  }, [fontSize]);

  useEffect(() => {
    // Kontrast o'zgarishi
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const toggleWidget = () => setIsOpen(!isOpen);

  const increaseFont = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 2, 12));
  const resetFont = () => setFontSize(16);

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px', // Chap pastki burchak
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '12px'
    }}>
      {isOpen && (
        <div className="glass animate-fade-in" style={{
          padding: '20px',
          borderRadius: '16px',
          width: '280px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          background: 'rgba(15, 23, 42, 0.95)'
        }}>
          <h4 style={{ margin: '0 0 16px 0', color: 'var(--primary)', display: 'flex', justifyContent: 'space-between' }}>
            Maxsus imkoniyatlar
            <button onClick={toggleWidget} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }}>✕</button>
          </h4>
          
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '14px', marginBottom: '8px', color: '#cbd5e1' }}>Matn o'lchami:</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={decreaseFont} style={btnStyle}>A-</button>
              <button onClick={resetFont} style={btnStyle}>A</button>
              <button onClick={increaseFont} style={btnStyle}>A+</button>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '14px', marginBottom: '8px', color: '#cbd5e1' }}>Ko'rinish:</div>
            <button 
              onClick={() => setHighContrast(!highContrast)} 
              style={{
                ...btnStyle, 
                width: '100%', 
                background: highContrast ? 'var(--primary)' : 'rgba(255,255,255,0.1)'
              }}
            >
              {highContrast ? "Odatdagiga qaytish" : "Yuqori kontrast (Qora-Oq)"}
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={toggleWidget}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.5)',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        title="Zaif ko'ruvchilar uchun maxsus panel"
      >
        👁️
      </button>
    </div>
  );
}

const btnStyle = {
  flex: 1,
  padding: '8px',
  background: 'rgba(255,255,255,0.1)',
  color: 'white',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};
