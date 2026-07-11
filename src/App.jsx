import React, { useState, useEffect } from 'react';

// Import all your components from the index.js file inside the Components folder
import { 
  Achievement, 
  Contact, 
  Education, 
  Experience, 
  Footer, 
  Home, 
  Nav, 
  Project, 
  Skill, 
  StatusBar 
} from './Components'; 

function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[110px] -z-10"
      style={{ background: 'var(--accent)' }}
    ></div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.2, rootMargin: "-20% 0px -40% 0px" });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Contact section active fix
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden text-[var(--text)]">
      <AmbientGlow />
      
      {/* Pass the activeSection state to Nav */}
      <Nav activeSection={activeSection} />
      
      <main className="max-w-6xl mx-auto px-6 sm:px-10 pt-16">
        {/* Use the exact names you imported at the top */}
        <Home />
        <Experience />
        <Project />
        <Skill />
        <Education />
        <Achievement />
        <Contact />
      </main>
      
      <Footer />
      <StatusBar activeSection={activeSection} />
    </div>
  );
}