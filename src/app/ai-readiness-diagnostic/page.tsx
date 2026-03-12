"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function DiagnosticLandingPage() {
  const gold = '#B08D57';
  const darkText = '#1A1A1A';
  const bodyText = '#374151';
  const lightGray = '#9CA3AF';
  const lightBg = '#FAFAFA';

  // Intersection Observer for scroll animations
  const useInView = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { threshold: 0.15 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return [ref, isInView] as const;
  };

  const [heroRef, heroInView] = useInView();
  const [whatRef, whatInView] = useInView();
  const [measureRef, measureInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: lightBg, color: darkText }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        html { scroll-behavior: smooth; }
        
        .headline-font { font-family: Georgia, 'Times New Roman', serif; }
        .body-font { font-family: 'Roboto', sans-serif; }
        
        .card-shadow { box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04); }
        
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); }
        
        .btn-hover { transition: all 0.2s ease; }
        .btn-hover:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(176, 141, 87, 0.25); }
        
        .report-float { animation: float 6s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-up-delay-1 { transition-delay: 0.1s; }
        .fade-up-delay-2 { transition-delay: 0.2s; }
        .fade-up-delay-3 { transition-delay: 0.3s; }
        .fade-up-delay-4 { transition-delay: 0.4s; }
        .fade-up-delay-5 { transition-delay: 0.5s; }
      `}</style>

      {/* Header */}
      <header 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 50, 
          backgroundColor: 'rgba(250, 250, 250, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #E5E5E5'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="https://www.unpromptable.dev/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', color: darkText, textDecoration: 'none' }}>
            UNPROMPTABLE ASSETS
          </a>
          <a
            href="https://forms.fillout.com/t/x5SAyqH94ous"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover"
            style={{
              backgroundColor: gold,
              color: 'white',
              padding: '10px 20px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            Get My Report
          </a>
        </div>
      </header>

      {/* Hero Section - Full Height */}
      <section 
        ref={heroRef}
        style={{ 
          minHeight: '100vh', 
          paddingTop: '80px', 
          paddingLeft: '24px', 
          paddingRight: '24px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '64px', alignItems: 'center' }}>
            {/* Left: Content */}
            <div>
              <p 
                className={`fade-up ${heroInView ? 'visible' : ''}`}
                style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: lightGray, marginBottom: '16px' }}
              >
                Free AI Readiness Diagnostic
              </p>
              <h1 
                className={`headline-font fade-up fade-up-delay-1 ${heroInView ? 'visible' : ''}`}
                style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.15, color: darkText, marginBottom: '20px' }}
              >
                Is Your Business Ready for AI?
              </h1>
              
              <p 
                className={`fade-up fade-up-delay-2 ${heroInView ? 'visible' : ''}`}
                style={{ fontSize: '17px', lineHeight: 1.7, color: bodyText, marginBottom: '32px', maxWidth: '520px' }}
              >
                Take 5 minutes. Get a personalized report with your AI Readiness Score, your biggest gap, and the one thing to fix first.
              </p>
              
              <div 
                className={`fade-up fade-up-delay-3 ${heroInView ? 'visible' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px' }}
              >
                <a
                  href="https://forms.fillout.com/t/x5SAyqH94ous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hover"
                  style={{
                    backgroundColor: gold,
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  Get My Report
                </a>
                <span style={{ fontSize: '14px', color: lightGray }}>
                  Free • 5 minutes • 1 Comprehensive report
                </span>
              </div>
              
              {/* Social Proof Bar */}
              <div 
                className={`fade-up fade-up-delay-4 ${heroInView ? 'visible' : ''}`}
                style={{ display: 'flex', gap: '40px', paddingTop: '24px', borderTop: '1px solid #E5E5E5' }}
              >
                <div>
                  <span className="headline-font" style={{ fontSize: '20px', fontWeight: 700, color: lightGray }}>10+</span>
                  <span style={{ fontSize: '13px', color: lightGray, marginLeft: '8px' }}>products shipped</span>
                </div>
                <div>
                  <span className="headline-font" style={{ fontSize: '20px', fontWeight: 700, color: lightGray }}>25k</span>
                  <span style={{ fontSize: '13px', color: lightGray, marginLeft: '8px' }}>audience</span>
                </div>
                <div>
                  <span className="headline-font" style={{ fontSize: '20px', fontWeight: 700, color: lightGray }}>100+</span>
                  <span style={{ fontSize: '13px', color: lightGray, marginLeft: '8px' }}>paying users</span>
                </div>
              </div>
            </div>
            
            {/* Right: Report Mockup */}
            <div 
              className={`fade-up fade-up-delay-3 ${heroInView ? 'visible' : ''}`}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <div className="report-float" style={{ position: 'relative' }}>
                <div 
                  className="card-shadow"
                  style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    width: '260px',
                    transform: 'rotate(3deg)',
                    border: `1px solid ${gold}22`
                  }}
                >
                  <div style={{ height: '4px', backgroundColor: gold }}></div>
                  
                  <div style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ 
                        width: '28px', 
                        height: '28px', 
                        borderRadius: '4px', 
                        backgroundColor: gold,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '11px'
                      }}>U</div>
                      <div>
                        <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', color: lightGray }}>
                          AI Readiness Report
                        </p>
                      </div>
                    </div>
                    
                    <div style={{ 
                      textAlign: 'center', 
                      padding: '16px', 
                      marginBottom: '16px', 
                      borderRadius: '6px', 
                      backgroundColor: '#F9F9F9',
                      border: '1px solid #EFEFEF'
                    }}>
                      <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', color: lightGray, marginBottom: '6px' }}>
                        Your Score
                      </p>
                      <div className="headline-font" style={{ fontSize: '42px', fontWeight: 700, color: darkText }}>
                        73
                      </div>
                      <p style={{ fontSize: '11px', color: bodyText, marginTop: '4px' }}>
                        Acceleration Phase
                      </p>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[
                        { name: 'Operational', score: 85 },
                        { name: 'Data', score: 70 },
                        { name: 'Technical', score: 65 },
                        { name: 'Strategic', score: 80 },
                        { name: 'Capacity', score: 60 },
                      ].map((dim, i) => (
                        <div key={i}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '3px' }}>
                            <span style={{ color: lightGray }}>{dim.name}</span>
                            <span style={{ color: bodyText }}>{dim.score}%</span>
                          </div>
                          <div style={{ height: '4px', borderRadius: '2px', backgroundColor: '#EFEFEF' }}>
                            <div style={{ 
                              height: '100%', 
                              borderRadius: '2px', 
                              width: `${dim.score}%`,
                              backgroundColor: gold
                            }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Your Report - Full Height */}
      <section 
        ref={whatRef}
        style={{ 
          minHeight: '100vh', 
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div 
            className={`fade-up ${whatInView ? 'visible' : ''}`}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <h2 className="headline-font" style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px', color: darkText }}>
              What's Inside Your Report
            </h2>
            <p style={{ fontSize: '17px', color: bodyText }}>
              Not generic advice. We use proprietary AI and data configurations to create personalized insights based solely on your answers.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { title: "Your AI Readiness Score", desc: "A single number across 5 critical dimensions.", icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              )},
              { title: "Your #1 Weakness", desc: "The gap holding you back from AI success.", icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              )},
              { title: "Your Biggest Opportunity", desc: "Where AI could move the needle fastest.", icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              )},
              { title: "Your Personalized Next Step", desc: "A specific recommendation for you.", icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              )},
            ].map((item, i) => (
              <div
                key={i}
                className={`card-hover card-shadow fade-up fade-up-delay-${i + 1} ${whatInView ? 'visible' : ''}`}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  padding: '28px',
                  border: '1px solid #EFEFEF'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  backgroundColor: `${gold}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {item.icon}
                </div>
                <h3 className="headline-font" style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: darkText }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: bodyText }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Measure - Full Height */}
      <section 
        ref={measureRef}
        style={{ 
          minHeight: '100vh', 
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: lightBg
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div 
            className={`fade-up ${measureInView ? 'visible' : ''}`}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <p style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: lightGray, marginBottom: '12px' }}>
              The Framework
            </p>
            <h2 className="headline-font" style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px', color: darkText }}>
              What We Measure
            </h2>
            <p style={{ fontSize: '17px', color: bodyText, maxWidth: '550px', margin: '0 auto' }}>
              Your readiness across five dimensions that determine AI implementation success.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
            {[
              { num: "01", title: "Operational Readiness", desc: "Do you have repeatable processes AI can enhance?", icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              )},
              { num: "02", title: "Data Readiness", desc: "Is your business knowledge organized and accessible?", icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              )},
              { num: "03", title: "Technical Infrastructure", desc: "Are your tools modern and connected?", icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              )},
              { num: "04", title: "Strategic Clarity", desc: "Do you know what you'd want AI to do?", icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              )},
              { num: "05", title: "Capacity to Implement", desc: "Do you have the bandwidth and budget to move?", icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              )},
            ].map((dim, i) => (
              <div
                key={i}
                className={`card-hover card-shadow fade-up fade-up-delay-${i + 1} ${measureInView ? 'visible' : ''}`}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  padding: '24px 20px',
                  border: '1px solid #EFEFEF',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: `${gold}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px'
                }}>
                  {dim.icon}
                </div>
                <p style={{ fontSize: '11px', fontWeight: 600, color: lightGray, marginBottom: '6px' }}>{dim.num}</p>
                <h3 className="headline-font" style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: darkText }}>
                  {dim.title}
                </h3>
                <p style={{ fontSize: '12px', lineHeight: 1.5, color: bodyText }}>{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us - Full Height */}
      <section 
        ref={aboutRef}
        style={{ 
          minHeight: '100vh', 
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Left: Photos */}
            <div
              className={`fade-up ${aboutInView ? 'visible' : ''}`}
              style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}
            >
              {/* James */}
              <div style={{ textAlign: 'center' }}>
                <div
                  className="card-shadow"
                  style={{
                    width: '220px',
                    height: '420px',
                    borderRadius: '12px',
                    backgroundColor: '#F5F5F5',
                    marginBottom: '16px',
                    overflow: 'hidden',
                    border: `2px solid ${gold}33`
                  }}
                >
                  <img src="/images/james.png" alt="James" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p className="headline-font" style={{ fontWeight: 700, fontSize: '16px', color: darkText }}>James</p>
                <p style={{ fontSize: '13px', color: lightGray, marginBottom: '12px' }}>Strategy & Content</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  {[
                    { href: 'https://unpromptable.substack.com/', icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={gold}><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
                    )},
                    { href: 'https://medium.com/@jamespresbiterojr', icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={gold}><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                    )},
                    { href: 'https://www.linkedin.com/in/jamespresbitero2022/', icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={gold}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    )},
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: `${gold}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none'
                      }}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Jenny */}
              <div style={{ textAlign: 'center' }}>
                <div
                  className="card-shadow"
                  style={{
                    width: '220px',
                    height: '420px',
                    borderRadius: '12px',
                    backgroundColor: '#F5F5F5',
                    marginBottom: '16px',
                    overflow: 'hidden',
                    border: `2px solid ${gold}33`
                  }}
                >
                  <img src="/images/jenny.png" alt="Jenny" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p className="headline-font" style={{ fontWeight: 700, fontSize: '16px', color: darkText }}>Jenny</p>
                <p style={{ fontSize: '13px', color: lightGray, marginBottom: '12px' }}>Builder & Developer</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  {[
                    { href: 'https://buildtolaunch.substack.com/', icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={gold}><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
                    )},
                    { href: 'https://jenny-ouyang.medium.com/', icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={gold}><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                    )},
                    { href: 'https://www.linkedin.com/in/jenny-ouyang/', icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={gold}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    )},
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: `${gold}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none'
                      }}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className={`fade-up fade-up-delay-2 ${aboutInView ? 'visible' : ''}`}>
              <p style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: lightGray, marginBottom: '12px' }}>
                About Us
              </p>
              <h2 className="headline-font" style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px', color: darkText }}>
                Built by Experienced Builder-Creators
              </h2>
              <div style={{ fontSize: '16px', lineHeight: 1.8, color: bodyText }}>
                <p style={{ marginBottom: '16px' }}>
                  We're James and Jenny — the team behind Unpromptable Assets.  We build custom AI-powered systems for business owners who want an irreplaceable edge.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  We've shipped 10+ AI products, taught 25,000+ people through our writing, and worked hands-on with founders to implement systems that actually stick.
                </p>
                <p>
                  The biggest mistake we see? <strong style={{ color: darkText }}>Businesses skip the readiness step entirely.</strong> They jump straight to building before understanding what their business actually needs. This diagnostic gives you that clarity — in 5 minutes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Shorter */}
      <section 
        ref={ctaRef}
        style={{ 
          padding: '80px 24px',
          backgroundColor: lightBg,
          borderTop: '1px solid #EFEFEF'
        }}
      >
        <div 
          className={`fade-up ${ctaInView ? 'visible' : ''}`}
          style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 className="headline-font" style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', color: darkText }}>
            Ready to Find Out Where You Stand?
          </h2>
          <p style={{ fontSize: '17px', marginBottom: '28px', color: bodyText }}>
            5 minutes. 15 questions. 1 Comprehensive report.
          </p>
          <a
            href="https://forms.fillout.com/t/x5SAyqH94ous"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover"
            style={{
              backgroundColor: gold,
              color: 'white',
              padding: '18px 36px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none'
            }}
          >
            Get My Report
          </a>
          <p style={{ marginTop: '20px', fontSize: '13px', color: lightGray }}>
            Free • No credit card required • Results delivered via email
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 24px', borderTop: '1px solid #E5E5E5', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="https://www.unpromptable.dev/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em', color: lightGray, textDecoration: 'none' }}>
            UNPROMPTABLE ASSETS
          </a>
          <p style={{ fontSize: '12px', color: lightGray }}>
            © 2026 Unpromptable Assets. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
