import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_ITEMS, TERMINAL_LINES, EXPERIENCE, PROJECTS,
  SKILL_GROUPS, EDUCATION, ACHIEVEMENTS
} from "../../data.js";
import Reveal from '../Revel/reveal.jsx';
import SectionEyebrow from '../SectionEyebrow/sectioneyebrow.jsx';
import SectionHeading from '../SectionHeading/sectionheading.jsx';
import TerminalHero from '../TerminalHero/terminalhero.jsx';

const focusRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2";

export default function HomeSection() {
  return (
    <section id="home" className="pt-16 pb-20 sm:pt-24 sm:pb-28 scroll-mt-24">
   
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 w-full">

      
        <div className="w-full max-w-2xl flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center shrink-0">
              
              <span className="font-mono-custom font-extrabold text-base sm:text-lg text-[var(--bg)]">AC</span>
            </div>

          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text)] mb-5 tracking-tight leading-[1.1]">
            Aman Choudhary
          </h1>
          <p className="text-lg text-[var(--text-muted)] mb-8 max-w-xl leading-relaxed">
            Electrical Engineering student at NIT Patna.
            <br></br>
            2028 Batch.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className={`px-5 py-3 rounded-md bg-[var(--accent)] text-[var(--bg)] font-semibold text-sm hover:brightness-110 transition-all ${focusRing} focus-visible:ring-offset-[var(--bg)]`}
            >
              View my work
            </a>
            <a
              href="#contact"
              className={`px-5 py-3 rounded-md border border-[var(--border)] text-[var(--text)] font-semibold text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all ${focusRing} focus-visible:ring-offset-[var(--bg)]`}
            >
              Get in touch
            </a>
          </div>
          <TerminalHero />
        </div>

        
        <div className="w-full max-w-sm lg:w-[400px] shrink-0 mt-8 lg:mt-0">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--border)] bg-[var(--surface)] aspect-[4/5] shadow-2xl group hover:border-[var(--accent)] transition-colors duration-500">
             
              <img
                src="/profile.jpg"
                alt="Aman Choudhary Profile"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10"></div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}