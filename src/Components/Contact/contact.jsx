import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_ITEMS, TERMINAL_LINES, EXPERIENCE, PROJECTS,
  SKILL_GROUPS, EDUCATION, ACHIEVEMENTS
} from "../../data.js";
import Reveal from '../Revel/reveal.jsx';

import SectionEyebrow from '../SectionEyebrow/sectioneyebrow.jsx';
import SectionHeading from '../SectionHeading/sectionheading.jsx';

const focusRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2";

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const inputClasses = `w-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] px-4 py-3 rounded-md focus:outline-none focus:border-[var(--accent)] transition-all ${focusRing} focus-visible:ring-offset-[var(--bg)]`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    setStatus('sending');
        
    const formData = new FormData();
    
    formData.append("access_key",import.meta.env.VITE_WEB3FORMS_ACCESS_KEY); 
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
  //  in case if fetch fails try catch
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus('sent');
        setTimeout(() => {
          setForm({ name: '', email: '', message: '' }); 
          setStatus('idle'); 
        }, 10000);
      }
    } catch (error) {
    console.error("Error sending message:", error);
      
      // show error state
      setStatus('error'); 
      
      // after 5 sec button back to normal
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 scroll-mt-24">
      <Reveal>
        <SectionEyebrow>// get in touch</SectionEyebrow>
        <SectionHeading>Let's build something</SectionHeading>
      </Reveal>
      
      <div className="grid md:grid-cols-2 gap-12">
        <Reveal>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block font-mono-custom text-xs text-[var(--text-muted)] mb-1.5">name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClasses} />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono-custom text-xs text-[var(--text-muted)] mb-1.5">email</label>
            
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClasses} />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono-custom text-xs text-[var(--text-muted)] mb-1.5">message</label>
              <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} className={`${inputClasses} resize-none`}></textarea>
            </div>
            
           <button
              type="submit"
              disabled={status === 'sending'}
              className={`mt-2 bg-[var(--accent)] text-[var(--bg)] font-mono-custom font-semibold py-3 px-6 rounded-md hover:brightness-110 transition-all w-max ${focusRing} focus-visible:ring-offset-[var(--bg)] ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''} ${status === 'error' ? 'bg-red-500' : ''}`}
            >
              {status === 'sending' ? 'Sending...' : 
               status === 'sent' ? 'Message sent!' : 
               status === 'error' ? 'Message not sent! Internal error.' : 
               'Send message'}
            </button>
            
            {status === 'sent' && (
              <p className="text-sm text-[var(--accent-2)] font-mono-custom">✓ Message sent!</p>
            )}
          </form>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/aman-choudhary856"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-5 py-4 rounded-md border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all ${focusRing} focus-visible:ring-offset-[var(--bg)]`}
            >
              <div className="flex items-center gap-3">
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </div>
              <span>→</span>
            </a>

            <a
              href="https://github.com/alpha-byte-2"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-5 py-4 rounded-md border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all ${focusRing} focus-visible:ring-offset-[var(--bg)]`}
            >
              <div className="flex items-center gap-3">
               {/* Github img/icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </div>
              <span>→</span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amanchoudhary14112004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-5 py-4 rounded-md border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all ${focusRing} focus-visible:ring-offset-[var(--bg)]`}
            >
              <div className="flex items-center gap-3">
               
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
                Gmail
              </div>
              <span>→</span>
            </a>

             <a
              href="https://drive.google.com/drive/folders/1Z9lGqvnzxS05EIvHRefoGKztoGpxtbVu?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-5 py-4 rounded-md border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all ${focusRing} focus-visible:ring-offset-[var(--bg)]`}
            >
              <div className="flex items-center gap-3">              
                My Resume 
              </div>
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
